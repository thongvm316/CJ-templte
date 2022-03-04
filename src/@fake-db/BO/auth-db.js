import _ from "@lodash"
import mock from "../mock"

const authDB = {
  users: [
    {
      uuid: "XgbuVEXBU5gtSKdbQRP1Zbbby1i1",
      from: "custom-db",
      password: "123456789",
      role: "admin",
      data: {
        displayName: "Abbott Keitch",
        photoURL: "assets/images/avatars/Abbott.jpg",
        email: "kaikei@kaikei.vn",
        settings: {
          layout: {
            style: "layout1",
            config: {
              scroll: "content",
              navbar: {
                display: true,
                folded: true,
                position: "left",
              },
              toolbar: {
                display: true,
                style: "fixed",
                position: "below",
              },
              footer: {
                display: true,
                style: "fixed",
                position: "below",
              },
              mode: "fullwidth",
            },
          },
          customScrollbars: true,
          theme: {
            main: "defaultDark",
            navbar: "defaultDark",
            toolbar: "defaultDark",
            footer: "defaultDark",
          },
        },
        shortcuts: ["calendar", "mail", "contacts"],
      },
    },
    {
      uuid: "XgbuVEXBU5gtSKdbQRP1Zbbby1i1",
      from: "custom-db",
      password: "admin",
      role: "admin",
      data: {
        displayName: "Abbott Keitch",
        photoURL: "assets/images/avatars/Abbott.jpg",
        email: "admin@fusetheme.com",
        settings: {
          layout: {
            style: "layout1",
            config: {
              scroll: "content",
              navbar: {
                display: true,
                folded: true,
                position: "left",
              },
              toolbar: {
                display: true,
                style: "fixed",
                position: "below",
              },
              footer: {
                display: true,
                style: "fixed",
                position: "below",
              },
              mode: "fullwidth",
            },
          },
          customScrollbars: true,
          theme: {
            main: "defaultDark",
            navbar: "defaultDark",
            toolbar: "defaultDark",
            footer: "defaultDark",
          },
        },
        shortcuts: ["calendar", "mail", "contacts"],
      },
    },
  ],
}

mock.onGet("/api/auth").reply(async (config) => {
  console.log("/api/auth:", config.data)
  const data = JSON.parse(config.data)
  const { email, password } = data
  const user = _.cloneDeep(authDB.users.find((_user) => _user.data.email === email))

  const error = []

  if (!user) {
    error.push({
      type: "email",
      message: "Check your email address",
    })
  }

  if (user && user.password !== password) {
    error.push({
      type: "password",
      message: "Check your password",
    })
  }

  if (error.length === 0) {
    console.log(user)

    delete user.password
    return [200, user]
  }

  return [300, { error }]
})
