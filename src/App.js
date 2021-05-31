import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./Login/Login";
import { setAuthorization } from "./Redux/Actions/userLoginActions";
import SwagHeader from "./shared/components/SwagHeader/SwagHeader";
import SwagSidebar from "./shared/components/SwagSidebar/SwagSidebar";
import { Dimmer, Loader } from "semantic-ui-react";
import { setLoader } from "./Redux/Actions/loaderActions";
import { useEffect } from "react";

const token = localStorage.getItem("token");
const http = axios.create({
  baseURL: "https://swagbag-node-app.herokuapp.com/api",
  headers: {
    "x-access-token": `${token}`,
  },
});

function App() {
  const token = localStorage.getItem("token");
  console.log("Token", token);
  const dispatch = useDispatch();
  let isAuth = useSelector((state) => state.authorization.isAuth);
  let isLoading = useSelector((state) => state.loader.isLoading);

  useEffect(() => {
    verifyToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const verifyToken = async () => {
    if (token) {
      dispatch(setLoader(true));
      await http
        .get("/verifyToken")
        .then((response) => {
          if (response.data.isAuth) {
            dispatch(setAuthorization("on"));
          }
        })
        .catch((error) => {
          dispatch(setAuthorization("off"));
        });
      dispatch(setLoader(false));
    }
  };

  return (
    <Router>
      <Switch>
        {isAuth === "off" && (
          <Route path="/login">
            <Login />
          </Route>
        )}
        {isAuth === "off" && <Redirect to="/login"></Redirect>}
        {isAuth === "on" && (
          <div className="d-flex">
            <SwagSidebar />
            <SwagHeader />
            <div className="main__content">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Redirect to="/"></Redirect>
            </Switch>
            </div>
          </div>
        )}
      </Switch>
      {isLoading && (
        <Dimmer active>
          <Loader size="huge">Loading</Loader>
        </Dimmer>
      )}
    </Router>
  );
}

export default App;
