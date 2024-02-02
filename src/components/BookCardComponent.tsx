import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import Img1 from '../assets/Books/Image 10.png'
import Img2 from '../assets/Books/Image 11.png';
import Img3 from '../assets/Books/Image 12.png';
import Img4 from '../assets/Books/Image 13.png';
import Img5 from '../assets/Books/Image 12@2x.png';
import Img6 from '../assets/Books/Image 13@2x.png';
import Img7 from '../assets/Books/Image 14.png';
import Img8 from '../assets/Books/Image 18.png';
import Img9 from '../assets/Books/Image 22.png';
import Img10 from '../assets/Books/Image 22@2x.png'
import Img11 from '../assets/Books/Image 23.png'
import Img12 from '../assets/Books/Image 36.png'
import Img13 from '../assets/Books/Image 8.png'
import { Link } from 'react-router-dom';


interface Book {
  description: string;
  bookName: string;
  title: string;
  author: string;
  quantity: number;
  rating: number;
  discountPrice: number;
  price: number;
  _id:string
}

interface BookCardProps {
  book: Book;
}

const ImageList = [
    Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,Img11,Img12,Img13
  ]

  
const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * ImageList.length);
    return ImageList[randomIndex];
  };

const BookCardComponent = ({ book } : BookCardProps ) => (   

  <Link to={`${book._id}`} className='flex flex-col w-[78%] mb-[30px] h-[265px] items-center rounded-md' style={{ backgroundColor: '#E2E2E2', border: '#E2E2E2' }}>
    <img src={getRandomImage()} alt={`Book cover for ${book.description}`} className='w-[50%] h-[135px] mt-[15px]' />
    <div className='flex w-[98%] h-[102px] mt-[10px] rounded-md text-sm font-medium' style={{ backgroundColor: '#FFFFFF' }}>
      <div className='flex flex-col mt-[5px] ml-[10px]'>
        <p>{book.bookName}</p>
        <p style={{ fontSize: '10px', color: '#878787' }}>{`by ${book.author} (${book.quantity})`}</p>
        <div className='flex w-[35px] h-[18px] text-white' style={{ fontSize: '10px', backgroundColor: 'green' }}>
          <p className='ml-[5px]'>4.5</p>
          <StarRateIcon style={{ fontSize: '10px', fontWeight: 'bold', marginLeft: '3px', marginTop:'5px', alignItems: 'center' }} />
        </div>
        <div className='flex flex-row font-xs mt-[5px]'>
          <p>Rs.{book.discountPrice} <span style={{ color: '#878787', fontSize: '10px', textDecoration:'line-through' }}>Rs. {book.price}</span></p>
        </div>
      </div>
    </div>
    </Link> 
 
);

export default BookCardComponent;
