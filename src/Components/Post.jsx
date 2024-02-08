import React from 'react'
import { Link } from 'react-router-dom'
const Post = ({post}) => {
  
  return (
    <article className='Post'>
      <Link to={`/post/${post.id}`} style={{textDecoration:"none", color:"black"}}>
      <h2 className='postTitle'>{post.title}</h2>
      <p className="postDate">{post.datetime}</p>
      </Link>
      {post.event && (
        <>
        <p className='postBody'>
          {post.event.length <=15 ? (
            post.event):( `${post.event.slice(0, 20)}...`)
          }
        </p>
        <hr />
        </>
      )}
      
      {/* <p className="postBody">{post && post.event &&  post.event.length<=15 ? post.event : `${(post.event).slice(0, 20)}..`}</p> */}
      <hr />
    </article>
  )
}

export default Post
