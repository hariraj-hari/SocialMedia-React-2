import React from 'react'
import {CiFacebook} from 'react-icons/ci'
import {BsInstagram} from 'react-icons/bs'
import {RiTwitterXLine} from 'react-icons/ri'
import {ImPinterest2} from 'react-icons/im'
import {FiGithub} from 'react-icons/fi'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Fotter = () => {
  const today = new Date();
  return (
    <div id='Fotter'>
      <div className='content1' style={{flex:"2", textAlign:"center"}}>
        Privacy Policy
      </div>
      <div className='content2' style={{flex:"2", textAlign:"center"}}>
        Help and Support's
      </div>
      <div className="socialMedia" style={{flex:"3", display:"flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
          <CiFacebook style={{height:"30px", width:"20px"}}/>
          <BsInstagram style={{height:"30px", width:"20px"}}/>
          <RiTwitterXLine style={{height:"30px", width:"20px"}}/>
          <ImPinterest2 style={{height:"30px", width:"20px"}}/>
          <FiGithub style={{height:"30px", width:"20px"}}/>
      </div>
      <div className='CopyRight' style={{flex:"3", textAlign:"center"}}>
          CopyRight <AiOutlineCopyrightCircle/> {today.getFullYear()}
      </div>
    </div>
  )
}

export default Fotter
