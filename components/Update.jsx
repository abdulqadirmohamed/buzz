"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const Update = ({ title, id }) => {
  const [newTitle, setNewTitle] = useState(title);
  
  const apiURL = process.env.API_UR

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newTitle) {
      alert("Title is required")
    }
    try{
      const res = await fetch(`http://localhost:3000/api/buzz/${id}`,{
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({newTitle})
      });
      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
      router.push("/")
      router.refresh();
    }catch(error){
      console.log("error")
    }
  }

  return (
    <div className='md:w-1/2 w-4/5 mx-auto pt-10'>
      <form onSubmit={handleSubmit}>
        <textarea
           onChange={(e) => setNewTitle(e.target.value)}
           value={newTitle}
          className='w-full bg-[#161616] text-white px-4 py-2 rounded-md' placeholder="What's on your mind?" id="" cols="30" rows="4"></textarea>
        <button  className='bg-white dark:bg-slate-800 px-4 py-2 rounded-md my-3'>Update</button>
      </form>
    </div>
  )
}

export default Update