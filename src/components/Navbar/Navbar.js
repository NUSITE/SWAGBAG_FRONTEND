import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Menu, Search } from "semantic-ui-react";
import {
  setLoader,
  setOpenOrCloseSidebar,
} from "../../Redux/Actions/LoaderAction";
import "./Navbar.css";
import httpAxios from "./../../axios.intercepors";
import { setSearchedProducts } from "../../Redux/Actions/ProductsActions";

const Navbar = () => {
  let dispatch = useDispatch();
  let searchedProducts = useSelector(
    (state) => state.searchedProducts.products
  );
  let [country, setCountry] = useState("");
  let [format, setFormat] = useState();
  let showSidebar = useSelector((state) => state.sidebar.showSidebar);
  const handleSearchChange = async (e, { value }) => {
    // dispatch(setLoader(true));
    if (format && country) {
      await httpAxios
        .get(
          `/api/product/searchProduct/productTitle/${format}/${country}/${value}`
        )
        .then((response) => {
          console.log(response);
          response.data.products.forEach((product) => {
            product.title = product.productTitle;
          });
          dispatch(setSearchedProducts(response.data.products));
        })
        .catch((error) => {});
    }
  };
  let countryOptions = [
    {
      key: 1,
      text: "United States",
      value: "United States",
    },
    {
      key: 2,
      text: "Mexico",
      value: "Mexico",
    },
    {
      key: 3,
      text: "Canada",
      value: "Canada",
    },
  ];

  let formatOptions = [
    {
      key: 12,
      text: "Game",
      value: "Game",
    },
    {
      key: 23,
      text: "Movie",
      value: "Movie",
    },
  ];

  const openOrCloseSidebar = () => {
    dispatch(setOpenOrCloseSidebar(!showSidebar));
  };

  return (
    <Menu inverted className="navbar__content">
      <div className="d-flex navbar__items">
        <Menu.Item
          className="sidebar__icon"
          icon="sidebar"
          onClick={(e) => openOrCloseSidebar()}
        />
        <Menu.Item>
          <div className="d-flex">
            <Dropdown
              className="country__dropdown"
              placeholder="Country"
              fluid
              search
              selection
              value={country}
              options={countryOptions}
              onChange={(e) => setCountry(e.target.innerText)}
            ></Dropdown>
            <Dropdown
              className="country__dropdown"
              placeholder="Format"
              fluid
              search
              selection
              value={format}
              options={formatOptions}
              onChange={(e) => setFormat(e.target.innerText)}
            ></Dropdown>
            <Search
              results={searchedProducts}
              placeholder="Search product name"
              onSearchChange={handleSearchChange}
            ></Search>
          </div>
        </Menu.Item>
        <Menu.Item icon="shopping cart">
          
        </Menu.Item>
      </div>
    </Menu>
  );
};

export default Navbar;
