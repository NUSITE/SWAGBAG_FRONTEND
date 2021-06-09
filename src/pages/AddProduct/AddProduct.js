import React, { useState } from "react";
import httpAxios from "../../axios.intercepors";
import { Form, Header, Label } from "semantic-ui-react";
import "./AddProduct.css";

const AddProduct = () => {
  const [productTitle, setProductTitle] = useState("");
  const [upc, setUPC] = useState();
  const [unitCost, setUnitCost] = useState();
  let [productCountries, setProductCountries] = useState([]);
  let [productFormats, setProductFormats] = useState([]);

  const addProduct = async () => {
    console.log(JSON.parse(localStorage.getItem("user"))._id);
    await httpAxios.post("/api/product/addProduct", {
      productTitle, upc: Number(upc), unitCost: Number(unitCost), productCountries, productFormats, creator: JSON.parse(localStorage.getItem("user"))._id
    }).then(response => {
      console.log("Response", response);
    }).catch(error => {
      console.log("Error", error);
    })
  };

  const setProductCountriesContent = (e, { checked }) => {
    if (checked) {
      productCountries = [...productCountries, e.target.innerText];
      setProductCountries(productCountries);
    } else {
      productCountries = productCountries.filter(
        (elem) => elem !== e.target.innerText
      );
      setProductCountries(productCountries);
    }
  };

  const setProductFormatContent = (e, { checked }) => {
    if (checked) {
      productFormats = [...productFormats, e.target.innerText];
      setProductFormats(productFormats);
    } else {
      productFormats = productFormats.filter(
        (elem) => elem !== e.target.innerText
      );
      setProductFormats(productFormats);
    }
    console.log(productFormats);
  };

  return (
    <div className="p-4">
      <Header className="text-center p-4">Add Product</Header>
      <div className="add__product__content">
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              label="Product Title"
              placeholder="Batman"
              type="text"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
            ></Form.Input>
            <Form.Input
              label="UPC"
              placeholder="123555"
              type="number"
              value={upc}
              onChange={(e) => setUPC(e.target.value)}
            ></Form.Input>
            <Form.Input
              label="Unit Cost"
              placeholder="$ 2.03"
              value={unitCost}
              onChange={(e) => setUnitCost(e.target.value)}
            ></Form.Input>
          </Form.Group>
          <Form.Group inline>
            <Label className="plain__label">Countries Releasing</Label>
            <Form.Checkbox
              className="checkbox__content"
              label="Mexico"
              onChange={setProductCountriesContent}
            ></Form.Checkbox>
            <Form.Checkbox
              className="checkbox__content"
              label="Canada"
              onChange={setProductCountriesContent}
            ></Form.Checkbox>
            <Form.Checkbox
              className="checkbox__content"
              label="United States"
              onChange={setProductCountriesContent}
            ></Form.Checkbox>
          </Form.Group>
          <Form.Group inline>
            <Label className="plain__label">Formats Releasing</Label>
            <Form.Checkbox
              className="checkbox__content"
              label="Game  "
              onChange={setProductFormatContent}
            ></Form.Checkbox>
            <Form.Checkbox
              className="checkbox__content"
              label="Movie"
              onChange={setProductFormatContent}
            ></Form.Checkbox>
          </Form.Group>
          <Form.Button primary type="submit" onClick={addProduct}>
            Add product
          </Form.Button>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;
