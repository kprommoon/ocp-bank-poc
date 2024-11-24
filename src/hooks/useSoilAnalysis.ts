import { useState, useEffect } from 'react';
import { SoilAnalysisRequest } from '../types/analysis'
import { SoilAnalysisService, setupRequestSubscription } from '../services/supabase'

export function useSoilAnalysis(email?: string) {
  const [requests, setRequests] = useState<(SoilAnalysisRequest & { id: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!email) return;

    const fetchRequests = async () => {
      try {
        const data = await SoilAnalysisService.getRequestsByEmail(email);
        setRequests(data);
      } catch (err) {
        setError('Failed to fetch soil analysis requests');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();

    // Set up real-time subscription
    const unsubscribe = setupRequestSubscription(email, (updatedRequest) => {
      setRequests((prev) => {
        const index = prev.findIndex((r) => r.id === updatedRequest.id);
        if (index === -1) {
          return [...prev, updatedRequest];
        }
        const newRequests = [...prev];
        newRequests[index] = updatedRequest;
        return newRequests;
      });
    });

    return () => {
      unsubscribe();
    };
  }, [email]);

  const submitRequest = async (request: Omit<SoilAnalysisRequest, 'status' | 'createdAt'>) => {
    try {
      const newRequest = await SoilAnalysisService.createRequest(request);
      setRequests((prev) => [...prev, newRequest]);
      return newRequest;
    } catch (err) {
      setError('Failed to submit soil analysis request');
      throw err;
    }
  };

  return {
    requests,
    loading,
    error,
    submitRequest
  };
}