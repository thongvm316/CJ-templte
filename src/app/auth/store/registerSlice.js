import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  success: false,
  errors: [],
}

const registerSlice = createSlice({
  name: "auth/register",
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      state.success = true
      state.errors = []
    },
    registerError: (state, action) => {
      state.success = false
      state.errors = action.payload
    },
  },
  extraReducers: {},
})

export const { registerSuccess, registerError } = registerSlice.actions

export default registerSlice.reducer
