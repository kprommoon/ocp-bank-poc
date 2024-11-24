export type CropType = 'corn' | 'wheat' | 'soybeans' | 'cotton' | 'rice';

export interface SoilAnalysisRequest {
  cropType: CropType;
  farmerName: string;
  farmAddress: string;
  phoneNumber: string;
  email: string;
  acreage: number;
  preferredSamplingDate: Date;
  notes?: string;
  status: 'pending' | 'scheduled' | 'completed';
  createdAt: Date;
}

export interface FormError {
  type: string;
  message: string;
}

// Supabase specific types
export type SoilAnalysisRow = Omit<SoilAnalysisRequest, 'preferredSamplingDate' | 'createdAt'> & {
  preferred_sampling_date: string;
  created_at: string;
  id: string;
}