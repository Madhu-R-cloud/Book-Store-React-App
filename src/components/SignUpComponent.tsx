import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { createUser } from "../utilis/userServices";
import FormHelperText from "@mui/material/FormHelperText";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface SignUpDetails {
  fullName: string;
  email: string;
  password: string;
  mobileNumber: string;
}

function SignUpComponent() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [signUpDetails, setSignUpDetails] = useState<SignUpDetails>({
    fullName: "",
    email: "",
    password: "",
    mobileNumber: ""
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNumber: "",
    apiError: ""
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSignUpdetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let error = "";

    switch (name) {
      case "fullName":
        error = value.trim() === "" ? "Full name is required" : "";
        break;
      case "email":
        break;
      case "password":
        error = value.trim() === "" ? "Password is required" : "";
        break;
      case "mobileNumber":
        error = value.trim() === "" ? "Mobile number is required" : "";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));

    setSignUpDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const newUser = async() => {
    const fullname = (document.getElementById('fullname')as HTMLInputElement).value
    const emailId = (document.getElementById('emailId')as HTMLInputElement).value
    const password = (document.getElementById('password')as HTMLInputElement).value
    const mobileNo = (document.getElementById('mobileNo')as HTMLInputElement).value
    const userObj = {
        fullName: fullname,
        email: emailId,
        password: password,
        phone: mobileNo
      }
    await createUser(userObj,navigate)
} 

  return (
    <>
      <TextField
        id="fullName"
        name="fullName"
        size="small"
        label="Full Name"
        error={errors.fullName !== ""}
        helperText={errors.fullName}
        style={{ width: 252, marginBottom: 10, marginTop: 30, marginLeft: 25 }}
        // value={signUpDetails.fullName}
      />


      <TextField
        id="email"
        name="email"
        size="small"
        label="Email id"
        error={errors.email !== ""}
        helperText={errors.email}
        style={{ width: 252, marginBottom: 10, marginTop: 10, marginLeft: 25 }}
        // value={signUpDetails.email}
      />

      <OutlinedInput
        id="password"
        name="password"
        size="small"
        type={showPassword ? "text" : "password"}
        // value={signUpDetails.password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={(event) => event.preventDefault()}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        style={{ width: 252, marginBottom: 10, marginTop: 16, marginLeft: 25, color: "black" }}
      />
      <FormHelperText error={errors.password !== ""}>{errors.password}</FormHelperText>

      <TextField
        id="mobileNumber"
        type="number"
        name="mobileNumber"
        size="small"
        label="Mobile Number"
        error={errors.mobileNumber !== ""}
        helperText={errors.mobileNumber}
        style={{ width: 252, marginBottom: 10, marginTop: 10, marginLeft: 25 }}
        // value={signUpDetails.mobileNumber}
      />

      {errors.apiError && (
        <div style={{ color: 'red', marginTop: 5, marginLeft: 25 }}>
          {errors.apiError}
        </div>
      )}

      <Button
        variant="contained"
        onClick={newUser}
        style={{ width: '252px', backgroundColor: '#A03037', marginTop: 10, marginLeft: 25 }}
      >
        Signup
      </Button>
    </>
  );
}

export default SignUpComponent;
function SignUp(SignUpDetails: SignUpDetails, navigate: NavigateFunction) {
  throw new Error("Function not implemented.");
}

