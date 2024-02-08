import { Routes, Route, Link, useNavigate} from 'react-router-dom'
import Home from './Components/Home'
import Head from './Components/Head'
import PostPage from './Components/PostPage';
import NewPost from './Components/NewPost';
import Missing from './Components/Missing';
import Nav from './Components/Nav';
import About from './Components/About';
import Fotter from './Components/Fotter';
import Edit from './Components/Edit';
import {format} from 'date-fns'
import API from './API/Post'
import { useEffect, useState } from 'react';


function App() {
  const title = "Social Media"
  const aboutMine="Hi I'm Hariraj, This is my Social Media Web page"
  const aboutProject = "Powered by React, my website boasts a dynamic interface with React Router for fluid navigation. Stateful components, useEffect for data fetching, and responsive design ensure an optimal user experience. Leveraging React's hooks and functional components, I've created an engaging platform that seamlessly combines performance and interactivity for an immersive web experience."
  const [posts, setPosts]=useState([])
  const [postTitle, setpostTitle]=useState(' ')
  const [postBody, setpostBody]=useState(' ')
  const [editTitle, setEditTitle]=useState(' ')
  const [editBody, setEditBody]=useState(' ')
  const [search, setSearch]=useState(' ')
  const [searchResult, setSearchResult]=useState([])
  const [fetchState, setFetchState]=useState(true)

  const nagivate = useNavigate()
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await API.get('/posts');
        const fetchedResponse = response.data
        setPosts(fetchedResponse);
        const filteredResult = search ? fetchedResponse.filter(post=>post.event && post.event.toLowerCase().includes(search.toLowerCase())):fetchedResponse
        setSearchResult(filteredResult)
      } 
      catch (err) {
        console.error("Error fetching posts:", err);
      }
    };
  
    fetchPosts();
  }, [search, postBody, postTitle, fetchState]);
  
  useEffect(() => {
    const filter = async () => {
      try {
        const searchWords = search.trim().toLowerCase().split(/\s+/);
        const filteredResult = posts.filter(post => (
          post.event && searchWords.every(word => post.event.toLowerCase().includes(word))
        ));
        setSearchResult(filteredResult);
      } catch (err) {
        console.error("Error filtering posts:", err);
      }
    };
  
    filter();
  }, [search, postTitle, postBody, posts]);  // Include 'posts' in the dependency array
  

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const id = posts.length ? Number(posts[posts.length-1].id) +1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = {id:String(id), title:postTitle, datetime, event:postBody}
    const response = await API.post('/posts', newPost)
    const newPosting = response.data
    const allPosts = [...posts, newPosting]
    setPosts(allPosts)
    nagivate('/')
    setSearch(' ')
    setpostTitle(' ')
    setpostBody(' ')
  }

  

const handleDelete = async(id)=>{
  try{
   await API.delete(`/posts/${id}`)
   setFetchState(!fetchState)
   nagivate('/')
  }
  catch(err){ 
    console.error(err)
  }
  
}
const handleEdit = async(id)=>{
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const updateNewPost = {id, title:editTitle, datetime, event:editBody}
    try{
       const respone = await API.put(`/posts/${id}`, updateNewPost)
       setSearchResult(posts.map(post=> post.id===id?{...respone.data}: posts))
       setEditTitle(' ')
       setEditBody(' ')
       setFetchState(!fetchState)
       nagivate('/')
    }
    catch(err){
      console.error(err.response && err.respone.data)
    }
}

  return (
    <div className="App">
      <Head title={title}/>
      <Nav
        search={search}
        setSearch={setSearch}
        
      />
      
      <Routes>
        <Route path='/' element={<Home posts={searchResult}/>}/>
        <Route path='post' >
          <Route index element= {<NewPost postBody={postBody} postTitle={postTitle} handleSubmit={handleSubmit} setPostBody={setpostBody} setPostTitle={setpostTitle}/>}/>
          <Route path=':id' element={<PostPage posts={searchResult} handleDelete={handleDelete}/>}/>
       </Route>
       <Route path='post/edit/:id' element={<Edit posts={searchResult} editTitle={editTitle} setEditTitle={setEditTitle} editBody={editBody} setEditBody={setEditBody} handleEdit={handleEdit} />} />
        <Route path='about' element={<About aboutMine={aboutMine} aboutProject={aboutProject}/>}/>
        <Route path='*' element={<Missing/>}/>
      </Routes>
      <Fotter/> 
    </div>
    );
  }
export default App;
