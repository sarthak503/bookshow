import React from 'react'
import './Footer.css'
const date=new Date().getFullYear();
function Footer() {
  return (
    <div className='footer'>
        <p>
          Made with 	 <span> &hearts;  </span> by Sarthak
          <br></br>
          Copyright &copy;  {date}
        </p>
    </div>
  )
}

export default Footer