import React, { useState, useEffect } from "react";
import { productAPI } from "../../api/productAPI";
import PageTemplate from "../PageTemplate";
import LoadingSpinner from "../atoms/LoadingSpinner";
import { colours } from "../constants/colours";

const Shop = () => {
  const [products, setProcsetProducts] = useState([]);
  const [fetchActive, setFetchActive] = useState(false);

  // const onUpdateSearch = (event) => {
  //     const term = event.target.value;
  //     if (term != "")
  //         term = "/" + searchTerm;

  //     productAPI.fetchProducts(term)
  //         .then((products) => (products.map((product) => {
  //             product.imageURL = `http://localhost:5000/api/GetItemPhoto/${newProduct.id}`;
  //         })));

  // }
  //<input name="search-input" id="search-input" onKeyUp={onUpdateSearch} placeholder="Search for a Product" />
  return(
  <PageTemplate>
    <div>
    <LoadingSpinner colour={colours.tertiary} />
    </div>
  </PageTemplate>);
};

export default Shop;
