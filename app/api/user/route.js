import connectMongoDB from "@/libs/mongodb"
import User from "@/models/user"
import { NextResponse } from "next/server"

// export async function POST(){
//     const {name, email, avatar} = await request.json()
//     await connectMongoDB()
//     await User.create({name, email, avatar})

//     return NextResponse.json({message: "User Registered"}, {status: 201})
// }

export async function POST(request) {
    const { name, email, avatar } = await request.json();
    await connectMongoDB();
    await User.create({ name, email, avatar });
    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  }