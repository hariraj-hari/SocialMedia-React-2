import React from 'react'

const NewPost = ({handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) => {
  return (
    <main className="NewPost" style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', gap:'20px', minWidth:'30vw', minHeight:'50vh'}}>
      <h2>New Post Here..</h2>
      <form className="newPostForm" onSubmit={handleSubmit} style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', gap:'15px'}}>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
          <label htmlFor="postTitle" style={{ minWidth:'70px'}}>Title:</label>
          <input type="text"
                required
                id='postTitle'
                value={postTitle}
                onChange= {(e)=> setPostTitle(e.target.value)}
                style={{minWidth:'200px', minHeight:'40px', outline:'none'}}
                
           /> <hr />
          </div>

           <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
           <label htmlFor="postBody" style={{ minWidth:'70px'}}>Event: </label>
            <textarea 
                    id='postBody'
                    style={{outline:"none", minWidth:'200px', minHeight:'100px', resize:'none', border:'none', padding:'5px'}}
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)} ></textarea>
           </div>
            <button type='submit' style={{margin:'10px'}}>Submit</button>
           
      </form>
    </main>
  )
}

export default NewPost
