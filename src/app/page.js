import Image from "next/image";
import {Testimonial} from "../components/Testimonial.jsx"

export default function Home() {
  const obj = {
    header : "This is a header of testimonial",
 questions :['Who are you / what are you working on?',
    'How has [our product / service] helped you?',
    'What is the best thing about [our product / service'],
   message : 'Your custom message goes here...',
  }
  return (
    <main className="flex min-h-screen bg-slate-600 p-12 scroll-smooth ">

      <Testimonial {...obj}/>
    </main>
  );
}
