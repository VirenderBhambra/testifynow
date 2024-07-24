import React from "react";

export const TestimonialPreview = ({ testimonialData }) => {
  return (
    <div className="max-w-sm w-full max-h-[500px] bg-slate-600 p-6 md:p-12 rounded-md">
      <h1 className="mt-6 text-2xl md:text-3xl font-bold">
        {testimonialData.header || "This is a Header"}
      </h1>
      <p className="mt-4">
        {testimonialData.message || "Type your message here..."}
      </p>
      <h1 className="mt-6 text-lg md:text-xl font-bold">Questions</h1>
      <ul className="mt-2">
        {testimonialData.questions.map((question, index) => (
          <li key={index} className="mt-1">
            {question}
          </li>
        ))}
      </ul>
      <button className="mt-6 bg-blue-500 w-full text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
        Send in text
      </button>
    </div>
  );
};
