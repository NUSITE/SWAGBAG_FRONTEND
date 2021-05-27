import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {!token ? (
          <Redirect to="/login"></Redirect>
        ) : (
          <Route path="/">
            <div>Found Token</div>
          </Route>
        )}
      </Switch>
    </Router>
  );
}

export default App;
