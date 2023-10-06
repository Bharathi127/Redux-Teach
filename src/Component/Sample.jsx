import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyBook,removeBook } from './CakeSlice'
const Sample = () => {
    const dispatch=useDispatch()
    const {Books}=useSelector(state=>state.book)
    const dataChanged=()=>{
      dispatch(buyBook())
    }
    const buyingBooks=()=>{
        dispatch(removeBook())
    }
  return (
    <div>
        <center>
           <h2>Number of Books:{Books>=0?Books:0}</h2> 
           <button onClick={dataChanged}>Buy one Book</button>
           <button onClick={buyingBooks}>Buy all Books</button>
        </center>
    </div>
  )
}

export default Sample