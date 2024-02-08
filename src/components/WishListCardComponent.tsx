import { DeleteOutline } from "@mui/icons-material"
import { removeWishlistItem } from "../utilis/BooksServices"
import { useDispatch, useSelector} from "react-redux"
import { deleteWishItem } from "../utilis/store/wishListSlice"
import displayImg from '../assets/Books/Image 12.png';

function WishListCardComponent({book}:{book:any}) {
    const dispatch = useDispatch()
    const WishListItems = useSelector((store: any) => store.wish.wishListItems);
    const removeWishItem = async()=>{
        await removeWishlistItem(book._id)
        dispatch(deleteWishItem(book._id))
    }
    return(
        <div className="flex mt-[20px] ml-[20px] w-[85%] mb-[50px] gap-5 h-[150px] rounded font-[Roboto] border-b-2 px-10 items-center"style={{ border: '2px solid #E4E4E4' }}>
            
            <img src={displayImg} alt={`${book.bookName} Img`} className="w-[80px] h-[100px]"/>
            <div className="flex flex-col gap-2">
            <h1 className="font-medium">{book.bookName}</h1>
            <p className="text-[#878787] text-sm">by {book.author}</p>
            <div className="flex items-center gap-1"><h1 className="text-[18px] font-bold">
                Rs.{book.discountPrice}</h1>
                <p className="line-through text-[12px] text-[#878787]">Rs.{book.price}</p></div>
            </div>
            <button onClick={removeWishItem}>
            <DeleteOutline sx={{ marginLeft: '500px', ':hover': { color: 'blue' } }} />

            </button>
        </div>
    )
}
export default WishListCardComponent;