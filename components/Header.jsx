import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-[#0F0F0F] text-white'>
            <div className="md:w-1/2 w-4/5 mx-auto py-10 flex justify-between">
                <Link href="/" className='hover:underline'>Buzz</Link>
                <Link href="/signin" className='hover:underline'>Sign In</Link>
            </div>
        </div>
    )
}

export default Header