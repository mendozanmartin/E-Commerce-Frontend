import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  let [events, setEvents] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      await axios({
        method: "GET",
        url: "http://localhost:5000/events",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => {
          setEvents(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getItems();
  }, [events, setEvents]);

  return (
    <div className="App">
      <h1>MFC Admin Portal</h1>
      <div className="container">
        <div className="row">
          {events.map((item, i) => (
            <div className="col-4" key={i}>
              <div className="item-container">
                <h3>{item.title}</h3>
                <p> {item.date}</p>
                <p> {item.time}</p>
                <p> {item.venue}</p>
                <p> {item.image}</p>
                <div className="d-flex justify-content-center">
                  <img src={item.image} style={{ maxWidth: "150px" }}></img>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
