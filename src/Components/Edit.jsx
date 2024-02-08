import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Missing from './Missing';
const Edit = ({posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit}) => {

  const {id} = useParams();
  const filteredPost = posts.filter(post=>post.id===id)
  const post = filteredPost.length!==0 ? filteredPost[0] : null;
  
  useEffect(()=>{
    
    if(post){
      setEditTitle(post.title);
      setEditBody(post.event)
    }
  }, [post, setEditTitle, setEditBody])
  return (
    <main className='EditPost'style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} >
      {editTitle!==undefined?(
      <>
        <h2>Edit Post</h2>
        <form className='newPostForm' onSubmit={(e)=>e.preventDefault()} style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', gap:"15px"}}>
         <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row', gap:'15px'}}>
            <label htmlFor="postTitle" style={{minWidth:'50px'}}>Title:</label>
            <input type="text" id='postTitle' required value={editTitle} onChange={(e)=>setEditTitle(e.target.value)} style={{outline:'none', border:'none', width:'45vh', height:'5vh'}}/>
         </div>

          <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row', gap:'15px'}}>
              <label htmlFor="postBody"  style={{minWidth:'50px'}}>Body:</label>
              <textarea 
                id='postBody'
                required
                value={editBody}
                onChange={(e)=>setEditBody(e.target.value && e.target.value)}
                style={{resize:'none', width:"45vh", height:'15vh', border:'none', outline:'none', borderRadius:'5px'}}
              />
          </div>
          <button type='submit' style={{marginLeft:'20px'}} onClick={()=>handleEdit(post.id)}>Submit</button>
        </form>
      </> 
      ):(<div><Missing/></div>)}
    </main>
  )
}

export default Edit
