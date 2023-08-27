"use client"
import React, { useState } from 'react'
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  const [title, setTitle] = useState("")


  const handleClick = async (e) => {
    e.preventDefault()
    if (!title) {
      alert("Title is required")
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/buzz", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title}),

      });

      if (res.ok) {
        setTitle("")
        router.reload();
      }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-1/2 mx-auto pt-10'>
      <form action="w-full">
        <textarea name="" value={title} onChange={(e) => setTitle(e.target.value)} className='w-full bg-[#161616] text-white px-4 py-2 rounded-md' placeholder="What's on your mind?" id="" cols="30" rows="4"></textarea>
        <button onClick={handleClick} className='bg-white px-4 py-2 rounded-md my-3'>Send</button>
      </form>
    </div>
  )
}

export default Form