import React from "react";
import educationLogo from "../assets/education.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Outlet } from "react-router-dom";

function HeaderAndFooterComponent() {
  return (
    <div className="flex flex-col w-[100%]">
      <div
        className="flex h-[60px] w-[100%]"
        style={{ backgroundColor: "#A03037" }}
      >
        <header>
          <div className="flex w-[100%] text-white items-center mt-[11px]">
            <img
              src={educationLogo}
              alt="EducationLogo"
              className="w-[3%] h-[24px] ml-[163px]"
            />
            <label className="ml-[4px]">BookStore</label>
            <TextField
              id="outlined-search"
              type="search"
              size="small"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ fontSize: "20px" }} />
                  </InputAdornment>
                ),
              }}
              // sx={{ "& .MuiInputBase-root": { height: "2.3rem" } }}
              style={{
                width: "490px",
                backgroundColor: "white",
                left: "60px",
                borderRadius: "0.3rem",
              }}
            />
            <div className="flex ml-[300px]">
              <div className="flex-col mr-[80px]">
                <PersonOutlineOutlinedIcon />{" "}
                <p style={{ fontSize: "10px" }}>Profile</p>
              </div>
              <div className="flex-col">
                <ShoppingCartOutlinedIcon />
                <p style={{ fontSize: "10px" }}>Cart</p>
              </div>
            </div>
          </div>
        </header>
      </div>
      <Outlet/>
      <div
        className="flex h-[50px] w-[100%] items-center"
        style={{ backgroundColor: "#2E1D1E" }}
      >
        <footer>
          <p
            style={{
              color: "white",
              fontSize: "12px",
              left: "160px",
              position: "relative",
            }}
          >
            Copyright <CopyrightOutlinedIcon style={{ fontSize: "12px" }} />{" "}
            2020, Bookstore Private Limited. All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  );
}

export default HeaderAndFooterComponent;
