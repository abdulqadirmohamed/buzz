'use client'
import { useTheme } from 'next-themes'

const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme()
    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className='bg-slate-800 dark:text-white flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700'
        >
            {resolvedTheme === 'dark' ? 'light' : 'dark'}
        </button>
    )
}

export default ThemeButton