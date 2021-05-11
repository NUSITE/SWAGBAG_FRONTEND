import axios from "axios";
import React from "react";
import { Input, Label, Button, Header } from "semantic-ui-react";

const AddProduct = () => {
  const product = {
    productTitle: null,
    currency: "USD",
    unitCost: null,
    upc: null,
    productFormats: [],
    productCountries: [],
    creator: "608d4e60e90fc20004e4fe58",
  };

  function checkboxChanged(event, property, propertyName) {
    if (event.target.checked) {
      product[property].push(propertyName);
    } else {
      product[property].forEach((item, index) => {
        if (item === propertyName) {
          product[property].splice(index, 1);
        }
      });
    }
    console.log("Product", product, event);
  }

  function textValueChange(event, property) {
    product[property] = event.target.value;
    console.log("Product", product);
  }

  const productAddition = async (event) => {
    let response = await axios
      .post(
        "https://swagbag-node-app.herokuapp.com/api/product/addProduct",
        product
      )
      .catch((error) => console.error(error));
    console.log("Response", response);
  };

  return (
    <div className="products__container m-4 d-flex flex-column text-center">
      <Header size="huge" className="text-center">
        Add Product
      </Header>
      <div className="add__product__components">
        <Input className="mt-2 w-25"
          type="text"
          placeholder="Product Title"
          value={product.productTitle}
          onChange={(event) => textValueChange(event, "productTitle")}
        />
      </div>
      <div className="add__product__components">
        <Input className="mt-2 w-25"
          type="text"
          placeholder="currency"
          value={product.currency}
          disabled
        />
      </div>
      <div className="add__product__components">
        <Input  className="mt-2 w-25"
          type="number"
          placeholder="Unit Cost"
          value={product.unitCost}
          onChange={(event) => textValueChange(event, "unitCost")}
        />
      </div>
      <div className="add__product__components">
        <Input className="mt-2 w-25"
          type="number"
          placeholder="UPC"
          value={product.upc}
          onChange={(event) => textValueChange(event, "upc")}
        />
      </div>
      <div  className="mt-2">
        <Label className="w-25">Formats</Label>
        <div>
          <input
            type="checkbox"
            placeholder="Game"
            onChange={(event) =>
              checkboxChanged(event, "productFormats", "Game")
            }
          ></input>{" "}
          <label>Game</label>
        </div>
        <div>
          <input
            type="checkbox"
            placeholder="Movie"
            onChange={(event) =>
              checkboxChanged(event, "productFormats", "Movie")
            }
          ></input>{" "}
          <label>Movie</label>
        </div>
      </div>
      <div className="add__product__components">
        <Label className="w-25">Countries</Label>
        <div>
          <input
            type="checkbox"
            placeholder="United States"
            onChange={(event) =>
              checkboxChanged(event, "productCountries", "United States")
            }
          ></input>{" "}
          <label>United States</label>
        </div>
        <div>
          <input
            type="checkbox"
            placeholder="Mexico"
            onChange={(event) =>
              checkboxChanged(event, "productCountries", "Mexico")
            }
          ></input>{" "}
          <label>Mexico</label>
        </div>
        <div>
          <input
            type="checkbox"
            placeholder="Canada"
            onChange={(event) =>
              checkboxChanged(event, "productCountries", "Canada")
            }
          ></input>{" "}
          <label>Canada</label>
        </div>
      </div>
      <div>
        <Button primary onClick={productAddition}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddProduct;
