import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import { setAuthorization } from "./Redux/Actions/userLoginActions";
const token = localStorage.getItem("token");
const http = axios.create({
  baseURL: "https://swagbag-node-app.herokuapp.com/api",
  headers: {
    "x-access-token": token,
  },
});

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  let isAuth = useSelector((state) => state.authorization.isAuth);

  const verifyToken = async () => {
    if (token) {
      await http
        .get("/verifyToken")
        .then((response) => {
          if (response.data.isAuth) {
            dispatch(setAuthorization(true));
          }
        })
        .catch((error) => {
          dispatch(setAuthorization(false));
        });
    }
  };

  verifyToken();

  return (
    <Router>
      <Switch>
        {!isAuth && (
          <Route path="/login">
            <Login />
          </Route>
        )}
        {!isAuth ? (
          <Redirect to="/login"></Redirect>
        ) : (
          <Switch>
            <Route path="/" exact>
              <div>Found Token</div>
            </Route>
            <Redirect to="/"></Redirect>
          </Switch>
        )}
      </Switch>
    </Router>
  );
}

export default App;
