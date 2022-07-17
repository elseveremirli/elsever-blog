import React, { useState } from 'react'
import AddPost from './AddPost'
import NoAdmin from './NoAdmin'



function AddPostAdmin() {


    const [password,setPassword] = useState()
    const [True1,setTrue1] = useState(0)
    
    const handleClick = ()=>{
        if(password == "elsever2006emirli" ){
            setTrue1(1)
        }
        else( 
        setTrue1(0)
        )
    }


  return (

    <div>
        <div className="flex justify-center my-10">
            <div className="mb-3 xl:w-96">
                <label htmlFor="exampleText0" className="form-label inline-block mb-2 text-gray-700">Password</label>
                <input
                onChange={(e)=>{setPassword(e.target.value)}}
                type="password"
                className="
                    form-control
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
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleText0"
                placeholder="************"
                />
                <div className="flex space-x-2 justify-center">
                    <button onClick={handleClick} type="button" className="inline-block my-10 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>
        </div>
        {
            True1 == 1 ? <AddPost/> : <NoAdmin/>
        }
    </div>
  
  )
}

export default AddPostAdmin