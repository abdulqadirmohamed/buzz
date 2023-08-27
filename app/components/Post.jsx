import React from 'react'

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
  const {buzz} = await getStory()

  return (
    <>
    {buzz.map((buzz) => (
    <div key={buzz.id} className='w-full bg-[#161616] px-5 py-4 rounded-md  my-3'>
      <p>{buzz.title}</p>
    </div>
    ))}
    </>
  )
}

export default Post