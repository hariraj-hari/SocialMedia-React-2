import React from 'react'
import { Link } from 'react-router-dom';
import { useParams} from 'react-router-dom'
const PostPage = ({posts, handleDelete}) => {
  const {id} = useParams();
  const filteredPosts= posts.filter(post=> (post.id)===id);
  const post = filteredPosts.length ? filteredPosts[0] : null
  const fileNotExist ={
    display:'flex', 
    justifyContent:'center',
    alignItems:'center',
    minWidth:'40vw',
    minHeight:'40vh',
    fontSize:'2rem'
  }
  return (
    <main className="PostPage">
      <article className="post">
        {post && 
        <>
          <h2>Title: {post.title}</h2>
          <p className='postDate'>Date: {post.datetime}</p>
          <p className="postEvent">Event: {post.event}</p>
          <div className='buttonPostpage' style={{display:'flex', justifyContent:'center', alignItems:'center', width:'30vh', height:'10vh', maxWidth:'200px', gap:'10px'}}>
          <button onClick={()=>handleDelete(post.id)} style={{width:"inherit", height:"30px", outline:"none", border:"none", borderRadius:"10px", backgroundColor:"red"}}>Delete</button>
          <Link to={`/post/edit/${id}`}><button style={{minWidth:"95px", height:"5vh", outline:"none", border:"none", borderRadius:"10px", backgroundColor:"red"}}>Edit</button></Link>
          </div>
        </>}
        {!post &&
         <>
          <div style={fileNotExist}>
            <p>File not Exist</p>
          </div>
        </>}
        
      </article>
    </main>
  )
}

export default PostPage
