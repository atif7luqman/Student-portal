import { Box, TextField, Typography, Button, Link } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import ProfileIcon from "../assets/ProfileIcon.svg";
// import AuthService from "../services/auth-service";

const Login = () => {
//   const navigate = useNavigate(); // Initialize useNavigate
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    // console.log(e);
    setError("");
    setSuccessMessage('');
    const { name, value } = e.target;
    console.log(`label: ${name}  input: ${value}`);
    setLoginForm({ ...loginForm, [name]: value });
    // Object.entries(formValues).forEach(([label, input]) => {
    //   console.log(`${label} : ${input || "__"}`);
    // });
    // console.log("---------------------");
  };

  // Handle form submission
  const handleSubmit = async (e, path) => {
    e.preventDefault();
    console.log('Form Data');
    console.log(FormData);
    // Call signup service
    // try {
    //   console.log("Login form");
    //   console.log(loginForm);
    //   const response = await AuthService.login(loginForm);

    //   console.log('response in template');
    //   // console.log(response);

    //   if (response?.data) {
    //     setSuccessMessage("Login Successful.");
    //     navigate(path);
    //   } else {
    //     setError(response.errors[0].message || "login failed!");
    //   }
    // } catch (e) {
    //   console.log("catch block");
    //   console.log(e);
    // }
  };

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
          <Box sx={{ m: "5px", fontSize: "24px", fontWeight: "bold" }}>
            Flexi
            <Box sx={{ color: "secondary.main", display: "inline" }}>
              Parser
            </Box>
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
              padding: 3,
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
                {/* <img src={ProfileIcon} alt="profile icon" width={30} /> */}

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
                onSubmit={(e) => handleSubmit(e, "/")}
                sx={{ mt: 1 }}
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleInputChange}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleInputChange}
                />

                {/* Error and Success Messages */}
                {error && (
                  <Typography color="error">
                    {error || "this-----eror"}
                  </Typography>
                )}
                {successMessage && (
                  <Typography color="primary">{successMessage}</Typography>
                )}

                {/* Login Button */}
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "secondary.main",
                    borderRadius: "8px",
                    textTransform: 'none'
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
