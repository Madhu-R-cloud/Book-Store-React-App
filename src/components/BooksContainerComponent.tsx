import React, { useEffect, useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ReactBookImg from '../assets/Image 36.png';
import Button from '@mui/material/Button';
import StarRateIcon from '@mui/icons-material/StarRate';
import { getBookDetails } from '../utilis/BooksServices';
import { log } from 'console';

interface Book {
  description:string,
  bookName:string,
  title: string;
  author: string;
  quantity: number;
  rating: number;
  discountPrice: number;
  price: number;
}


function BooksContainerComponent() {
  const [notesData, setNotesData] = useState<Book[]>([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      const res = await getBookDetails();
      setNotesData(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className='flex w-[80%] mt-[22px] mb-[22px] ml-[160px] font-bold text-xl'>
        <p>
          Books <span style={{ fontSize: '10px', fontWeight: 'normal' }}>(128 items)</span>
        </p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size='small'
          style={{ width: '180px', left: '738px', height: '25px', fontSize: '12px' }}
        >
          <MenuItem value="0">Sort by relevance</MenuItem>
        </Select>
      </div>

      <div className="flex w-[81%] ml-[150px] grid grid-cols-4 mb-[100px]">
        {notesData.map((book, index) => (
          <div key={index} className='flex flex-col w-[78%] mb-[30px] h-[265px] items-center rounded-md' style={{ backgroundColor: '#E2E2E2', border: '#E2E2E2' }}>
            <img src={ReactBookImg} alt={`Book cover for ${book.description}`} className='w-[50%] h-[135px] mt-[15px]' />

            <div className='flex w-[98%] h-[102px] mt-[10px] rounded-md text-sm font-medium' style={{ backgroundColor: '#FFFFFF' }}>
              <div className='flex flex-col mt-[5px] ml-[10px]'>
                <p>{book.bookName}</p>
                <p style={{ fontSize: '10px', color: '#878787' }}>{`by ${book.author} (${book.quantity})`}</p>
                <Button variant="contained" className='flex w-[10px] h-[16px] ml-[20px] mt-[5px]' style={{ fontSize: '10px', backgroundColor: 'green' }}>
                  4.5
                  <StarRateIcon style={{ fontSize: '10px', fontWeight: 'bold', marginLeft: '3px', alignItems: 'center' }} />
                </Button>
                <div className='flex flex-row font-xs mt-[5px]'>
                  <p>{`Rs. ${book.discountPrice}`} <span style={{ color: '#878787', fontSize: '10px' }}>{`Rs. ${book.price}`}</span></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BooksContainerComponent;
