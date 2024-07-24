"use client";
import { LoaderCircleIcon, SidebarCloseIcon } from "lucide-react";
import React, { useState } from "react";
import { TestimonialPreview } from "./TestimonialPreview";
import { TestimonialForm } from "./TestimonialForm";
import GlobalApi from "@/service/GlobalApi";

export const TestimonialUpdate = ({ id}) => {
  const [loading, setLoading] = useState(false);
  const [testimonialData, setTestimonialData] = useState({
    spaceName: null,
    header: null,
    message: null,
    questions: [
      "Who are you / what are you working on?",
      "How has [our product / service] helped you?",
      "What is the best thing about [our product / service]?",
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonialData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(testimonialData);
    // Post data to your server
    try {
      setLoading(true);
      await GlobalApi.createSpace(testimonialData);
      setLoading(false);
      alert("Testimonial submitted successfully!");
      setTestimonialData({
        spaceName: null,
        header: null,
        message: null,
        questions: [
          "Who are you / what are you working on?",
          "How has [our product / service] helped you?",
          "What is the best thing about [our product / service]?",
        ],
      });
      fetchTestimonials();
      setLoading(false);
      
      onClose();
    } catch (error) {
      setLoading(false);
      alert("Failed to submit testimonial. Please try again.", error);
      // Handle errors here if needed.
    }
    }
    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen bg-slate-300">
          <LoaderCircleIcon className="animate-spin" />
        </div>
      );
  };
  return (
    <div className="min-h-screen w-full bg-[#151719] flex flex-col text-white">
      <button onClick={onClose} className="flex self-end mx-4 my-4">
        <SidebarCloseIcon /> Close
      </button>

      <div className="ml-4 flex gap-4">
        {/* <TestimonialPreview testimonialData={testimonialData} />
        <TestimonialForm
          testimonialData={testimonialData}
          handleChange={handleChange}
          onSubmit={onSubmit}
        />
      </div> */}
      {id}
      /</div>
    </div>
  );
};
