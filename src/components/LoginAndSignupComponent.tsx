
import React, { useState } from "react";
import Logo from "../assets/2766595.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: '100%', boxSizing: 'border-box' }}>
          <Typography>{children}</Typography>
          {/* Placeholder signup fields */}
          <TextField label="Full Name" variant="outlined" fullWidth margin="normal" />
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Password" variant="outlined" fullWidth margin="normal" />
          <TextField label="Confirm Password" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" style={{ width: '100%', marginTop: '20px', backgroundColor: '#A03037' }}>Register</Button>
        </Box>
      )}
      <TextField id="outlined-basic" variant="outlined" />
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function LoginAndSignupComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(0);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="flex h-[768px] w-[1366px] bg-stone-300">
      <div className="flex h-[391px] w-[660px] bg-neutral-100 m-auto rounded-2xl">
        <div className="flex flex-col h-[245px] w-[245px] bg-transparent ml-[53px] mt-[52px] ">
          <img className="rounded-full" src={Logo} alt="Logo" />
          <p className="font-bold text-base mt-3 ml-[10px]">
            ONLINE BOOK SHOPPING
          </p>
        </div>
        <div className="flex flex-row h-[415px] w-[400px] bg-neutral-100 ml-[40px] bg-white rounded-xl">
          <Box
            sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}
          >
            <Tabs
              className="space-y-4"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="LOGIN"
                sx={{
                  marginRight: "50px",
                  fontSize: 17,
                  fontWeight: "bold",
                  marginLeft: "50px",
                  marginTop: "10px",
                  ...a11yProps(0),
                }}
              />
              <Tab
                label="SIGNUP"
                sx={{
                  fontSize: 17,
                  marginTop: "10px",
                  fontWeight: "bold",
                  ...a11yProps(1),
                }}
              />
            </Tabs>
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
        </Box>

        </div>
      </div>
    </div>
  );
}

export default LoginAndSignupComponent;
