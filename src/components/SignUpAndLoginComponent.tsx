
import React, { useState } from "react";
import Logo from "../assets/2766595.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";

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
        <Box sx={{ p: 3}}>
          
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

function SignUpAndLoginComponent() {

  const [value, setValue] = useState(0);


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
                  marginRight: "31px",
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
                {value==0 ? (< SignInComponent/>) :( <SignUpComponent/>)} 
        </Box>

        </div>
      </div>
    </div>
  );
}

export default SignUpAndLoginComponent;
