import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-[#0F0F0F] text-white'>
            <div className="w-1/2 mx-auto py-10 flex justify-between">
                <Link href="/">Buzz</Link>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Header