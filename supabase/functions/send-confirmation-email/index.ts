// supabase/functions/send-confirmation-email/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { Resend } from 'npm:resend@1.1.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface RequestBody {
  email: string
  farmerName: string
  cropType: string
  farmAddress: string
  phoneNumber: string
  acreage: number
  preferredSamplingDate: string
  notes?: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const resend = new Resend(Deno.env.get('RESEND_API_KEY'))
    const requestData: RequestBody = await req.json()
    
    // Validate required fields
    if (!requestData.email || !requestData.farmerName) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const formattedDate = new Date(requestData.preferredSamplingDate).toLocaleDateString()

    const { data, error } = await resend.emails.send({
      from: 'Soil Analysis <onboarding@resend.dev>',
      to: [requestData.email],
      subject: 'Soil Analysis Request Confirmation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a4d2e;">Soil Analysis Request Confirmation</h1>
          <p>Dear ${requestData.farmerName},</p>
          <p>Thank you for submitting your soil analysis request. Here are the details of your submission:</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Request Details:</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Crop Type:</strong> ${requestData.cropType}</li>
              <li><strong>Farm Address:</strong> ${requestData.farmAddress}</li>
              <li><strong>Contact Number:</strong> ${requestData.phoneNumber}</li>
              <li><strong>Acreage:</strong> ${requestData.acreage} acres</li>
              <li><strong>Preferred Sampling Date:</strong> ${formattedDate}</li>
              ${requestData.notes ? `<li><strong>Additional Notes:</strong> ${requestData.notes}</li>` : ''}
            </ul>
          </div>

          <p>We will review your request and contact you shortly to confirm the sampling date and provide further instructions.</p>
          
          <p>If you have any questions, please don't hesitate to contact us.</p>
          
          <p style="margin-top: 30px;">Best regards,<br>Your Soil Analysis Team</p>
        </div>
      `
    })

    if (error) {
      console.error('Resend API Error:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ data }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})