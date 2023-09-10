"use client"
import React, { useContext, useState } from 'react'
import Moment from 'react-moment';
import RemoveBtn from './RemoveBtn';
import Link from 'next/link';
import profile from '@/img/profile.jpg'
import Image from 'next/image';

const PostLists = ({ id, title, createdAt }) => {

    return (
        <div key={id} className={`w-full bg-[#161616] px-5 py-4 rounded-md  my-3 transition duration-900 ease `}>
            <div className='flex justify-between items-center py-2'>
                <div className='flex items-center md:gap-4 gap-2'>
                    <div>
                        <Image src={profile} height={40} width={40} className='rounded-full' alt="Profile Picture" />
                    </div>
                    <div className='leading-[14px]'>
                        <h5 className='md:text-sm text-[12px]'>Abdulqadir</h5>
                        <span className='text-[13px] text-gray-300'><Moment calendar>{createdAt}</Moment></span>
                    </div>
                </div>
                <div className='flex gap-4 md:text-sm text-[12px]'>
                    <Link href={`/editBuzz/${id}`}>Edit</Link>
                    <RemoveBtn id={id} />
                </div>
            </div>
            <hr className='my-2  border-gray-600'/>
            <p className='mt-2 md:text-md text-[15px]'>{title}</p>
        </div>
    )
}

export default PostLists