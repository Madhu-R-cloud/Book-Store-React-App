import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Accordion, Fade, AccordionSlots, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import CartBookCard from "./CartBookCardComponent";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CartComponent = () => {
  const cartItems = useSelector((store: any) => store.cart.cartItems);

  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);


  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const handleExpansion2 = () => {
    setExpanded2((prevExpanded) => prevExpanded);
  };
  return (
    <div className="w-full h-full flex justify-center mb-[20px]">
      <div className="w-[80%] font-[Roboto]">
        <div className="mt-[20px]">
          <Link to={'/book'} className="text-[#9D9D9D]">Home /</Link>
          <span>My Cart</span>
        </div>
        <div className="w-[80%] mt-5 min-h-[250px] border-[#707070] border">
          <div className="text-lg font-semibold p-3" style={{backgroundColor:'#E5E5E5'}}>
      
            My cart ({cartItems?.length})
          </div>
          <div className="flex flex-col gap-2 p-5">
            {cartItems.length ? cartItems.map((book: any, index: number) => (
              <CartBookCard key={index} index={index} book={book} />
            )) : <center><h1 className="text-xl">Your Cart is Empty</h1></center>}
            <div className={cartItems.length? "flex justify-end" : "hidden"}>
              <Button onClick={handleExpansion} variant="contained" sx={{ backgroundColor: "#3371B5",marginTop:'20px'}}>Place order</Button>
            </div>
          </div>
        </div>
        <div className='flex flex-col mt-[20px] gap-4 w-[80%]'>
        <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade as AccordionSlots['transition'] }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Address Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
  {!cartItems[0] ? (
    <div className="flex justify-end">
      <Button variant="outlined" sx={{color:"#A03037",borderColor:"#A03037"}}>Add New Address</Button>
    </div>
  ) : (
    <div className="flex flex-col w-[100%] justify-between">
      <div className="flex w-[100%] h-[3%] justify-end">
      <Button variant="outlined" sx={{color:"#A03037",borderColor:"#A03037"}}>Add New Address</Button>
    </div>
      <div className="flex justify-between flex-row w-[80%] mt-[20px]">
        <label>Full Name</label>
        <span className="px-5 py-2 w-[30%] h-[45px] border-2">{cartItems[0]?.user_id?.fullName}</span>
      {/* </div>
      <div className="flex w-[48%] w-[70%] flex"> */}
        <label>Mobile Number</label>
        <span className="px-5 py-2 w-[30%] h-[45px] border-2">{cartItems[0]?.user_id?.phone}</span>
      </div>
    </div>
  )}

  {cartItems[0] && (
    <>
      {cartItems[0].user_id?.address.map((useraddress: any, index: number) => (
        <div key={index}>
          <div className="py-5">
            <input type="radio" defaultChecked /> {index + 1}. {useraddress?.addressType}
          </div>
          <div className="w-[80%] flex flex-col gap-5">
            <span>Address</span>
            <div className="px-5 py-2 min-h-[80px] border-2">{useraddress?.fullAddress}</div>
            <div className="flex justify-between">
              <div className="w-[48%] flex flex-col">
                <label>City/Town</label>
                <span className="px-5 py-2 h-[45px] border-2">{useraddress?.city}</span>
              </div>
              <div className="w-[48%] flex flex-col">
                <label>State</label>
                <span className="px-5 py-2 h-[45px] border-2">{useraddress?.state}</span>
              </div>
            </div>
          </div>
          <div className='flex w-[80%] justify-end'>
          <Button onClick={() => { handleExpansion2(); }} variant="contained" 
          sx={{ display: 'flex', backgroundColor: "#3371B5", marginTop: '20px', justifyContent: 'flex-end' }}>Continue
          </Button>
        </div>
        {/* <div className={!expanded2 ? "flex justify-end" : "hidden"}>
    <Button variant="contained" sx={{ width: "160px", backgroundColor: "#3371B5" }} >
      Continue
    </Button> */}
  </div>
        // </div>
      ))}
    </>
  )}
  

  
  {/* </div> */}
</AccordionDetails>;

      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"

        >
          <Typography>Order summery</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      </div>
         </div>
    
  );
};

export default CartComponent;
