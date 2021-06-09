/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import httpAxios from "../../axios.intercepors";
import { setLoader } from "../../Redux/Actions/LoaderAction";
import { setProducts } from "../../Redux/Actions/ProductsActions";
import "./Home.css";
import Products from "../Products/Products";
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router";


const Home = () => {
  //Dispatch
  let dispatch = useDispatch();
  const history = useHistory();

  const products = useSelector((state) => state.fetchedProducts.products);

  const fetchProducts = async () => {
    if (localStorage.getItem("token")) {
      dispatch(setLoader(true));

      await httpAxios
        .get("/api/product/getProducts")
        .then((response) => {
          dispatch(setProducts(response.data.products));
        })
        .catch((error) => {
          console.log("Error", error);
        });

      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchProducts();
    }
  }, []);

  const addProduct = () => {
    history.push("/addproduct")
  }

  return (
    <div>
      <div className="text-right p-3">
        <Button onClick={addProduct}>
          Add Product
        </Button>
      </div>
      {products && (
        <Products />
      )}
    </div>
  );
};

export default Home;
