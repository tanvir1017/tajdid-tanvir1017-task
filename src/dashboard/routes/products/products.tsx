import { useQuery } from "@tanstack/react-query";
import { getAllProductsData } from "../../../../utils/mutation";
import { ProductTypes } from "../../../types/types";
import Header from "./header";
import ProductCard from "./p-card";
import Pagination from "./pagination";

const Products = () => {
  // Use the `useQuery` hook to fetch products data
  const {
    isError,
    isLoading,
    data: products = [],
  } = useQuery({
    // Specify the query key to uniquely identify the query
    queryKey: ["products"],

    // Set `refetchOnMount` to false to prevent automatic fetching on component mount
    refetchOnMount: false,

    // Define the query function to fetch products data
    queryFn: getAllProductsData,
  });

  // Handle error state
  if (isError) {
    return <div className="px-6">Error found</div>;
  }

  // Handle loading state
  if (isLoading) {
    return <div className="px-6">Data Loading...</div>;
  }

  return (
    <div className="px-6 relative">
      {/* Sll Products card show header start from here  */}
      <Header />
      {/* Sll Products card show header start from here  */}

      {/* Product Data */}
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 gap-5 pt-10 ">
        {products.map((product: ProductTypes) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination />

      {/* Product Data */}
    </div>
  );
};

export default Products;
