import connectMongoDB from "@/libs/mongodb"
import Buzz from "@/models/buzz"
import { NextResponse } from "next/server"

export async function PUT(request, {params}){
    const {id} = params
    const {newTitle: title} = await request.json()
    await connectMongoDB()
    await Buzz.findByIdAndUpdate(id, {title})
    return NextResponse.json({message: 'Buzz updates'}, {status: 200})
}

