import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../assets/redux/slice/countSlice'
import { decrement } from '../assets/redux/slice/countSlice'
import ChangeStatus from '../component/changeStatus/index'
import Status from '../component/status/index'
// import Home from './component/home'

const Home = () => {

    const [count, setCount] = useState(0)
    //untuk panggil state
    const countRedux = useSelector((state) => state.count.count) 
    // const status = useSelector((state)=> state.st watus.status)
    //untuk set state
    const dispatch = useDispatch()
    return (
    <>
        <h1 className='text-3xl text-red-900 '>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          add +1
        </button>
        <button onClick={() => dispatch(decrement())}>
          minus -1
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          ini merupakan {countRedux} dari toolkit 
        </p>
        
      
      <Status/>
      <ChangeStatus/>
      <Home/>
      </div>
    </>
  )
}

export default Home