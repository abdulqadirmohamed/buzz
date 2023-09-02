import Update from '@/components/Update'
import React from 'react'


const getBuzzById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/buzz/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
    
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }) => {
  const { id } = params;
  const { buzz } = await getBuzzById(id)


  return (
    <Update id={buzz._id} title={buzz.title} createdAt={buzz.createdAt} />
  )
}

export default page