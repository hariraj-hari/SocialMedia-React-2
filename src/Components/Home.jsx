import React from 'react';
import Feed from './Feed';
const Home = ({posts}) => {
  return (
    <main className='Home' >
      <h2 style={{position:"sticky", top:"0", backgroundColor:"white"}}>Feeds...</h2><hr /><hr />
      {posts && posts.length ? (<Feed posts={posts}/>):(<p>No posts to display..</p>)}
    </main>
  )
}

export default Home
