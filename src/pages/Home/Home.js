/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import httpAxios from "../../axios.intercepors";
import { setLoader } from "../../Redux/Actions/LoaderAction";
import { setProducts } from "../../Redux/Actions/ProductsActions";
import { Table, Button } from "semantic-ui-react";
import "./Home.css";


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

  const deleteProduct = async (id) => {
    dispatch(setLoader(true));
    await httpAxios.get(`/api/product/deleteProduct/${id}`).then((response) => {
      dispatch(setProducts(response.data.products));
    }).catch((error) => {

    })
    dispatch(setLoader(false));
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchProducts();
    }
    console.log("Products", products);
  }, []);

  return (
    <div>
      {products && (
        <Table basic="very" className="p-4">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className="table__cell">S.NO</Table.HeaderCell>
              <Table.HeaderCell className="table__cell">Product Title</Table.HeaderCell>
              <Table.HeaderCell className="table__cell">UPC</Table.HeaderCell>
              <Table.HeaderCell className="table__cell">Unit cost</Table.HeaderCell>
              <Table.HeaderCell className="table__cell">Total Orders placed</Table.HeaderCell>
              <Table.HeaderCell className="table__cell"></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              products.map((product, index) => (
                <Table.Row className={index%2 === 0 ? "even__table__row" : "odd__table__cell"}>
                  <Table.Cell className="table__content__cell">{index + 1}</Table.Cell>
                  <Table.Cell className="table__content__cell">{product.productTitle}</Table.Cell>
                  <Table.Cell className="table__content__cell">{product.upc}</Table.Cell>
                  <Table.Cell className="table__content__cell">{`$${product.unitCost}`}</Table.Cell>
                  <Table.Cell className="table__content__cell">{product.totalOrdersPlaced}</Table.Cell>
                  <Table.Cell className="table__cell"><Button negative onClick={e => deleteProduct(product._id)}>Delete</Button></Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table>
      )}
    </div>
  );
};

export default Home;
