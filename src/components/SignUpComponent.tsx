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
        <div>

            <label className="flex mt-[25px] ml-[25px]">Email id</label>
            
                <TextField className="left-[25px] top-[5px]"
              id="outlined-size-small"
              size="small" style = {{width: 252}}
            />
              <label className="flex mt-[10px] ml-[25px]">Password</label>
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
            <div className="flex ml-[185px] color-blue"> 
            <label className="text-[#9D9D9D] text-xs">Forgot Password?</label>

            </div>
            <Button variant="contained" style={{width: '252px', left:'31px',top:'10px',backgroundColor:'#A03037'}}>Login</Button>
            <div className="flex flex-row mt-[20px] ml-[80px]">
                <hr style={{ borderColor: 'white' }} />________
                <span className="flex font-bold">OR</span> 
                <hr style={{ borderColor: 'white' }} />________
            </div>

            <div className="flex">
            <Button variant="outlined" style={{width: '126px', left:'31px',top:'20px',backgroundColor:'#4266B2',color:'white'}}>
                Facebook
            </Button>
            <Button variant="outlined" style={{width: '119px', left:'37px',top:'20px',backgroundColor:'#F5F5F5', border:'#E4E4E4', color:'#0A0102'}}>
                Google
            </Button>
            </div>
        </div>
    );
        
}

export default SignUpComponent;