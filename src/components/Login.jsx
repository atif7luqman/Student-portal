import { Box, TextField, Typography, Button, Link } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "../schema/LoginSchema";
import PersonIcon from '@mui/icons-material/Person';
// import ProfileIcon from "../assets/ProfileIcon.svg";
// import AuthService from "../services/auth-service";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  //   const navigate = useNavigate(); // Initialize useNavigate
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values) => {
        console.log("🚀 ~ Login ~ values:", values);
      },
    });

  // console.log("🚀 ~ Login ~ values:", values);
  console.log("🚀 ~ Login ~ errors:", errors);

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          flexGrow: 1,
          margin: 0,
          padding: 0,
          width: `100vw`,
          overflowX: "hidden",
        }}
      >
        <Box>
          <Box
            sx={{
              m: "5px",
              fontSize: "24px",
              fontWeight: "bold",
              color: "secondary.main",
            }}
          >
            Sukkur IBA
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Login Form */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: 3,
              borderRadius: 2,
              padding: 1,
              width: 628,
            }}
          >
            <Box sx={{ pl: "10rem" }}>
              {/* Login Icon */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2, // Space between Avatar and Typography
                }}
              >
                {/* Login Icon */}
                <PersonIcon sx={{alignSelf:"center",fontSize:30}}/>
                {/* Login Title */}
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    fontSize: "24px", // Adjust this size to match Avatar size
                    lineHeight: "40px", // Match height of avatar (40px)
                  }}
                >
                  Login
                </Typography>
              </Box>

              {/* Email and Password Input */}
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
                />
                {errors.email && touched.email ? (
                  <p className="form-error">{errors.email}</p>
                ) : null}

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
                />
                {errors.password && touched.password ? (
                  <p className="form-error">{errors.password}</p>
                ) : null}

                {/* Login Button */}
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
      </Box>
    </>
  );
};

export default Login;
