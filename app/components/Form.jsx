import React from 'react'

const Form = () => {
  return (
    <div className='w-1/2 mx-auto pt-10'>
        <form action="w-full">
            <textarea name="" className='w-full bg-[#161616] px-4 py-2 rounded-md' placeholder="What's on your mind?" id="" cols="30" rows="4"></textarea>
            <button className='bg-white px-4 py-2 rounded-md my-3'>Send</button>
        </form>
    </div>
  )
}

export default Form