import React from 'react'
import {TfiUser} from 'react-icons/tfi'
const About = ({aboutMine, aboutProject}) => {
  return (
    <main className='About' style={{width:"450px", height:"350px",position:'relative', border:"1px solid black", borderRadius:"15px", display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', gap:'10px', marginTop:'20px'}}>
      <div style={{}}>< TfiUser style={{width:'80px', height:'80px', color:"#eb6c90", padding:'2px', borderRadius:'5px', boxShadow:'3px 3px 10px black',border:'1px solid black'}}/></div>
        <h2 style={{ textAlign:"center", width:'100%', boxShadow:'1px 1px 2px black'}}> <hr />About <hr /></h2>
        <p style={{textAlign:"center", fontFamily:'Honk system-ui', fontWeight:'400', textAlign:'justify', padding:'10px 7px' }}><b> {aboutMine}</b><br />
        {aboutProject}
        </p>
    </main>
  )
}
About.defaultProps = {
  aboutMine:"Hi I'm Hariaj, This is Website"
}
export default About
