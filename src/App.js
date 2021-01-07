import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { findAllByTitle } from '@testing-library/react';

function App() {

  // let items;
  // useEffect(()=> {
  //   request().catch(console.error)
  // })

  // const request = async () => {
  //   await axios.get('http://localhost:5000/get-items').then(data => {
  //     items = data.data
  //   }) 
  // }

  const items = [
    {
        'title': 'Denim Jeans',
        'price': 29.99,
        'image': "https://www.blackdiamondequipment.com/on/demandware.static/-/Sites-bdel/default/dw0f24a23b/products/S19_Product_Images/S19_Apparel/750020_4010_FORGEDDENIM_MFORGEDDENIMPANTS.jpg",
        'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget."
    },
    {
        'title': 'Polo shirt',
        'price': 19.99,
        'image': "https://www.prada.com/content/dam/pradanux_products/U/UJN/UJN444/1C61F0ZON/UJN444_1C61_F0ZON_S_181_SLF.png",
        'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget."
    },
    {
      'title': 'Polo shirt',
      'price': 19.99,
      'image': "https://www.prada.com/content/dam/pradanux_products/U/UJN/UJN444/1C61F0ZON/UJN444_1C61_F0ZON_S_181_SLF.png",
      'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget."
  },
  {
    'title': 'Polo shirt',
    'price': 19.99,
    'image': "https://www.prada.com/content/dam/pradanux_products/U/UJN/UJN444/1C61F0ZON/UJN444_1C61_F0ZON_S_181_SLF.png",
    'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget."
}
]


  return (
    <div className="App">
      <h1>Commercify</h1>
      <div class="container">
        <div class="row">
      {items.map(item => (
        <div class="col-4 item-container">
        <h3>{item.title}</h3>
        <p> {item.description}</p>
        <img src={item.image} style={{maxWidth: "150px"}}></img>
        </div>
      ))}
      </div>
      </div>
    </div>
  );
}



export default App;
