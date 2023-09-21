import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk('login/loginUser', async (userData) => {
    try {
        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            throw new error('login failed')
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.log('error try catch', error)
        throw error;
    }
})

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        token: null,
        status: 'idle',
        error: null,
    },
    //reducer sync
    reducers: {},
    //reducer async
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload
                // After successful login, navigate to the user page
                history.push('/user'); // Assuming `history` is accessible here
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message
            });
    },
})

export default loginSlice.reducer;