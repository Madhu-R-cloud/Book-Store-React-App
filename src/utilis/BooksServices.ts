import React from "react";
import axios from "axios";

const BaseURL = "https://bookstore.incubation.bridgelabz.com/bookstore_user/";

const configForAddNotes = {
  headers: {
    "Content-Type": "multipart/form-data",
    "x-access-token": localStorage.getItem("accessToken"),
  },
};

const configForBooks = () => {
  const accessToken = localStorage.getItem("accessToken");
  const header = {
    headers: {
      "Content-Type": "application/json",
      "X-Access-Token": accessToken,
    },
  };
  return header;
};

const configForGetNotes = {
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("accessToken"),
  },
};

export const getBookDetails = async () => {
  const response = await axios(`${BaseURL}get/book`, configForAddNotes);
  // console.log(response.data.result);
  return response.data.result;
};

export const addToCart = async (bookId: string) => {
  const res = await axios.post(
    `${BaseURL}add_cart_item/${bookId}`,
    {},
    configForAddNotes
  );
  return res.data.result;
};

export const getCartsDetails = async () => {
  const response = await axios(`${BaseURL}get_cart_items`, configForAddNotes);
  return response.data.result;
};

export async function updateCartQty(productId: string, quantity: any) {
  console.log(productId);

  const res = await axios.put(
    `${BaseURL}cart_item_quantity/${productId}`,
    { quantityToBuy: quantity },
    configForBooks()
  );
  // console.log(res);
}

export async function removeCartItem(productId: string) {
  await axios.delete(
    `${BaseURL}remove_cart_item/${productId}`,
    configForAddNotes
  );
}

export async function addWishList(productId: string) {
  await axios.post(
    `${BaseURL}add_wish_list/${productId}`,
    {},
    configForAddNotes
  );
}

export async function getWishlistItems() {
  let data: any;
  await axios
    .get(`${BaseURL}get_wishlist_items`, configForAddNotes)
    .then((res) => {
      data = res.data.result;
    });
  return data;
}
export async function removeWishlistItem(productId: string) {
  await axios.delete(
    `${BaseURL}remove_wishlist_item/${productId}`,
    configForBooks()
  );
}

export async function editUserAddress(address: any) {
  let data: any;
  await axios
    .put(`${BaseURL}edit_user`, address, configForBooks())
    .then((res) => {
      data = res.data.result;
    });
  return data;
}

export async function addOrder(order: any) {
  let data: any;
  console.log(order);
try{

    await axios
      .post(`${BaseURL}add/order`, { orders: order }, configForBooks())
      .then((res) => {
        data = res.data.result;
      });
    return data;
}catch(err){
    console.log(err);

    
}
}

export async function bookFeedback(productId:string,rating:number,comment:string){
  await axios.post(`${BaseURL}add/feedback/${productId}`,{
      "comment": comment,
      "rating": rating
    },configForBooks())
  }

export async function getFeedback(productId:string){
  let data:any
  await axios.get(`${BaseURL}get/feedback/${productId}`,configForBooks()).then(res=>{
      data = res.data.result
  })
  return data
  }

