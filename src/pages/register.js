import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  Grid
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Facebook as FacebookIcon } from "../icons/facebook";
import { Google as GoogleIcon } from "../icons/google";

const RegisterHandler = (event) => {
  const BASE_URL='http://127.0.0.1:8000/'
  const ENTRPRISE_REGISTRATION_URL='users/addenterprise/'
  const USER_REGISTRATION_URL='users/usersignup/'
  const USER_LOGIN_URL='users/userlogin/'
  event.preventDefault();
  const data = {
    'registration_number': event.target.lastName.value,
    'name': event.target.firstName.value,
    'email': event.target.email.value,
    // 'sector': event.target.sector.value
  };

    axios({
      method: 'post',
      url: BASE_URL+ENTRPRISE_REGISTRATION_URL,
      data: data,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
}

const Register = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      policy: false
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      firstName: Yup.string()
        .max(255)
        .required("First name is required"),
      lastName: Yup.string()
        .max(255)
        .required("Last name is required"),
      password: Yup.string()
        .max(255)
        .required("Password is required"),
      policy: Yup.boolean().oneOf([true], "This field must be checked")
    }),
    onSubmit: () => {
      router.push("/");
    }
  });

  return (
    <>
      <Head>
        <title>Register | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%"
        }}
      >
        <Container maxWidth="sm">
          <NextLink href="/" passHref>
            <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
              Dashboard
            </Button>
          </NextLink>
          <form onSubmit={RegisterHandler}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                 Add Your Enterprise
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Have an account?{" "}
                <NextLink href="/login" passHref>
                  <Link variant="subtitle2" underline="hover">
                    Sign In
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="Company Name"
              margin="normal"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              helperText={formik.touched.lastName && formik.errors.lastName}
              label="Registration No."
              margin="normal"
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Company Email"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />

            {/*{Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>{formik.errors.policy}</FormHelperText>
            )}*/}
            <Box sx={{ py: 2 }}>
              <Button
                color="knoct"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up
              </Button>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <Button
                  color="knoct"
                  fullWidth
                  startIcon={<FacebookIcon />}
                  onClick={formik.handleSubmit}
                  size="large"
                  variant="contained"
                >
                  Facebook
                </Button>
              </Grid>
              <Grid item xs={12} md={3}>
                <Button
                  fullWidth
                  color="knoct"
                  startIcon={<GoogleIcon />}
                  onClick={formik.handleSubmit}
                  size="large"
                  variant="contained"
                >
                  Google
                </Button>
              </Grid>
              <Grid item xs={12} md={3}>
                <Button
                  fullWidth
                  color="knoct"
                  onClick={formik.handleSubmit}
                  size="large"
                  variant="contained"
                >
                  LinkedIn
                </Button>
              </Grid>
              <Grid item xs={12} md={3}>
                <Button
                  fullWidth
                  color="knoct"
                  onClick={formik.handleSubmit}
                  size="large"
                  variant="contained"
                >
                  Twitter
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
