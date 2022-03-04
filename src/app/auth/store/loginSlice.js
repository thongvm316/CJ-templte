import { createSlice } from "@reduxjs/toolkit"
import { authApi } from "app/services/api/auth"
import { showMessage } from "app/store/fuse/messageSlice"
import { filterMenuList } from "app/utils/menu/changeFormatDataMenuLists"

import { setNavigation } from "app/store/fuse/navigationSlice"
import { setUser } from "./userSlice"

const initialState = {
  success: false,
  errors: null,
  isAuthentication: false,
  data: null,
  isLoading: false,
}

const codeErrors = ["L002", "L003", "L004", "L005", "L006"]

export const submitLogin = (formData, login, getMenuList) => async (dispatch, getState) => {
  await login(formData)

  const {
    auth: {
      login: { data, errors },
    },
  } = getState()

  if (!errors) {
    const user = {
      role: ["admin"],
      data: {
        displayName: "",
        photoURL: "",
        email: "",
        shortcuts: [],
      },
      ...data,
    }

    const { data: menuLists, error: isGetMenuListError } = await getMenuList()

    if (isGetMenuListError) {
      dispatch(showMessage({ message: isGetMenuListError.data?.message, variant: "error" }))
      return
    }

    if (menuLists) {
      const newMenuLists = filterMenuList(menuLists.menuList)
      localStorage.setItem("menuLists", JSON.stringify(newMenuLists))
      dispatch(setNavigation(newMenuLists))
    }

    localStorage.setItem("userData", JSON.stringify(user))
    dispatch(setUser(user))
  }
}

const loginSlice = createSlice({
  name: "auth/login",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.success = true
      state.errors = []
    },
    loginError: (state, action) => {
      state.success = false
      state.errors = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchPending, (state, action) => {
        // console.log("pending", action)
        state.isLoading = true
      })
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        // console.log("fulfilled", action.payload)
        const { payload } = action
        if (!codeErrors.includes(payload?.code)) {
          state.success = true
          state.isAuthentication = true
          state.errors = null
          state.data = payload
        } else {
          state.errors = action.payload
          state.success = false
          state.isAuthentication = false
          state.isLoading = false
        }
      })
  },
})

export const { loginSuccess, loginError, loading } = loginSlice.actions

export default loginSlice.reducer
