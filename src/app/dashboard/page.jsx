import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const Dashboard = () => {
  const testimonial_template = {
    header: "This is a header of testimonial",
    questions: [
      "Who are you / what are you working on?",
      "How has [our product / service] helped you?",
      "What is the best thing about [our product / service",
    ],
    message: "Your custom message goes here...",
  };
  return (
    <div className="min-h-screen w-full bg-[#151719] flex flex-col items-center">
      <>
      <div className="flex gap-[400px] p-12">
        <h1 className="text-3xl font-bold text-white">Spaces</h1>
        <Button variant="outline">Add new space</Button>
      </div>
      <Image
        src="dashboard.svg"
        height={450}
        width={450}
        alt="Dashboard_SVG"
      ></Image>
      <p className="mt-2 text-white">No space created yet...</p>
      </>
    </div>
  );
};
export default Dashboard;
