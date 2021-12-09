import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/homepage/Home";
import Electronics from "./components/homepage/Electronics";
import Furnitures from "./components/homepage/Furnitures";
import Autoparts from "./components/homepage/Autoparts";
import Garden from "./components/homepage/Garden";
import Fashion from "./components/homepage/Fashion";
import House from "./components/homepage/House";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/retriveelectronics")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });

  const [fposts, setfPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/retrivefurnitures")
      .then((res) => setfPosts(res.data))
      .catch((error) => console.log(error));
  });

  const [Aposts, setAPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/retriveAutoparts")
      .then((res) => setAPosts(res.data))
      .catch((error) => console.log(error));
  });

  const [Gposts, setGPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/retriveGarden")
      .then((res) => setGPosts(res.data))
      .catch((error) => console.log(error));
  });

  const [Sposts, setSPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/retriveFashion")
      .then((res) => setSPosts(res.data))
      .catch((error) => console.log(error));
  });

  const [Hposts, setHPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/retriveHouse")
      .then((res) => setHPosts(res.data))
      .catch((error) => console.log(error));
  });

  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user && user._id ? (
              <Home setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/Categories">
            <Home />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route
            path="/electronics"
            render={() => <Electronics posts={posts} />}
          ></Route>
          <Route
            path="/furnitures"
            render={() => <Furnitures fposts={fposts} />}
          ></Route>
          <Route
            path="/autoparts"
            render={() => <Autoparts Aposts={Aposts} />}
          ></Route>
          <Route
            path="/garden"
            render={() => <Garden Gposts={Gposts} />}
          ></Route>
          <Route
            path="/fashion"
            render={() => <Fashion Sposts={Sposts} />}
          ></Route>
          <Route path="/house" render={() => <House Hposts={Hposts} />}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
