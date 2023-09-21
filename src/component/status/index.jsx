import React from 'react'
import { useSelector } from 'react-redux'

const Status = () => {
    const status = useSelector((state) =>state.status.status)

  return (
    <div>
        <p>
          ini merupakan status {status ? 'benar' : 'salah'} dari toolkit 
        </p>
    </div>
  )
}

export default Status