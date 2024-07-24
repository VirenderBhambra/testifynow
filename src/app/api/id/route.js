import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import TestimonialModel from "../../../models/test";

export async function GET(req) {
    try {
      await dbConnect();
      const { searchParams } = new URL(req.url);
      const id = searchParams.get('id'); // Extract id from query parameters
      if (!id) {
        return NextResponse.json({ error: "ID is required" }, { status: 400 });
      }
      console.log(id);
      const data = await TestimonialModel.findById(id);
      
      return NextResponse.json({data:data});
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }