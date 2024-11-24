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

export interface SoilAnalysisRow {
  id: string;
  crop_type: CropType;
  farmer_name: string;
  farm_address: string;
  phone_number: string;
  email: string;
  acreage: number;
  preferred_sampling_date: string;
  notes?: string;
  status: 'pending' | 'scheduled' | 'completed';
  created_at: string;
}