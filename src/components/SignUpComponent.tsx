import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

function SignUpComponent(){

    const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(0);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


    return (
        // <div className="flex flex-col h-[415px] w-[400px] bg-neutral-100 ml-[40px] bg-white rounded-xl">
        <>
            <label className="flex   mt-[5px]  ml-[25px]">First Name</label>
            
                <TextField className="left-[25px] ]"
              id="outlined-size-small"
              size="small" style = {{width: 252}}
            />
            <label className="flex ml-[25px]">Email id</label>
            
            <TextField className="left-[25px]"
          id="outlined-size-small"
          size="small" style = {{width: 252}}
        />
              <label className="flex  ml-[25px]">Password</label>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined" size="small" style = {{width: 252, left:20}} >
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
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
            <label className="flex ml-[25px]">Mobile Number</label>
            
            <TextField className="left-[25px]"
          id="outlined-size-small"
          size="small" style = {{width: 252}}
        />

            <Button variant="contained" style={{width: '252px', left:'26px',top:'15px',backgroundColor:'#A03037'}}>Signup</Button>
            
        </>
    );
        
}

export default SignUpComponent;