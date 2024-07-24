import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import TestimonialSubmissionModel from "@/models/user";

export async function POST(req) {
  const body = await req.json();
  console.log(body)
  try {
    await dbConnect();
    const newTestimonial = new TestimonialSubmissionModel(body);
    await newTestimonial.save();
    return NextResponse.json({ data: newTestimonial });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}