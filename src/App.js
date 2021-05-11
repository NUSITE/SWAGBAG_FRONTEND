import {
  Switch,
  BrowserRouter as Router,
  Redirect,
  Route,
} from "react-router-dom";
import "./App.css";
import AddProduct from "./products/pages/Add-Product/AddProduct";
import Products from "./products/pages/Product-lists/Products";
import Navbar from "./shared/components/navbar/navbar";
import Sidebar from "./shared/components/sidebar/sidebar";
import Register from "./users/pages/Register/Register";
import Users from "./users/pages/users/users";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Products />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/addProduct" exact>
            <AddProduct />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
