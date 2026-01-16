import { Button, Container, CssBaseline, TextField, Typography } from '@mui/material'
import React from 'react'
import * as Yup from "yup";
import { useDispatch } from 'react-redux'
import { resetPasswordRequest } from '../State/Authentication/Action'
import { ErrorMessage, Field, Form, Formik } from 'formik'

const initialValues={
    email: ""
}

const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
});

export const ResetPasswordRequest = () => {
    const dispatch=useDispatch()

    const handleSubmit=(values)=>{
        if (!values.email.includes("@")) {
            alert("Invalid email . Please check and try again.");
            // <Alert>Invalid Email</Alert>
            return;
        }
        console.log("login form value - email", values)
        dispatch(resetPasswordRequest(values.email))
    }
  return (
    <>
        <Container>
            <CssBaseline/>
            <div>
                <Typography className='text-center' variant='h5'>
                    Forgot Password
                </Typography>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <Form>
                        <Field
                            as={TextField}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            helperText={<ErrorMessage name="email"/>}
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            sx={{mt:2, padding:'1rem'}}
                        >
                            Send Password Reset Email
                        </Button>
                    </Form>
                </Formik>
            </div>
        </Container>
    </>
  )
}
