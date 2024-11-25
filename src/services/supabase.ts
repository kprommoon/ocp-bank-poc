
import { createClient } from '@supabase/supabase-js';
import { SoilAnalysisRequest } from '../types/analysis';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export class SoilAnalysisService {
  // Create a new soil analysis request
  static async createRequest(request: Omit<SoilAnalysisRequest, 'status' | 'createdAt'>) {
    const { data, error } = await supabase
      .from('soil_analysis_requests')
      .insert([
        {
          crop_type: request.cropType,
          farmer_name: request.farmerName,
          farm_address: request.farmAddress,
          phone_number: request.phoneNumber,
          email: request.email,
          acreage: request.acreage,
          preferred_sampling_date: request.preferredSamplingDate.toISOString(),
          notes: request.notes,
          status: 'pending'
        }
      ])
      .select()
      .single();

    if (error) {
      console.log('whatwhat');
      console.error('Error creating soil analysis request:', error);
      throw new Error('Failed to create soil analysis request');
    }

    return SoilAnalysisService.transformRowToRequest(data);
  }

  // Get all requests for a specific email
  static async getRequestsByEmail(email: string) {
    const { data, error } = await supabase
      .from('soil_analysis_requests')
      .select('*')
      .eq('email', email)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching requests:', error);
      throw new Error('Failed to fetch soil analysis requests');
    }

    return data.map(row => SoilAnalysisService.transformRowToRequest(row));
  }

  // Get a single request by ID
  static async getRequestById(id: string) {
    const { data, error } = await supabase
      .from('soil_analysis_requests')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching request:', error);
      throw new Error('Failed to fetch soil analysis request');
    }

    return SoilAnalysisService.transformRowToRequest(data);
  }

  // Update request status
  static async updateRequestStatus(id: string, status: SoilAnalysisRequest['status']) {
    const { data, error } = await supabase
      .from('soil_analysis_requests')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating request status:', error);
      throw new Error('Failed to update request status');
    }

    return SoilAnalysisService.transformRowToRequest(data);
  }

  // Helper function to transform database row to our TypeScript type
  public static transformRowToRequest(row: any): SoilAnalysisRequest & { id: string } {
    return {
      id: row.id,
      cropType: row.crop_type,
      farmerName: row.farmer_name,
      farmAddress: row.farm_address,
      phoneNumber: row.phone_number,
      email: row.email,
      acreage: row.acreage,
      preferredSamplingDate: new Date(row.preferred_sampling_date),
      notes: row.notes,
      status: row.status,
      createdAt: new Date(row.created_at)
    };
  }
}

// Real-time subscription setup
export const setupRequestSubscription = (
  email: string,
  onUpdate: (request: SoilAnalysisRequest & { id: string }) => void
) => {
  const subscription = supabase
    .channel('soil_analysis_changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'soil_analysis_requests',
        filter: `email=eq.${email}`
      },
      async (payload) => {
        if (payload.new) {
          const transformedRequest = SoilAnalysisService.transformRowToRequest(
            payload.new
          );
          onUpdate(transformedRequest);
        }
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(subscription);
  };
};