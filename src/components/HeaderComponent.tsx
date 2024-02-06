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
import { Badge, Button, Menu } from "@mui/material";
import {
  FavoriteBorder,
  MarkunreadMailboxOutlined,
  PersonOutline,
} from "@mui/icons-material";
import { putWishList } from "../utilis/store/wishListSlice";

function HeaderComponent() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store: any) => store.cart.cartItems);
  const BookList = useSelector((store: any) => store.books.bookItems);
  const wishListItems = useSelector((store:any)=> store.wish.wishListItems)
//  console.log(cartItems,'cartItems');
 

  const [menu, setMenu] = useState(null);
  const [name, setName] = useState("Profile");
  const open = Boolean(menu);

  const handleClick = (e: any) => {
    setMenu(e.currentTarget);
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
    const bookList = response.map((cartBook:any)=>{return{...cartBook,bookName:cartBook.product_id.bookName,author:cartBook.product_id.author,price:cartBook.product_id.price,discountPrice:cartBook.product_id.discountPrice,_id:cartBook.product_id._id,cartId:cartBook._id,quantityToBuy:cartBook.quantityToBuy,user_id:cartBook.user_id}})
    dispatch(putCartList(bookList));
  };
  
  
  const getWishListDetails = async () => {
    const wishList = await getWishlistItems();
      if(wishList!=''){
        dispatch(setLoadedWishList(true));
      }
      const wishListFiltered = wishList.map((wishlist:any)=>{
        return{...wishlist,_id:wishlist.product_id._id,bookName:wishlist.product_id.bookName,author:wishlist.product_id.author,price:wishlist.product_id.price,discountedPrice:wishlist.product_id.discountPrice
        }})

      dispatch(putWishList(wishListFiltered));
      
    // }
  };

  // useEffect(() => {
   
  // }, []);

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
              <PersonOutlineOutlinedIcon onClick={handleClick} />{" "}
              <p style={{ fontSize: "10px" }}>Profile</p>
            </div>
            <div className="flex-col">
              <Link
                to="/book/cart"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Badge badgeContent={cartItems.length} color="secondary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
                {/* My cart ({cartItems?.length}) */}
                {/* <ShoppingCartOutlinedIcon /> */}
                <p style={{ fontSize: "10px" }}>Cart</p>
              </Link>
            </div>
            <Menu
              id="simple-menu"
              open={open}
              onClose={() => setMenu(null)}
              anchorEl={menu}
            >
              <div className="w-[240px] flex flex-col gap-[12px] pl-8">
                <span>Hello {name},</span>
                <Link to={"profile"}>
                  <PersonOutline /> Profile
                </Link>
                <Link to={"orders"}>
                  <MarkunreadMailboxOutlined /> My Orders
                </Link>
                <Link to={"wishlist"}>
                  <FavoriteBorder /> My Wishlist
                </Link>
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
              </div>
            </Menu>
          </div>
        </div>
      </header>
    </>

);

}


export default HeaderComponent;
