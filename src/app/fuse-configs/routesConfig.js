import { Navigate } from "react-router-dom"
import FuseUtils from "@fuse/utils"
import appsConfigs from "app/main/apps/appsConfigs"
import FuseLoading from "@fuse/core/FuseLoading"
import Error404Page from "app/main/404/Error404Page"
import LoginConfig from "app/main/login/LoginConfig"
import ExampleConfig from "app/main/example/ExampleConfig"

const routeConfigs = [LoginConfig, ExampleConfig, ...appsConfigs]

const routes = [
  // if you want to make whole app auth protected by default change defaultAuth for example:
  // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
  // The individual route configs which has auth option won't be overridden.
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ["admin", "staff", "user"]),
  {
    path: "/",
    element: <Navigate to="/example" />,
  },
  {
    path: "loading",
    element: <FuseLoading />,
  },
  {
    path: "404",
    element: <Error404Page />,
  },
  {
    path: "*",
    element: <Navigate to="404" />,
  },
]

export default routes
