import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import TestimonialModel from "../../../models/test";

export async function GET(req) {
  try {
    await dbConnect();
    const data = await TestimonialModel.find({});
    return NextResponse.json({ data: data });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

export async function POST(req) {
  const body = await req.json();

  try {
    await dbConnect();
    const newTestimonial = new TestimonialModel(body);
    await newTestimonial.save();
    return NextResponse.json({ data: newTestimonial });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
export async function DELETE(req) {
    try {
      await dbConnect();
      const { searchParams } = new URL(req.url);
      const id = searchParams.get('id'); // Extract id from query parameters
      if (!id) {
        return NextResponse.json({ error: "ID is required" }, { status: 400 });
      }
      await TestimonialModel.findByIdAndDelete(id);
      return NextResponse.json({ message: "Testimonial deleted successfully" });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  export async function PUT(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id'); // Extract id from query parameters
    const body = await req.json();
    try {
      await dbConnect();
      const updatedTestimonial = await TestimonialModel.findByIdAndUpdate(id, body, { new: true });
      return NextResponse.json({ data: updatedTestimonial });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  
