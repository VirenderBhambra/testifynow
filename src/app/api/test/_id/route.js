import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import TestimonialModel from '../../../models/test';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id'); // Extract id from query parameters
  console.log(id);
  try {
    await dbConnect();
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    const testimonial = await TestimonialModel.findById(id);
    if (!testimonial) {
      return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
    }
    return NextResponse.json({ data: testimonial });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// export async function PUT(req) {
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get('id'); // Extract id from query parameters
//   const body = await req.json();

//   try {
//     await dbConnect();
//     const updatedTestimonial = await TestimonialModel.findByIdAndUpdate(id, body, { new: true });
//     if (!updatedTestimonial) {
//       return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
//     }
//     return NextResponse.json({ data: updatedTestimonial });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// export async function DELETE(req) {
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get('id'); // Extract id from query parameters

//   try {
//     await dbConnect();
//     const deletedTestimonial = await TestimonialModel.findByIdAndDelete(id);
//     if (!deletedTestimonial) {
//       return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
//     }
//     return NextResponse.json({ message: 'Testimonial deleted successfully' });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
