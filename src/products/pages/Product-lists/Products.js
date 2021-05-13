import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./../../../Redux/Actions/Product-Actions";
import "./Products.css";
import { Table, Button } from "semantic-ui-react";
import { PRODUCT_HEADER } from "../../../AppConstants";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.allProducts.products);
  const productHeader = PRODUCT_HEADER;
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://swagbag-node-app.herokuapp.com/api/product/getProducts")
      .catch((error) => console.log("Error", error));
    dispatch(setProducts(response.data.products));
  };

  return (
    <div className="products__container m-4">
      <div className="text-right">
        <Button primary>
          <Link className="button__list__link text-light" to="/addProduct">
            Add Product
          </Link>
        </Button>
      </div>
      <Table basic="very" className="products__table">
        <Table.Header>
          <Table.Row>
            {productHeader.map((header) => (
              <Table.HeaderCell className="products__cell">
                {header.title}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {products ? (
            products.map((product, index) => (
              <Table.Row
                className={
                  index % 2 === 0
                    ? "table__row__alternate__color table__row__common__changes"
                    : " table__row__common__changes"
                }
              >
                <Table.Cell className="products__cell">{index + 1}</Table.Cell>
                <Table.Cell className="products__cell">
                  {product.productTitle}
                </Table.Cell>
                <Table.Cell className="products__cell">
                  {product.upc}
                </Table.Cell>
                <Table.Cell className="products__cell">
                  ${product.unitCost}
                </Table.Cell>
                <Table.Cell className="products__cell">
                  {product.totalOrdersPlaced}
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell className="products__cell">No Results Found</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Products;
