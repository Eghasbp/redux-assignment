import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk('register/registerUser', async (userData) => {
    try {
        const response = await fetch('https://reqres.in/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error('Registration failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error in try-catch:', error);
        throw error;
    }
});

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        token: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default registerSlice.reducer;
