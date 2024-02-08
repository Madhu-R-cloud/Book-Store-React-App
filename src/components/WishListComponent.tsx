import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import WishBookCard from "./WishListCardComponent";
import { CircularProgress } from "@mui/material";
import { HeartBroken } from "@mui/icons-material";
import WishListCardComponent from "./WishListCardComponent";
import { setLoaded } from "../utilis/store/LoadSlice";
import { useEffect } from "react";

function WishListComponent() {
    
  const WishListItems = useSelector((store: any) => store.wish.wishListItems);
  const dataloaded = useSelector((store: any) => store.pageload.pageLoads);

  console.log('WishList Iemss',WishListItems);
  
  useEffect(()=>{
  
  },[WishListItems])


  return (
    <div className="w-full h-full flex justify-center">
      {!dataloaded ? (
        <div className="w-[80%] font-[Roboto]">
          <div className="mt-[20px]">
            <Link to={"/book"} className="text-[#9D9D9D]">
              Home /
            </Link>
            <span>My Wishlist</span>
          </div>
          <div className="w-full mt-5 min-h-[250px] border-[#707070] border">
            <div className="text-lg font-semibold py-5 px-10 bg-[#F5F5F5]">
              My Wishlist ({WishListItems.length})
            </div>
            <div className="flex flex-col gap-2">
              {WishListItems?.length ? (
                WishListItems.map((book: any, index: number) => (
                  <WishListCardComponent key={index} book={book} />
                ))
              ) : (
                <div className="flex h-[180px] justify-center items-center gap-2">
                  <HeartBroken />
                  <h1 className="text-xl">Your Wishlist is Empty!</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* <h1>Data Is Not Loaded</h1> */}
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default WishListComponent;
