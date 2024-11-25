import { Resend } from 'resend';

// Initialize Resend with error checking
const resendApiKey = import.meta.env.VITE_RESEND_API_KEY;
if (!resendApiKey) {
  console.error('Missing Resend API key in environment variables');
}

const resend = new Resend(resendApiKey);

export const sendConfirmationEmail = async (formData: {
  email: string;
  farmerName: string;
  cropType: string;
  farmAddress: string;
  phoneNumber: string;
  acreage: number;
  preferredSamplingDate: Date;
  notes?: string;
}) => {
  try {
    // Verify email format
    const { email } = formData;
    if (!email || !email.includes('@')) {
      throw new Error('Invalid email address');
    }

    // Format date properly
    const formattedDate = formData.preferredSamplingDate instanceof Date 
      ? formData.preferredSamplingDate.toLocaleDateString()
      : new Date(formData.preferredSamplingDate).toLocaleDateString();

    const emailData = {
      from: 'Soil Analysis <onboarding@resend.dev>', // Use Resend's default sender during testing
      to: [email],
      subject: 'Soil Analysis Request Confirmation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a4d2e;">Soil Analysis Request Confirmation</h1>
          <p>Dear ${formData.farmerName},</p>
          <p>Thank you for submitting your soil analysis request. Here are the details of your submission:</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Request Details:</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Crop Type:</strong> ${formData.cropType}</li>
              <li><strong>Farm Address:</strong> ${formData.farmAddress}</li>
              <li><strong>Contact Number:</strong> ${formData.phoneNumber}</li>
              <li><strong>Acreage:</strong> ${formData.acreage} acres</li>
              <li><strong>Preferred Sampling Date:</strong> ${formattedDate}</li>
              ${formData.notes ? `<li><strong>Additional Notes:</strong> ${formData.notes}</li>` : ''}
            </ul>
          </div>

          <p>We will review your request and contact you shortly to confirm the sampling date and provide further instructions.</p>
          
          <p>If you have any questions, please don't hesitate to contact us.</p>
          
          <p style="margin-top: 30px;">Best regards,<br>Your Soil Analysis Team</p>
        </div>
      `
    };

    console.log('Sending email with data:', emailData);

    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Resend API Error:', error);
      throw error;
    }

    console.log('Email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
};