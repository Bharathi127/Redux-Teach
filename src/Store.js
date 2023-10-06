import {configureStore} from "@reduxjs/toolkit"
import BookReducer from './Component/CakeSlice'
const store=configureStore({
    reducer:{
       book:BookReducer
    }
})

export default store
