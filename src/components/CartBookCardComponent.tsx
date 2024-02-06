import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSlots, AccordionSummary, Button, Fade, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, updateItemQuantity } from "../utilis/store/CartSlice";
import { removeCartItem, updateCartQty, getCartsDetails } from "../utilis/BooksServices";
import displayImg from '../assets/Books/Image 12.png';
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CartBookCardComponent = ({ book, index }: { book: any; index: number }) => {
  // console.log(book);
  
  const dispatch = useDispatch();
  const cartItems = useSelector((store: any) => store.cart.cartItems);
  const cartBook = cartItems.filter((cartbook: any) => cartbook._id === book._id)[0]
  // console.log(cartItems);
  
  
  useEffect(() => {
    // getCartsDetails()
  }, [cartItems])

  const removeItem = async () => {

    const res = await removeCartItem(book.cartId);
    // if(res!=undefined){
    dispatch(deleteCartItem(book._id));
    // }

  };

  const IncrementQuantity = () => {
    let updatedQuntity = cartBook.quantityToBuy;
    if (updatedQuntity <= book.quantity) {
      updatedQuntity++;
      dispatch(
        updateItemQuantity({ itemId: book._id, updatedQuantity: updatedQuntity })
      );
      updateCartQty(book.cartId, updatedQuntity);
    }
  };

  const decrementQuantity = () => {
    let updatedQuntity = cartBook.quantityToBuy;
    if (updatedQuntity > 1) {
      updatedQuntity--;
      dispatch(
        updateItemQuantity({ itemId: book._id, updatedQuantity: updatedQuntity })
      );
      updateCartQty(book.cartId, updatedQuntity);
    }
  };


  return (
    <div>
      <div className="flex gap-10 w-[800px] h-[170px] font-[Roboto] align-center" style={{ border: '2px solid #E4E4E4' }}>
        <img src={displayImg} alt={`${book.bookName} Img`} className="w-[80px] h-[100px] mt-[20px] ml-[20px]" />
        <div className="flex flex-col gap-0.5 w-[600px] ml-[50px]">
          <div className="flex mt-[20px] ">

            <h1 className="font-medium">{book.bookName}</h1>
            <DeleteIcon
              onClick={removeItem}
              sx={{
                marginLeft: '450px',
                color: '#E4E4E4',
                '&:hover': {
                  color: 'blue',
                },
              }}
            />
          </div>
    
          <p className="text-[#878787] text-sm">by {book.author}</p>
          <div className="flex items-center gap-0.5">
            <h1 className="text-[18px] font-bold">Rs.{book.discountPrice}</h1>
            <p className="line-through text-[12px] text-[#878787]">Rs.{book.price}</p>
          </div>
          <div className='flex gap-1 items-center ml-[-10px]'>
            <IconButton onClick={decrementQuantity} disabled={book.quantityToBuy === 1 ? true : false}>
              <RemoveCircleOutline />
            </IconButton>

            <div className='w-[40px] h-[28px] text-center border-2 rounded'>{book.quantityToBuy}</div>

            <IconButton onClick={IncrementQuantity} disabled={book.quantityToBuy <= book.quantity ? false : true}>
              <AddCircleOutline />
            </IconButton>

          </div>
        </div>
      </div>
      <div>
     
    </div>
  
    </div>
  )};

export default CartBookCardComponent;
