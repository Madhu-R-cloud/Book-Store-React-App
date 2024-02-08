import React, { useEffect, useState } from "react";
import educationLogo from "../assets/education.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Link, Outlet } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import appStore from "../utilis/store/AppStore";
import {
  getBookDetails,
  getCartsDetails,
  getWishlistItems,
} from "../utilis/BooksServices";
import { addItemsToBook } from "../utilis/store/BookSlice";
import { setLoaded, setLoadedWishList } from "../utilis/store/LoadSlice";
import { putCartList } from "../utilis/store/CartSlice";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  FavoriteBorder,
  Logout,
  MarkunreadMailboxOutlined,
  PersonAdd,
  PersonOutline,
  Settings,
} from "@mui/icons-material";
import { putWishList } from "../utilis/store/wishListSlice";

function HeaderComponent() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store: any) => store.cart.cartItems);
  const BookList = useSelector((store: any) => store.books.bookItems);
  const wishListItems = useSelector((store: any) => store.wish.wishListItems);

  // const [menu, setMenu] = useState(null);
  const [name, setName] = useState("Profile");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getBooks = async () => {
    try {
      const res = await getBookDetails();
      if (res != "") {
        dispatch(setLoaded(false));
      }
      dispatch(addItemsToBook(res));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBooks();
    getCartDetails();
    getWishListDetails();
  }, []);

  const getCartDetails = async () => {
    const response = await getCartsDetails();
    if(response.length){
      setName(response[0].user_id.fullName)
    }
    const bookList = response.map((cartBook: any) => {
      return {
        ...cartBook,
        bookName: cartBook.product_id.bookName,
        author: cartBook.product_id.author,
        price: cartBook.product_id.price,
        discountPrice: cartBook.product_id.discountPrice,
        _id: cartBook.product_id._id,
        cartId: cartBook._id,
        quantityToBuy: cartBook.quantityToBuy,
        user_id: cartBook.user_id,
      };
    });
    dispatch(putCartList(bookList));
  };

  const getWishListDetails = async () => {
    const wishList = await getWishlistItems();
    if (wishList != "") {
      dispatch(setLoadedWishList(false));
    }
    
    const wishListFiltered = wishList.map((wishlist: any) => {
      return {
        ...wishlist,
        _id: wishlist.product_id._id,
        bookName: wishlist.product_id.bookName,
        author: wishlist.product_id.author,
        price: wishlist.product_id.price,
        discountedPrice: wishlist.product_id.discountPrice,
      };
    });

    dispatch(putWishList(wishListFiltered));
  };
  return (
    <>
      <header>
        <div
          className="flex w-[100%] h-[55px] text-white items-center mt-[11px]"
          style={{ backgroundColor: "#A03037" }}
        >
          <img
            src={educationLogo}
            alt="EducationLogo"
            className="w-[3%] h-[24px] ml-[163px]"
          />{" "}
          <Link to="/book" style={{ textDecoration: "none", color: "inherit" }}>
            BookStore
          </Link>
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
            style={{
              width: "490px",
              backgroundColor: "white",
              left: "60px",
              borderRadius: "0.3rem",
            }}
          />
          <div className="flex ml-[300px]">
            <div className="flex-col mr-[80px]">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Profile">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <div className="flex flex-col gap-0 text-white text-xs">
                      {/* <Avatar sx={{ width: 32, height: 32 }}> */}
                      <PersonOutlineOutlinedIcon sx={{ marginLeft: "2px" }} />
                      {/* </Avatar><br/> */}
                      <p style={{ fontSize: "10px" }}>{name}</p>
                    </div>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Link to={"profile"}>
                  <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                  </MenuItem>
                </Link>
                <Link to={"orders"}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <MarkunreadMailboxOutlined fontSize="small" />
                    </ListItemIcon>
                    My Orders
                  </MenuItem>
                </Link>
                <Link to={"wishlist"}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <FavoriteBorder fontSize="small" />
                    </ListItemIcon>
                    Wishlist
                  </MenuItem>
                </Link>
                <Link to={"/"}>
                  <MenuItem onClick={handleClose}>
                    <Button
                      variant="outlined"
                      sx={{
                        width: "150px",
                        height: "40px",
                        borderColor: "#A03037",
                        color: "#A03037",
                      }}
                    >
                      Logout
                    </Button>
                  </MenuItem>
                </Link>
              </Menu>

              {/* <PersonOutlineOutlinedIcon />{" "}
              <p style={{ fontSize: "10px" }}>Profile</p> */}
            </div>
            <div className="flex-col mt-[6px]">
              <Link
                to="/book/cart"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Badge badgeContent={cartItems.length} color="secondary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
                <p style={{ fontSize: "10px" }}>Cart</p>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;
