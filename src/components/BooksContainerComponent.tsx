import React, { useEffect, useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import StarRateIcon from "@mui/icons-material/StarRate";
import { getBookDetails, getCartsDetails } from "../utilis/BooksServices";
import { log } from "console";
import {
  AlignVerticalCenter,
  Diversity1Outlined,
  Margin,
  Store,
} from "@mui/icons-material";
import { CircularProgress, LinearProgress, colors } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToBook } from "../utilis/store/BookSlice";
import { setLoaded } from "../utilis/store/LoadSlice";

import BookCardComponent from "./BookCardComponent";
import { putCartList } from "../utilis/store/CartSlice";

interface Book {
  description: string;
  bookName: string;
  title: string;
  author: string;
  quantity: number;
  rating: number;
  discountPrice: number;
  price: number;
  _id: string;
}

function BooksContainerComponent() {
  const dispatch = useDispatch();

  const BookList = useSelector((store: any) => store.books.bookItems);

  const pageLoad = useSelector((store:any)=> store.pageload.pageLoads)

  const SortPriceLowToHigh = () => {
    const sortedData = [...BookList].sort(
      (a: any, b: any) => a.discountPrice - b.discountPrice
    );
    dispatch(addItemsToBook(sortedData));
  };
  const SortPriceHignToLow = () => {
    const sortedData = [...BookList].sort(
      (a: any, b: any) => b.discountPrice - a.discountPrice
    );
    dispatch(addItemsToBook(sortedData));
  };
  const newArrivals = () => {
    const sortedData = [...BookList].sort(
      (a: any, b: any) =>
        Date.parse(b.discountPrice) - Date.parse(a.discountPrice)
    );
    dispatch(addItemsToBook(sortedData));
  };

  const [sortOption, setSortOption] = useState("");

  return (
    <>
      <div className="flex w-[80%] mt-[22px] mb-[22px] ml-[160px] font-bold text-xl">
        <p>
          Books{" "}
          <span style={{ fontSize: "10px", fontWeight: "normal" }}>
            (128 items)
          </span>
        </p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value as string)}
          style={{
            width: "180px",
            left: "738px",
            height: "25px",
            fontSize: "12px",
          }}
        >
          <MenuItem value={"Sort by relevance"}>Sort by relevance</MenuItem>
          <MenuItem value={"LowToHign"} onClick={SortPriceLowToHigh}>
            Price: Low to High
          </MenuItem>
          <MenuItem value={"HighToLow"} onClick={SortPriceHignToLow}>
            Price: Hign to Low
          </MenuItem>
          <MenuItem value={"newArrivals"} onClick={newArrivals}>
            Newest Arrivals
          </MenuItem>
        </Select>
      </div>

      {pageLoad ? (
        <div className="flex justify-center mt-[50px] mb-[50px]">
          <CircularProgress />
        </div>
      ) : (
        <div className="flex w-[81%] ml-[160px] grid grid-cols-4 mb-[100px]">
          {BookList.map((book: Book, index: number) => (
            <BookCardComponent key={index} book={book} />
          ))}
        </div>
      )}
    </>
  );
}

export default BooksContainerComponent;
