import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../stores/loginState'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Logout() {
    const count = useSelector(state => state.loginState.value)
    const dispatch = useDispatch()

    const handleClick = ()=>{
        dispatch(increment(false))
        localStorage.removeItem('login')
    }

  return (
    <div className='div'>
                <button
                    onClick={handleClick}
                      type="submit"
                      className="div-b inline-block px-10 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light">
                      Logout
                </button>
        {
            count ? null : <Navigate to='/login' />
        }
    </div>
  )
}

export default Logout