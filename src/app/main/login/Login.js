import { useEffect } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { motion } from "framer-motion"
import { Controller, useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import * as yup from "yup"
import _ from "@lodash"

import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

import { useSelector, useDispatch } from "react-redux"
import { useLoginMutation } from "app/services/api/auth"
import { useGetMenuListMutation } from "app/services/api/menuLookup"
import { submitLogin, loading } from "app/auth/store/loginSlice"
import { showMessage } from "app/store/fuse/messageSlice"

const schema = yup.object().shape({
  id: yup.string().required("You must enter a user name"),
  password: yup
    .string()
    .required("Please enter your password.")
    .min(6, "Password is too short - should be 6 chars minimum."),
})

const defaultValues = {
  id: "",
  password: "",
}

function LoginPage() {
  const {
    auth: {
      login: { errors: errorsState, isLoading },
    },
  } = useSelector((state) => state)

  const [login] = useLoginMutation()
  const [getMenuList] = useGetMenuListMutation()
  const dispatch = useDispatch()

  const { control, formState, handleSubmit, reset, setError } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  })
  const { isValid, dirtyFields, errors } = formState

  const onSubmit = (formData) => {
    dispatch(submitLogin(formData, login, getMenuList, loading))
  }

  useEffect(() => {
    if (errorsState) {
      dispatch(showMessage({ message: errorsState.message, variant: "error" }))
    }
  }, [errorsState, dispatch])

  return (
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
              <img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo" />

              <Typography variant="h6" className="mt-16 mb-24 font-semibold text-18 sm:text-24">
                Login to your account
              </Typography>

              <form
                name="loginForm"
                noValidate
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Controller
                  name="id"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-16"
                      label="User"
                      autoFocus
                      type="text"
                      error={!!errors.id}
                      helperText={errors?.id?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-16"
                      label="Password"
                      type="password"
                      error={!!errors.password}
                      helperText={errors?.password?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  )}
                />

                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                  <Link className="font-normal" to="/pages/auth/forgot-password">
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  className="w-224 mx-auto mt-16"
                  aria-label="LOG IN"
                  disabled={_.isEmpty(dirtyFields) || !isValid || isLoading}
                  type="submit"
                >
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default LoginPage
