import { configureStore } from '@reduxjs/toolkit'
import loginState from './loginState'


export default  configureStore({
  reducer: {
    loginState: loginState
  },
})
