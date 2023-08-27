import Image from 'next/image'
import Form from './components/Form'
import Post from './components/Post'


export default function Home() {
  return (
    <main className="bg-[#0F0F0F] h-screen">
      <Form/>
      <div className='w-1/2 mx-auto text-white mt-10'>
        <Post/>
      </div>
    </main>
  )
}
