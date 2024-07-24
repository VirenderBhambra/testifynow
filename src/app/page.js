import Image from "next/image";
import {Testimonial} from "../components/Testimonial.jsx"
import { Button } from "@/components/ui/button.jsx";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-12 scroll-smooth ">

      <h1 className="text-7xl font-extrabold p-4">Testimonials on the go...</h1>
      <a href = "/dashboard"><Button className="text-2xl mt-4">Get Started</Button></a>
    </main>
  );
}
