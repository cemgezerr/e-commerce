import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/slices/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store.product);
  console.log(product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return <div>ProductList</div>;
};

export default ProductList;
