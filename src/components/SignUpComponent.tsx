import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import SignUp from '../utilis/userServices';
import { useNavigate } from "react-router-dom";

interface signUpdetails{
  fullName:string,
  email:string,
  password:string,
  mobileNumber:string
}

function SignUpComponent(){

  const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(0);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
   
  const [signUpDetails, setSignUpDetails] = useState<signUpdetails>({
    fullName:"",
    email:"",
    password:"",
    mobileNumber:""
  })

  const handleSignUpdetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setSignUpDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  
  };

  

  const handleSignUp =async () => {
    // const res = await SignUp(signUpDetails)
    //   console.log(res);
      
      // navigate('/home') 
  }
    return (
        // <div className="flex flex-col h-[415px] w-[400px] bg-neutral-10w0 ml-[40px] bg-white rounded-xl">
        <>
            <label className="flex mt-[5px] ml-[25px] text-xs">full Name</label>
            
                <TextField className="left-[25px] ]"
              id="outlined-size-small"
              // error={error[0]}
              name="fullName"
              size="small" style = {{width: 252}}
              onChange={handleSignUpdetails}
            />
            <label className="flex ml-[25px] mt-[10px] text-xs">Email id</label>
            
            <TextField className="left-[25px]"
            // error
            name="email"
          id="outlined-size-small"
          size="small" style = {{width: 252}}
          onChange={handleSignUpdetails}
        />
              <label className="flex  ml-[25px] mt-[10px] text-xs">Password</label>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined" size="small" style = {{width: 252, left:19}} >
              <OutlinedInput
                id="outlined-adornment-password"
                // error
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={handleSignUpdetails}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={(event) =>
                        event.preventDefault()
                      }
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <label className="flex ml-[27px] mt-[10px] text-xs">Mobile Number</label>
            
            <TextField className="left-[28px]"
            type="number"
            // error
            name="mobileNumber"
          id="outlined-size-small"
          size="small" style = {{width: 252}}
          onChange={handleSignUpdetails}
        />
        <Button variant="contained" onClick={handleSignUp} style={{width: '252px', left:'28px',top:'15px',backgroundColor:'#A03037'}}>Signup</Button>
            
        </>
    );
        
}

export default SignUpComponent;