import React from 'react'
import {Link} from 'react-router-dom'
import { LiaSearchSolid } from 'react-icons/lia'
const Nav = ({search, setSearch}) => {
  const listStyle={
    textDecoration:'none',
    color:'black'
  }
  return (
    <nav className="Nav" style={{display:'flex', minWidth:'50px', alignItems:'flex-start'}}>
      <div style={{flex:'4', minWidth:'50px',display:'flex', justifyContent:'center', alignItems:'center'}}>
      <form  className="searchForm" onSubmit={(e)=>e.preventDefault()}>
        <div style={{display:"flex", backgroundColor:'white', justifyContent:'center', alignItems:'center', padding:'0', borderRadius:'13px'}} >
        <LiaSearchSolid style={{width:"40px", height:"30px", marginLeft:'-17px'}}/>
        <input 
           style={{width:'100px', backgroundColor:"inherit", border:'none'}}
           type="text"
           id='search'
           value={search}
           placeholder="search...."
           onChange={(e)=>{(e.target.value) && setSearch(String(e.target.value))}}
        />
        </div>
      </form>
      </div>
      <div style={{flex:'6', minWidth:'50px'}}>
      <ul style={{color:"black"}}>
        <li><Link style={listStyle} to="/" >Home</Link></li>
        <li><Link style={listStyle} to="/post">Post</Link></li>
        <li><Link style={listStyle} to="/about">About</Link></li>
        
      </ul>
      </div>
    </nav>
  )
}

export default Nav
