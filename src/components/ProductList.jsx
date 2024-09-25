import { Link } from "react-router-dom";
import { products } from "./data";

function ProductList() {
  return (
    <div>
      <h1>Produkter</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link> -{" "}
            {product.price} kr
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
