import { useState } from 'react';
import { supabase } from '../services/supabase';

const SupabaseTest = () => {
  const [status, setStatus] = useState<string>('');

  const testConnection = async () => {
    try {
      const { data, error } = await supabase.from('test').select('*').limit(1);
      
      if (error) {
        setStatus(`Error: ${error.message}`);
        return;
      }
      
      setStatus('Successfully connected to Supabase!');
      console.log('Test data:', data);
    } catch (error) {
      setStatus(`Connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
      <button
        onClick={testConnection}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Test Connection
      </button>
      {status && (
        <div className="mt-4 p-4 border rounded">
          <p>{status}</p>
        </div>
      )}
    </div>
  );
};

export default SupabaseTest;