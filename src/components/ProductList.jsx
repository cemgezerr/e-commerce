import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/slices/productSlice";
import Product from "./Product";

const ProductList = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return <div className="flex-row" style={{ flexWrap: "wrap", marginTop: "20px" }}>
    {product && product.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </div>;
};

export default ProductList;
