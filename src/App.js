import {
  Switch,
  BrowserRouter as Router,
  Redirect,
  Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./shared/components/navbar/navbar";
import Sidebar from "./shared/components/sidebar/sidebar";
import Register from "./users/pages/Register/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <div>Welcome to application</div>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
