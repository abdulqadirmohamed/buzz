import connectMongoDB from "@/libs/mongodb";
import Buzz from "@/models/buzz";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title} = await request.json()
    await connectMongoDB()
    await Buzz.create({title})
    return NextResponse.json({message: "Post created"},{status: 201} )
}

export async function GET(){
    await connectMongoDB()
    const buzz = await Buzz.find().sort({createdAt: -1})
    return NextResponse.json({buzz})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Buzz.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}