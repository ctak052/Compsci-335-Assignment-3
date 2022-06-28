import React, { useState, useEffect } from "react";
import { productAPI } from "../../api/productAPI"
import PageTemplate from "../organisms/PageTemplate/PageTemplate";
import LoadingSpinner from "../atoms/LoadingSpinner";
import { colours } from "../constants/colours";
import Product from "../molecules/Product/Product";

const Shop = (props) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [updateSearch, setUpdateSearch] = useState(true);
  useEffect(() => {
    const fetchProducts = async (searchTerm) => {
      console.log("1")
      const ProductObjects = await productAPI.fetchProducts(searchTerm);
      console.log("2")
      setProducts(ProductObjects);
      setUpdateSearch(false);
    };
    if (updateSearch === true) {
      fetchProducts(searchTerm);
    }
  }, [products, searchTerm, updateSearch]);

  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
    setUpdateSearch(true);
  };

  return (
    <PageTemplate title="Shop" version={props.version}>
      <div title="Shop">
        <input
          name="search-input"
          onChange={updateSearchTerm}
          placeholder="Search for a Product"
        />

        {updateSearch === false && products.length === 0 ? (
          <h1>Nothing Found</h1>
        ) : products.length === 0 ? (
          <LoadingSpinner colour={colours.tertiary} />
        ) : (
          products.map((productJson) => (
            <Product key={productJson.id} product={productJson} />
          ))
        )}
      </div>
    </PageTemplate>
  );
};

export default Shop;
