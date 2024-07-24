'use client';

import GlobalApi from '@/service/GlobalApi'; // Adjust the import according to your file structure
import { useEffect, useState } from 'react';

const TestimonialSlug = ({ params }) => {
  const { id } = params;
  const [space, setSpace] = useState({});

  const fetchSpace = async () => {
    try {
      const data = await GlobalApi.getSpaceById(id);
      setSpace(data.data);
    } catch (error) {
      console.error("Error fetching Spaces:", error);
    }
  };

  useEffect(() => {
    fetchSpace();
  }, [id]);

  return (
    <div>
      <h1>{space.header}</h1>
      <p>{space.spaceName}</p>
      <p>{space._id}</p>
    </div>
  );
};

export default TestimonialSlug;
