"use client"
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';

const Form = () => {
  const router = useRouter();
  const [title, setTitle] = useState("")

  const {status} = useSession()

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
        router.refresh();
      }
      // router.reload();

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='md:w-1/2 w-4/5 mx-auto pt-10'>
      {status === "authenticated" ? (
      <form >
        <textarea name="" value={title} onChange={(e) => setTitle(e.target.value)} className='w-full bg-[#161616] text-white px-4 py-2 rounded-md' placeholder="What's on your mind?" id="" cols="30" rows="4"></textarea>
        <button onClick={handleClick} className='bg-white px-4 py-2 rounded-md my-3'>Send</button>
      </form>

      ): <span className='text-white'>Please sign in</span>}
    </div>
  )
}

export default Form