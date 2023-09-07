import PostLists from './PostLists';

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
  const { buzz } = await getStory()
  return (
    <>
      {buzz.map((buzz) => (
        <PostLists id={buzz._id} title={buzz.title} createdAt={buzz.createdAt} />
      ))}
    </>
  )
}

export default Post