import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
function AddPost() {

    const [PostName,setPostName] = useState('')
    const [PostPhotoUrl,setPostPhotoUrl] = useState('')
    const [PostPlacer,setPostPlacer] = useState('')
    const [PostAbout,setPostAbout] = useState('')
    const [PostFullAbout,setPostFullAboutUrl] = useState('')


    const handleClick = async (e)=>{
        e.preventDefault()
        const x =  await  axios.post('https://elsever-blog.herokuapp.com/api/addpost',{ PostName:PostName,PostPhotoUrl:PostPhotoUrl,PostPlacer:PostPlacer,PostAbout:PostAbout,PostFullAbout:PostFullAbout })
        return  <Navigate to='/post' />
    }

  return (
    <div className=' my-20   flex justify-center'>
        <div className=" p-6  rounded-lg shadow-lg bg-white max-w-md">
                <form>
                <div className="grid grid-cols-2 gap-4">
                <div className="form-group mb-6">
                    <input onChange={(e)=>{setPostName(e.target.value)}} type="text" className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                    aria-describedby="emailHelp123" placeholder="Post Name"/>
                </div>
                <div className="form-group mb-6">
                    <input onChange={(e)=>{setPostPhotoUrl(e.target.value)}} type="text" className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                    aria-describedby="emailHelp124" placeholder="Post Photo Url"/>
                </div>
                </div>
                <div className="form-group mb-6">
                <input onChange={(e)=>{setPostPlacer(e.target.value)}} type="text" className="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                    placeholder="Post Placer"/>
                </div>
                <div className="form-group mb-6">
                <input onChange={(e)=>{setPostAbout(e.target.value)}} type="text" className="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                    placeholder="A brief explanation"/>
                </div>
                <div className="form-group mb-6">
                <input onChange={(e)=>{setPostFullAboutUrl(e.target.value)}} type="text" className="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                    placeholder="Post Url"/>
                </div>
                <button onClick={handleClick} type="submit" className="
                w-full
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out">Add</button>
            </form>
        </div>
    </div>
  )
}

export default AddPost