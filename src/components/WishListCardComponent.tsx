import { DeleteOutline } from "@mui/icons-material"
import { removeWishlistItem } from "../utilis/BooksServices"
import { useDispatch } from "react-redux"
import { deleteWishItem } from "../utilis/store/wishListSlice"
import { useEffect } from "react"
import displayImg from '../assets/Books/Image 12.png';

function WishListCardComponent({book}:{book:any}) {
    const dispatch = useDispatch()
//    useEffect(()=>{
//     console.log(book);
    
//    },[])
    const removeWishItem = async()=>{
        await removeWishlistItem(book._id)
        dispatch(deleteWishItem(book._id))
    }
    return(
        <div className="flex gap-10 w-full h-[150px] rounded font-[Roboto] border-b-2 px-10 items-center">
            <img src={book.displayImg} alt={`${book.bookName} Img`} className="w-[80px] h-[100px]"/>
            <div className="flex flex-col gap-2">
            <h1 className="font-medium">{book.bookName}</h1>
            <p className="text-[#878787] text-sm">by {book.author}</p>
            <div className="flex items-center gap-1"><h1 className="text-[18px] font-bold">Rs.{book.discountPrice}</h1><p className="line-through text-[12px] text-[#878787]">Rs.{book.price}</p></div>
            </div>
            <button onClick={removeWishItem} className="absolute right-[180px]"><DeleteOutline/></button>
        </div>
    )
}
export default WishListCardComponent;