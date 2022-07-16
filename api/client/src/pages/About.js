import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

function About() {
  return (
    <div>

      <div className="text-center py-10">
        <Link to='/about' data-mdb-ripple="true" >
          <img
            src={Logo}
            className="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          </Link>
          <h5 className="text-xl font-medium leading-tight mb-2">Elsever Emirli</h5>
          <p className="text-gray-500">I am from Azerbaijan and I am a full stack web developer. <br/>
          This page consists of posts from people I have given permission, you should take advantage of them.</p>
      </div>
      <div className="flex flex-wrap justify-center py-10">
        <Link to="/about" data-mdb-ripple="true">
          <img src="https://mdbootstrap.com/img/new/standard/city/043.jpg" className="max-w-sm h-auto" alt="Png" />
        </Link>
      </div>
    </div>
  )
}

export default About