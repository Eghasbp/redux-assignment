import React from 'react'
import { useDispatch } from 'react-redux'
import { setClose, setOpen } from '../../assets/redux/slice/statusSlice'

const ChangeStatus = () => {

    const dispatch = useDispatch()
    const handleStatusTrue = () => {
        dispatch(setOpen())
    }
    const handleStatusFalse = () => {
        dispatch(setClose())
    }

  return (
    <div>
        <button onClick={handleStatusTrue}>Change status ke True</button>
        <button onClick={handleStatusFalse}>Change status ke False</button>
    </div>
  )
}

export default ChangeStatus