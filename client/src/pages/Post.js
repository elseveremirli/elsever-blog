import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Post() {

  const [posts,setPosts] = useState([{"PostName":"Latest articles","PostPhotoUrl":"https://mdbcdn.b-cdn.net/img/new/standard/city/024.webp","PostPlacer":"Joe Svan","PostAbout":"\t \t                        Curabitur tristique, mi a mollis sagittis, metus felis mattis                         arcu, non vehicula nisl dui quis diam. Mauris ut risus eget                         massa volutpat feugiat. Donec.                       Curabitur tristique, mi a mollis sagittis, metus felis mattis                         arcu, non vehicula nisl dui quis diam. Mauris ut risus eget                         massa volutpat feugiat. Donec.","PostFullAbout":"/404"},{"PostName":"Menzere","PostPhotoUrl":"https://mdbootstrap.com/img/new/standard/nature/182.jpg","PostPlacer":"Elsever Emirli","PostAbout":"Some quick example text to build on the card title and make up the bulk of the card's content.","PostFullAbout":"/404"},{"PostName":"Some","PostPhotoUrl":"https://mdbootstrap.com/img/new/standard/nature/184.jpg","PostPlacer":"Elsever Emirli","PostAbout":"Some quick example text to build on the card title and make up the bulk of the card's content.","PostFullAbout":"/404"}])

  useEffect(()=>{
    axios.get('https://elsever-blog.herokuapp.com/api/post')
    .then((response)=>{setPosts(response.data)})
  })

  return (
    <div>
                {/* <!-- Container for demo purpose --> */}
          <div className="container my-24 px-6 mx-auto">

            {/* <!-- Section: Design Block --> */}
            <section className="mb-32 text-gray-800 text-center">

              <h2 className="text-3xl font-bold mb-12 pb-4 text-center">Latest articles</h2>
              <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">




              {
                posts ? posts.map((post,index)=>{
                  return(
                                  
                <div className="mb-0" key={index} >
                <div className="relative block bg-white rounded-lg shadow-lg">
                  <div className="flex">
                    <div
                      className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                      data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <img src={post.PostPhotoUrl} className="w-full" />
                      <a href="#!">
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                          style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-lg mb-3">{post.PostName}</h5>
                    <p className="text-gray-500 mb-4">
                      <small> by
                        <a href="" className="text-gray-900">{post.PostPlacer}</a></small>
                    </p>
                    <p className="mb-4 pb-2">
                      {post.PostAbout}
                    </p>
                    <a href={post.PostFullAbout} data-mdb-ripple="true" data-mdb-ripple-color="light"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
                      more</a>
                  </div>
                </div>
              </div>
              )

                }) : <div></div>
              }




              </div>


              

            </section>
            {/* <!-- Section: Design Block --> */}

          </div>
    </div>
  )
}

export default Post