import { useLoaderData } from "react-router-dom";
import { ProductTypes } from "../../types/types";
import Header from "./products/header";
import ProductCard from "./products/p-card";
import Pagination from "./products/pagination";

const Products = () => {
  const productsData = useLoaderData() as ProductTypes[];

  return (
    <div className="px-6">
      {/* Sll Products card show header start from here  */}
      <Header />
      {/* Sll Products card show header start from here  */}

      {/* Product Data */}
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 gap-5 pt-10 ">
        {productsData.map((product: ProductTypes) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination />

      {/* Product Data */}
    </div>
  );
};

export default Products;
