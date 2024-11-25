import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Label } from '../ui/label';
import { Alert, AlertDescription } from '../ui/alert';
import { SoilAnalysisRequest, CropType } from '../../types/analysis';
import { supabase, SoilAnalysisService } from '../../services/supabase';
import { useNavigate } from 'react-router-dom';

const cropTypes: CropType[] = ['corn', 'wheat', 'soybeans', 'cotton', 'rice'];

const phoneRegex = /^\+?[1-9]\d{1,14}$/;

const formSchema = z.object({
  cropType: z.enum(['corn', 'wheat', 'soybeans', 'cotton', 'rice'] as const),
  farmerName: z.string().min(2, 'Name must be at least 2 characters'),
  farmAddress: z.string().min(5, 'Please enter a valid address'),
  phoneNumber: z.string().regex(phoneRegex, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  acreage: z.number().min(1, 'Acreage must be greater than 0'),
  preferredSamplingDate: z.date().min(new Date(), 'Date must be in the future'),
  notes: z.string().optional(),
});

const SoilAnalysisForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [submitSuccess] = React.useState(false);
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SoilAnalysisRequest>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: SoilAnalysisRequest) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const { error } = await supabase
        .from('soil_analysis_requests')
        .insert([
          {
            crop_type: data.cropType,
            email: data.email,
            address: data.farmAddress,
            farmer_name: data.farmerName,
            phone: data.phoneNumber,
            status: 'pending',
            acreage: data.acreage,
            notes: data.notes,
            preferred_date: data.preferredSamplingDate.toISOString(),
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) throw error;
      
      // Send confirmation email using Edge Function
      await SoilAnalysisService.sendEmailConfirmation(data);

      // Navigate to confirmation page with form data
      navigate('/analysis-confirmation', { state: { formData: data } });
    } catch (error) {
      setSubmitError('Failed to submit request. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-visible">
      <CardHeader>
        <CardTitle>Request Soil Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
            <Label htmlFor="cropType">Crop Type</Label>
            <Controller
                name="cropType"
                control={control}
                render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                    <SelectValue placeholder="Select crop type" />
                    </SelectTrigger>
                    <SelectContent>
                    {cropTypes.map((crop) => (
                        <SelectItem key={crop} value={crop}>
                        {crop.charAt(0).toUpperCase() + crop.slice(1)}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                )}
            />
            {errors.cropType && (
                <p className="text-sm text-red-500">{errors.cropType.message}</p>
            )}
            </div>

          <div className="space-y-2">
            <Label htmlFor="farmerName">Full Name</Label>
            <Input
              {...register('farmerName')}
              placeholder="John Doe" defaultValue="Bank" 
            />
            {errors.farmerName && (
              <p className="text-sm text-red-500">{errors.farmerName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="farmAddress">Farm Address</Label>
            <Input
              {...register('farmAddress')}
              placeholder="1234 Farm Road, City, State, ZIP" defaultValue="Asgrad" 
            />
            {errors.farmAddress && (
              <p className="text-sm text-red-500">{errors.farmAddress.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                {...register('phoneNumber')}
                placeholder="+1234567890" defaultValue="+66981519392" 
              />
              {errors.phoneNumber && (
                <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register('email')}
                type="email"
                placeholder="farmer@example.com" defaultValue="bankp@hotmail.com" 
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="acreage">Acreage</Label>
              <Input
                {...register('acreage', { valueAsNumber: true })}
                type="number"
                min="1"
                placeholder="100" defaultValue="1" 
              />
              {errors.acreage && (
                <p className="text-sm text-red-500">{errors.acreage.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredSamplingDate">Preferred Sampling Date</Label>
              <Input
                {...register('preferredSamplingDate', { valueAsDate: true })}
                type="date"
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.preferredSamplingDate && (
                <p className="text-sm text-red-500">{errors.preferredSamplingDate.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <Input
              {...register('notes')}
              placeholder="Any special instructions or requirements"
            />
          </div>

          {submitError && (
            // <Alert variant="destructive">
            <Alert>
              <AlertDescription>{submitError}</AlertDescription>
            </Alert>
          )}

          {submitSuccess && (
            <Alert className="bg-green-50">
              <AlertDescription>
                Your soil analysis request has been submitted successfully! We'll contact you to confirm the sampling date.
              </AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SoilAnalysisForm;