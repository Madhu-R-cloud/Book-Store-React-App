import React, { useEffect } from "react";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import { Link, Outlet } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import appStore from "../utilis/store/AppStore";
import { getBookDetails, getCartsDetails } from "../utilis/BooksServices";
import { addItemsToBook } from "../utilis/store/BookSlice";
import HeaderComponent from "./HeaderComponent";
import { putCartList } from "../utilis/store/CartSlice";


function HeaderAndFooterComponent() {
  

  return (
    <>
      <HeaderComponent />
        
        <Outlet />

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
    </>
  );
}

export default HeaderAndFooterComponent;
