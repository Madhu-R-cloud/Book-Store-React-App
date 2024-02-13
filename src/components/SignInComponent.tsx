import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Login } from "../utilis/userServices";
interface IError{
  msg:string,
  param:string
}


function SignInComponent() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(0);
const [Error,setError] = useState(Array<IError>);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {event.preventDefault();};
  const UserLogin = async() => {

    const emailId = (document.getElementById('emailId')as HTMLInputElement).value
    const password = (document.getElementById('password')as HTMLInputElement).value
    const userObj = {
        email: emailId,
        password: password
      }
    
   let res =  await Login(userObj,navigate,setError)
   console.log(res,'LoginRes');
   
} 

  return (

    // <div className="flex flex-col h-[425px] w-[389px] bg-neutral-100 ml-[658px] bg-white rounded-xl border-solid">
    <>

      <div className="flex flex-col ml-[20px] mt-[30px] gap-5">
      <TextField className=" flex mt-[50px] left-[25px] top-[3px]"
      label="Email Id"
        id="emailId"
        size="small"
        style={{ width: 252 }}
        error={Error[0]?.param==="email"?true:false} helperText={Error[0]?.param==="email"?Error[0].msg:""}
      />
      {/* <div className="flex ml-[20px] mb-[20px] mt-[20px]"> */}

      <TextField id="password" label="Password" size="small" 
      style={{ width: 252, marginLeft: '25px' }}
      type={showPassword ? 'text' : 'password'} 
      error={Error[0]?.param==="password"?true:false} helperText={Error[0]?.param==="password"?Error[0].msg:""}
        InputProps={{endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"> 
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            )}}/>
      {/* </div> */}

      </div>
      <div className="flex ml-[185px] color-blue">
        <label className="text-[#9D9D9D] text-xs">Forgot Password?</label>

      </div>
      <Button onClick={UserLogin} variant="contained" style={{ width: '252px', left: '43px', top: '10px', backgroundColor: '#A03037' }}>Login</Button>
      <div className="flex flex-row mt-[20px] ml-[100px]">
        <hr style={{ borderColor: 'white' }} />  ________
        <span className="flex font-bold mt-[5.5px]">OR</span>
        <hr style={{ borderColor: 'white' }} />  ________
      </div>

      <div className="flex ml-[17px]">
        <Button variant="outlined" style={{ width: '126px', left: '31px', top: '20px', backgroundColor: '#4266B2', color: 'white' }}>
          Facebook
        </Button>
        <Button variant="outlined" style={{ width: '119px', left: '37px', top: '20px', backgroundColor: '#F5F5F5', border: '#E4E4E4', color: '#0A0102' }}>
          Google
        </Button>
      </div>
      {/* </div> */}
    </>
  );

}

export default SignInComponent;
