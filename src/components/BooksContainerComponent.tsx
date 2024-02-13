import React, { useEffect, useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { CircularProgress, Pagination, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToBook } from "../utilis/store/BookSlice";
import BookCardComponent from "./BookCardComponent";

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

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = BookList.length;
  // console.log('totalItems',totalItems);
  
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedBooks = BookList.slice(startIndex, endIndex);
  const [sortOption, setSortOption] = useState("");

  return (
    <>
      <div className="flex w-[80%] mt-[22px] mb-[22px] ml-[160px] font-bold text-xl">
        <p>
          Books{" "}
          <span style={{ fontSize: "10px", fontWeight: "normal" }}>
            ({BookList.length} Items)
          </span>
        </p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          // value={sortOption}
          defaultValue="Sort by relevance"
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
          {displayedBooks.map((book: Book, index: number) => (
            <BookCardComponent key={index} book={book} />
          ))}
        </div>
      )}
         <div className="flex justify-center mb-[15px] mt-4" >
         <Stack spacing={2}>
           <Pagination
             count={totalPages}
             page={currentPage}
             onChange={handlePageChange}
             variant="outlined"
             shape="rounded"
             color="secondary"
             
           />
         </Stack>
       </div>
    </>
  );
}

export default BooksContainerComponent;
