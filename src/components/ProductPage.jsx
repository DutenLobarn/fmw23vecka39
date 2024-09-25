import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "./data";

function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    if (product) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "view_product",
        product_id: product.id,
        product_name: product.name,
        product_category: product.category,
        product_price: product.price,
      });
    }
  }, [product]);

  if (!product) {
    return <p>Produkten hittades inte.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Kategori: {product.category}</p>
      <p>Pris: {product.price} kr</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductPage;
