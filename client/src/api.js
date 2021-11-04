import React from "react";
import logo from "./logo.svg";
import "./App.css";

const API_KEY = process.env.REACT_APP_RAPID_API_KEY
export default {

getData: () =>
axios({
  method: 'GET',
  url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
  params: {limit: '50'},
  headers: {
    'x-rapidapi-key':  process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com'
  }

}),

getDataId: (id) => 
  axios({
    method: 'GET',
  url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers/' + id,
  headers: {
    'x-rapidapi-key':  process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com'
  }
  }),

  getBrand: () =>
    axios({
      method: 'GET',
      url: 'https://v1-sneakers.p.rapidapi.com/v1/brands',
      headers: {
        'x-rapidapi-key':  process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com'
      }
    })
  


}