import React, { useEffect, useState } from "react";
import Img1 from "../assets/Books/Image 12.png";
import StarRateIcon from "@mui/icons-material/StarRate";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, updateItemQuantity } from "../utilis/store/CartSlice";
import { Link, useParams } from "react-router-dom";
import displayImg from "../assets/Books/image.png";

import {
  AddCircleOutline,
  Favorite,
  RemoveCircleOutline,
} from "@mui/icons-material";
import {
  addToCart,
  addWishList,
  bookFeedback,
  getFeedback,
  updateCartQty,
} from "../utilis/BooksServices";
import { addWishListItem } from "../utilis/store/wishListSlice";
import { getReviewList } from "../utilis/store/ReviewSlice";

interface bookData {
  _id: string;
  bookName: string;
  author: string;
  discountPrice: number;
  price: number;
  description: string;
  Image: string;
  quantity: number;
}

function BookDetailsComponent() {
  const bookItems = useSelector((store: any) => store.books.bookItems);
  const cartItems = useSelector((store: any) => store.cart.cartItems);
  const feedBackList = useSelector((store:any)=> store.review.reviewList)
  const wishLists = useSelector((store: any) => store.wish.wishListItems);

  const [value, setValue] = useState<null | number>(2);

  const [bookData, setBookData] = useState<bookData>();
  const [showImage, setShowImage] = useState<any>(Img1);
  const [AddToBag, setAddToBag] = useState<any>(false);
  const [wishList, setWishList] = useState<boolean>();
  const { bookId } = useParams();
  const dispatch = useDispatch();

  const handleImage = () => {
    setShowImage(Img1);
  };
  const showImg = () => {
    setShowImage(displayImg);
  };

  const cartId = cartItems?.filter((book: any) => book?._id===bookId)[0];
  // console.log(cartItems,'cartId');
  
  const wishId = wishLists?.filter((book: any) => book?._id === bookId)[0];

  const AddToCart = async () => {
    const NewCartBook = await addToCart(bookId!);    
    setAddToBag(true);  
    dispatch(addItemToCart({ ...bookData,product_id:NewCartBook.product_id,quantityToBuy: 1, cartId: NewCartBook._id }))
  };
  
  // console.log(cartItems);
  
  const IncrementQuantity = () => {
   const cartData = cartItems?.filter((book: any) => book?._id===bookId)[0];
    
    let updatedQuntity = cartData.quantityToBuy;
    updatedQuntity++;
    dispatch(updateItemQuantity({ itemId: bookId, updatedQuantity: updatedQuntity }));
    updateCartQty(cartId?.cartId, updatedQuntity);
    
  };


  const decrementQuantity = () => {
    const cartData = cartItems?.filter((book: any) => book?._id===bookId)[0];
    
    let updatedQuntity = cartData.quantityToBuy;
    updatedQuntity--;
    dispatch(updateItemQuantity({ itemId: bookId, updatedQuantity: updatedQuntity }));
    updateCartQty(cartId?.cartId, updatedQuntity);
  };

  useEffect(() => {
    setBookData(bookItems.filter((book: any) => book._id === bookId)[0]);
   
    if (cartId?.cartId) {
      setAddToBag(true);
    }
    if (wishId?._id) {
      setWishList(true);
    }
  }, [bookItems,cartItems,wishLists,feedBackList]);

  const handleWishList = () => {
    addWishList(bookId!);
    dispatch(addWishListItem(bookData));
    setWishList(true);
  };

  useEffect(()=>{
    getReviews()
  },[])

  const pushFeeback = async()=>{
    const comment = (document.getElementById('comment') as HTMLInputElement)
    await bookFeedback(bookId!,value!,comment.value + 'Even though the translation could have been better, Chanakyas neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct.')
    
    setValue(0)
    comment.value = ''
}

const getReviews = async()=>{
    const feedback = await getFeedback(bookId!)
    dispatch(getReviewList(feedback))
}

  return (
    <>
      {/* <div className='flex flex-col w-[10%] h-[10%]'> */}
      <p>
        <Link
          to="/book"
          className="flex text-xs ml-[180px] mt-[30px] mb-[25px]"
          style={{ color: "#9D9D9D" }}
        >
          Home / <span style={{ color: "black" }}>Book(01)</span>
        </Link>
      </p>

      <div className="flex flex-row w-[100%] ml-[200px] mb-[30px]">
        <div className="flex flex-col w-[36px] h-[46px] mr-[10px] mb-[5px] border-red-600">
          <button onClick={() => handleImage()}>
            {" "}
            <img src={Img1} style={{ width: 33, height: 44 }} alt="Image" />
          </button>
          <button onClick={() => showImg()}>
            <img
              src={displayImg}
              alt="Image"
              style={{ width: 33, height: 44, marginTop: 5 }}
            />
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col w-[361px] h-[413px] border border-stone-400 flex justify-center items-center">
            <img
              src={showImage}
              style={{ width: "281.62px", height: "367px" }}
              alt="Image"
            />
          </div>
          <div className="flex flex-row justify-around mt-[20px]">
            {AddToBag ? (
              <div className="h-[40px] flex gap-1 items-center">
                <IconButton
                  onClick={decrementQuantity}
                  disabled={cartId.quantityToBuy === 1 ? true : false}
                >
                  <RemoveCircleOutline fontSize="large" />
                </IconButton>
                <div className="w-[66px] h-[38px] p-1 text-center border-2 rounded">
                  {cartId.quantityToBuy}
                </div>
                <IconButton
                  onClick={IncrementQuantity}
                  disabled={
                    cartId.quantityToBuy <= cartId.quantity ? false : true
                  }
                >
                    <AddCircleOutline fontSize="large" />
                  </IconButton>
                </div>
            ) : (
              <Button
                variant="contained"
                sx={{
                  width: "170px",
                  height: "40px",
                  backgroundColor: "#A03037",
                }}
                onClick={AddToCart}
              >
                Add to Bag
              </Button>
            )}
            {wishList ? (
              <div className="w-[170px] h-[40px] bg-[#e2e2e2] text-black text-center p-[7px] rounded">
                <div className="flex justify-center items-center">
                  <Favorite sx={{ color: "red" }} />
                  Added To Wishlist!
                </div>
              </div>
            ) : (
              <Button
                className="flex gap-2"
                variant="contained"
                sx={{
                  width: "170px",
                  height: "40px",
                  backgroundColor: "#333333",
                }}
                onClick={handleWishList}
              >
                <Favorite />
                Wishlist
              </Button>
            )}
          </div>
        </div>
        <div className="flex flex-col ml-[50px] font-bold text-xl">
          <p>{bookData?.bookName}</p>
          <p className="font-thin text-gray-400">by {bookData?.author}</p>
          <div
            className="flex w-[45px] h-[20px] text-white text-xs items-center mt-[10px]"
            style={{ backgroundColor: "green" }}
          >
            <p className="ml-[5px]">4.5</p>
            <StarRateIcon
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                marginLeft: "3px",
                marginTop: "0.7px",
                alignItems: "center",
              }}
            />
          </div>
          <div className="flex mt-[5px]">
            <p>
              RS.{bookData?.discountPrice}
              <span className="text-xs font-thin text-gray-400 line-through ml-[8px]">
                RS.{bookData?.price}
              </span>
            </p>
          </div>
          <p className="text-gray-300">
            _______________________________________________________________
          </p>
          <div className="flex flex-col mt-[30px]">
            <p className="text-base text-sm text-gray-300">Book Details</p>
            <div
              className="text-xs font-thin ml-[12px] mt-[5px]"
              style={{ fontStyle: "Roboto" }}
            >
              <p>{bookData?.description}</p>
            </div>
          </div>
          <p className="text-gray-300">
            _______________________________________________________________
          </p>
          <div className="flex flex-col text-lg text-current font-semibold">
            <p>Cutomer Feedback</p>
            <div className="flex flex-col w-[557px] h-[192px] mt-[15px] bg-gray-300 text-sm">
              <Typography
                component="legend"
                style={{
                  fontSize: "12px",
                  marginTop: "15px",
                  marginLeft: "15px",
                }}
              >
                OverAll Rating
              </Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                style={{
                  fontSize: "20px",
                  marginLeft: "13px",
                  marginTop: "5px",
                }}
              />
              <div className="flex w-[527px] h-[63px] bg-[white] ml-[15px] mt-[10px]">
                <input
                  type="text"
                  id="comment"
                  placeholder="Write Your Review....."
                  style={{
                    fontSize: "12px",
                    marginTop: "10px",
                    height: "20px",
                    width: "350px",
                    marginLeft: "10px",
                    borderColor: "white",
                  }}
                />
              </div>
              <Button
                variant="contained"
                style={{
                  width: "44px",
                  height: "29px",
                  marginLeft: "475px",
                  marginTop: "10px",
                }} 
                onClick={pushFeeback}
              >
                Submit
              </Button>
            </div>
            {feedBackList.map((review:any,index:number)=><div key={index} className="flex justify-center mt-5 mb-20">
                        <div className="w-full flex gap-5">
                            <div className="border w-[40px] h-[40px] border-[#E4E4E4] bg-[#F5F5F5] rounded-full flex justify-center items-center">
                                <h1 className="text-xs text-[#707070]">{review.user_id.fullName[0]+review.user_id.fullName[1]}</h1>
                                </div>
                                <div>
                                <h1 className="font-bold">{review.user_id.fullName}</h1>
                                <Rating name="read-only" value={review.rating} readOnly />
                                <p className="text-wrap text-sm text-slate-500">{review.comment}</p>
                                </div>
                                </div>
                                </div>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetailsComponent;
