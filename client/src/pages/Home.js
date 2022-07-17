import React from 'react'
import Post from './Post'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div>
        <header> 
          {/* <!-- Background image --> */}
          <div className="relative overflow-hidden bg-no-repeat bg-cover" style={
            {backgroundPosition: "50%",backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",height: "350px"}}>
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{backgroundColor: "rgba(0, 0, 0, 0.75)"}}>
              <div className="flex justify-center items-center h-full">
                <div className="text-center text-white px-6 md:px-12">
                  <h1 className="text-5xl font-bold mt-0 mb-6">Welcome</h1>
                  <h3 className="text-3xl font-bold mb-8">You can get interesting information every day by registering.</h3>
                  <Link to='/profil' 
                    className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                    Profil
                  </Link>
                </div>
              </div>
            </div>
          </div>
        {/* <!-- Background image --> */}
    </header>
    </div>
    <div>
      <Post />
    </div>
    </>
  )
}

export default Home