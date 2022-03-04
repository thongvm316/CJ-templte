import { authApi } from "app/services/api/auth"
import { menuLookupApi } from "app/services/api/menuLookup"

export default [authApi.middleware, menuLookupApi.middleware]
