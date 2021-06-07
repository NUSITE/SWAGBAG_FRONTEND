/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import httpAxios from "../../axios.intercepors";
import { setLoader } from "../../Redux/Actions/LoaderAction";
import { setProducts } from "../../Redux/Actions/ProductsActions";
import { Table, Button } from "semantic-ui-react";
import "./Home.css";
import Products from "../Products/Products";


const Home = () => {
  //Dispatch
  let dispatch = useDispatch();

  const products = useSelector((state) => state.fetchedProducts.products);

  const fetchProducts = async () => {
    if (localStorage.getItem("token")) {
      dispatch(setLoader(true));

      await httpAxios
        .get("/api/product/getProducts")
        .then((response) => {
          dispatch(setProducts(response.data.products));
          console.log("Response", response);
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
    console.log("Products", products);
  }, []);

  return (
    <div>
      {products && (
        <Products />
      )}
    </div>
  );
};

export default Home;
