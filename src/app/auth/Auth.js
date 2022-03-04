import FuseSplashScreen from "@fuse/core/FuseSplashScreen"
import { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { hideMessage, showMessage } from "app/store/fuse/messageSlice"
import { setNavigation } from "app/store/fuse/navigationSlice"
import history from "@history"

import {
  setUserDataFirebase,
  setUserDataAuth0,
  setUserData,
  logoutUser,
  setUser,
} from "./store/userSlice"

class Auth extends Component {
  state = {
    waitAuthCheck: true,
  }

  constructor(props, context) {
    super(props)
    this.state = {
      waitAuthCheck: true,
    }
  }

  componentDidMount() {
    this.authCheck()
    this.setState({ waitAuthCheck: false })
  }

  authCheck = () => {
    const userDataLocalStorage = JSON.parse(localStorage.getItem("userData"))

    if (userDataLocalStorage) {
      this.props.setUser(userDataLocalStorage)
      this.props.setNavigation(JSON.parse(localStorage.getItem("menuLists")))
    } else {
      history.push("/login")
    }
  }

  render() {
    return this.state.waitAuthCheck ? <FuseSplashScreen /> : <>{this.props.children}</>
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logout: logoutUser,
      setUserData,
      setUserDataAuth0,
      setUserDataFirebase,
      showMessage,
      hideMessage,
      setUser,
      setNavigation,
    },
    dispatch
  )
}

export default connect(null, mapDispatchToProps)(Auth)
