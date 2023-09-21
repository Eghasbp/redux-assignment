import { configureStore } from '@reduxjs/toolkit'
import countReducer from '../slice/countSlice'
import statusReducer from '../slice/statusSlice'
import loginReducer from '../slice/loginSlice'


const store = configureStore({
    reducer: {
        //nama slice kita
        count: countReducer,
        //nama slice kita
        status: statusReducer,
        //NAMA SLICE UNTUK FETCH
        login: loginReducer,
    },
})

export default store;