/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, Button, Dimmer, Loader } from "semantic-ui-react";
import jwt from "jsonwebtoken";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import {
  clearStore,
  setAccessToken,
  setAuthorization,
  setuserLoggedIn,
} from "./Redux/Actions/loginActions";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home/Home";
import AddProduct from "./pages/AddProduct/AddProduct";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";
const App = () => {
  const dispatch = useDispatch();
  let isLoading = useSelector((state) => state.loader.isLoading);
  let user = useSelector((state) => state.loggedInUser.user);
  let isAuth = useSelector((state) => state.authorization.isAuth);
  let [showModal, setShowModal] = useState(false);
  let showSidebar = useSelector((state) => state.sidebar.showSidebar);
  let token = localStorage.getItem("token");
  useEffect(() => {
    // eslint-disable-next-line no-cond-assign
    if ((user = {} && localStorage.getItem("user"))) {
      dispatch(setuserLoggedIn(JSON.parse(localStorage.getItem("user"))));
    }
    verifyToken();
  }, []);

  const verifyToken = () => {
    token = localStorage.getItem("token");
    if (token !== "null") {
      jwt.verify(token, "bearer", (error, decoded) => {
        if (error) {
          dispatch(clearStore());
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setShowModal(false);
        } else {
          dispatch(setAccessToken(token));
          dispatch(setAuthorization(true));
          if (Date.now() >= decoded.exp * 1000 - 60000) {
            setShowModal(true);
          }
        }
      });
    }
  };

  const staySession = async () => {
    await axios
      .get(`http://localhost:3200/user/regenerateToken/${user._id}`)
      .then((response) => {
        dispatch(setAccessToken(response.data.token));
        localStorage.setItem("token", response.data.token);
        dispatch(setAuthorization(true));
        setShowModal(false);
      });
  };

  const logoutSession = async () => {
    await axios
      .get(`http://localhost:3200/logout`)
      .then((response) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch(clearStore());
        setShowModal(false);
      })
      .catch((error) => {
        console.log("Error", error.response.data.msg);
      });
  };

  setInterval(() => {
    verifyToken();
  }, 1 * 1000 * 60);

  return (
    <BrowserRouter>
      <Switch>
        {!isAuth && (
          <div>
            <Route path="/login">
              <Login />
            </Route>
            <Redirect to="/login"></Redirect>
          </div>
        )}
        {isAuth && (
          <div>
            <Navbar />
            {showSidebar && <SideBar />}
            <div>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/addproduct" exact>
                <AddProduct />
              </Route>
              <Redirect to="/"></Redirect>
            </div>
          </div>
        )}
      </Switch>
      <Modal className="session__close__modal" size="large" open={showModal}>
        <Modal.Header>Log out</Modal.Header>
        <Modal.Content>
          <p>
            Your Session is about expire!!! Please confirm if you want to stay
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={logoutSession}>
            Logout
          </Button>
          <Button positive onClick={staySession}>
            Stay
          </Button>
        </Modal.Actions>
      </Modal>
      {isLoading && (
        <Dimmer active>
          <Loader size="huge">Loading</Loader>
        </Dimmer>
      )}
    </BrowserRouter>
  );
};

export default App;
