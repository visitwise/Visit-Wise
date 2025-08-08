// src/pages/LegalPage.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../axios';

const LegalPage: React.FC = () => {
  const { type } = useParams<{ type: any }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await api.get(`/content/${type}`);
        setContent(res.data.content);
      } catch (err: any) {
        setError('Content not found or failed to load.');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [type]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto pt-24 px-4 pb-12">
        <div className='text-3xl font-bold pb-4'>{type[0].toUpperCase() + type.slice(1)}</div>
      <div className="prose prose-lg prose-slate" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default LegalPage;
