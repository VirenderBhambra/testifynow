'use client';

import GlobalApi from '@/service/GlobalApi'; // Adjust the import according to your file structure
import { useEffect, useState } from 'react';

const TestimonialSlug = ({ params }) => {
  const { id } = params;
  const [space, setMySpace] = useState({});
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState([]);

  const fetchSpace = async () => {
    try {
      const data = await GlobalApi.getSpaceById(id);
      setMySpace(data.data);
      setAnswers(Array(data.data.questions.length).fill('')); // Initialize answers state
    } catch (error) {
      console.error("Error fetching Spaces:", error);
    }
  };

  useEffect(() => {
    fetchSpace();
  }, [id]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAnswerChange = (index, e) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = {
      testimonialId:id, // Add the testimonial id
      name,
      answers,
    };
    try {
      await GlobalApi.submitTestimonial(result);
      alert("Testimonial submitted successfully!");
      setName('');
      setAnswers(Array(space.questions.length).fill('')); // Reset answers state
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{space?.header}</h1>
      <p className="text-lg mb-2">{space?.spaceName}</p>
      <p className="text-sm text-gray-500 mb-6">{space?._id}</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={handleNameChange} 
            required 
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {space?.questions?.map((question, index) => (
          <div key={index} className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">{question}</label>
            <input
              type="text"
              value={answers[index]}
              onChange={(e) => handleAnswerChange(index, e)}
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <button 
          type="submit" 
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TestimonialSlug;
