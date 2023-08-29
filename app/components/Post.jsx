"use client"
import React from 'react'
import Moment from 'react-moment';
import RemoveBtn from './RemoveBtn';
import Link from 'next/link';


const getStory = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/buzz', {
      cache: 'no-store'
    });
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const Post = async () => {

  const { buzz } = await getStory()

  return (
    <>
      {buzz.map((buzz) => (
        <div key={buzz._id} className='w-full bg-[#161616] px-5 py-4 rounded-md  my-3'>
          <div className='flex justify-between items-center py-2'>
            <div className='flex items-center gap-4'>
              <h5 className='md:text-sm text-[12px]'><Moment calendar>{buzz.createdAt}</Moment></h5>
            </div>
            <div className='flex gap-4 md:text-sm text-[12px]'>
              <Link href={`/editBuzz/${buzz._id}`}>Edit</Link>
              <RemoveBtn id={buzz._id} />
            </div>
          </div>
          <hr />
          <p className='mt-2 md:text-md text-[15px]'>{buzz.title}</p>
        </div>
      ))}
    </>
  )
}

export default Post