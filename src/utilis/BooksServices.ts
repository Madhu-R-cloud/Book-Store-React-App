import React from "react"
import axios from "axios"

const BaseURL = 'https://bookstore.incubation.bridgelabz.com/bookstore_user/'

const configForAddNotes = {
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("accessToken")
    }
}

const configForGetNotes = {
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("accessToken")
    }
}

 export const getBookDetails = async () => {
    const response = await axios(`${BaseURL}get/book`, configForAddNotes)
    // console.log(response.data.result);
    return response.data.result;
    
    
}
