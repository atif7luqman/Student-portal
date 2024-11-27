import { Box, TextField, Typography, Button, Link } from "@mui/material";
import { useFormik } from "formik";
import { LoginSchema } from "../schema/LoginSchema";
import PersonIcon from "@mui/icons-material/Person";
import iba from '../assets/iba.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values) => {
        console.log("🚀 ~ Login ~ values:", values);
      },
    });

  console.log("🚀 ~ Login ~ errors:", errors);

  const [showPassword, setShowPassword] = useState(false);

  

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          padding: 0,
          width: "100vw",
          overflowX: "hidden",
          backgroundImage: `url(${iba})`,  // Set the background image here
          backgroundSize: "cover",  // Stretch the background image to cover the screen
          backgroundPosition: "center",  // Center the background image
          backgroundRepeat: "no-repeat",  // Prevent the background from repeating
        }}
      >
        {/* Top Left Text: Sukkur IBA */}
        <Box
          sx={{
            position: "absolute",
            top: 16, // Distance from top of the page
            left: 16, // Distance from left of the page
            fontSize: "30px",
            fontWeight: "bold",
            color: "secondary.main",
          }}
        >
          Sukkur IBA
        </Box>

        {/* Centered Red Box */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 3,
            borderRadius: 2,
            padding: 2,
            width: 628,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Optional: background with transparency
          }}
        >
          <Box sx={{ pl: "10rem" }}>
            {/* Login Icon */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <PersonIcon sx={{ alignSelf: "center", fontSize: 30 }} />
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  fontSize: "24px",
                  lineHeight: "40px",
                }}
              >
                Login
              </Typography>
            </Box>

            {/* Login Form */}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.email && touched.email)}  // Set error flag
                helperText={errors.email && touched.email ? errors.email : ''}  // Display error message
              />

              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                placeholder="Password"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.password && touched.password)}  // Set error flag
                helperText={errors.password && touched.password ? errors.password : ''}  
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "secondary.main",
                  borderRadius: "8px",
                  textTransform: "none",
                }}
              >
                Login
              </Button>
            </Box>

            {/* Links */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link
                href="/register"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                Register here
              </Link>
              <Link
                href="/reset-password"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                Forgot your password
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
