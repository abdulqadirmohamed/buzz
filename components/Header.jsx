"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const Header = () => {
    const { status, data: session } = useSession()

    const { toggleTheme, theme } = useContext(ThemeContext)
    return (
        <div className='bg-[#0F0F0F] text-white'>
            <div className="md:w-1/2 w-4/5 mx-auto py-10 flex justify-between items-center">
                <Link href="/" className='hover:underline'>Buzz</Link>
                <div className='flex items-center gap-4'>
                    <div>
                        <button
                            className={`p-2 rounded bg-${theme? 'light':'dark'}`}
                            onClick={toggleTheme}
                        >
                            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                        </button>
                    </div>
                    <div className='flex items-center gap-2'>
                        {session ? (
                            <Image className='rounded-full' src={session?.user?.image} alt={session.user.name} width={30} height={30} />

                        ) : ""}
                        <h1>{session?.user?.name}</h1>
                    </div>
                    <div>
                        {status === "authenticated" ? (
                            <button onClick={() => signOut("google")} className='hover:underline'>Sign Out</button>

                        ) : <button onClick={() => signIn("google")} className='hover:underline'>Sign In</button>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header