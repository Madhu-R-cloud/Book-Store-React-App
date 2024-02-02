import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Badge, Accordion, Fade, AccordionSlots, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Assuming you have the Material-UI icons installed
import HeaderComponent from './HeaderComponent';
import CartBookCard from "./CartBookCardComponent";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CartComponent = () => {
  const cartItems = useSelector((store: any) => store.cart.cartItems);
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
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
            {/* <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon />
            </Badge> */}
            My cart ({cartItems?.length})
          </div>
          <div className="flex flex-col gap-2 p-5">
            {cartItems.length ? cartItems.map((book: any, index: number) => (
              <CartBookCard key={index} index={index} book={book} />
            )) : <center><h1 className="text-xl">Your Cart is Empty</h1></center>}
            <div className={cartItems.length? "flex justify-end" : "hidden"}>
              <Button variant="contained" sx={{ backgroundColor: "#3371B5",marginTop:'20px'}}>Place order</Button>
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
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
