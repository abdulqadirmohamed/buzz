"use client"
import { useRouter } from 'next/navigation';
import React from 'react'


const RemoveBtn = ({ id }) => {
    const router = useRouter();
    
    const removeBuzz = async () => {
        const confirmed = confirm("Are you sure?");

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/buzz?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            }
        }
    };

    return (
        <button onClick={removeBuzz} className='hover:underline'>Delete</button>
    )
}

export default RemoveBtn