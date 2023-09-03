import Post from '@/components/Posts'
import Form from '../components/Form'


export default function Home() {

  return (
    <main className="bg-[#0F0F0F] min-h-full">
      <Form/>
      
      <div className='md:w-1/2 w-4/5 mx-auto text-white mt-10'>
        <Post/>
      </div>
    </main>
  )
}
