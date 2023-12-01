// @ts-nocheck
import { StarIcon, Trash } from "lucide-react";
import Rating from "react-rating";
import { ProductTypes } from "../../../types/types";

const ProductCard = ({ product }: { product: ProductTypes }) => {
  const handleDeleteProduct = (id: number) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return (
    <div className="2xl:w-[380px] xl:w-[300px] border shadow rounded-md">
      <div className="2xl:h-[250px] xl:h-[200px] border-b relative p-3">
        <img
          src={product.image}
          alt="Laptop"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">${product.price}</h3>
          <button
            onClick={() => handleDeleteProduct(product.id)}
            className="border p-1 rounded-md shadow"
          >
            <Trash strokeWidth={1} className="text-red-500 h-6 w-6" />
          </button>
        </div>
        <div className="flex ">
          <Rating
            initialRating={product.rating.rate}
            emptySymbol={
              <StarIcon className="h-5 w-5" fill="#d4cdc5" strokeWidth={0} />
            }
            readonly={true}
            fullSymbol={
              <StarIcon
                strokeWidth={0}
                className="text-[#ff9017] h-5 w-5"
                fill="#ff9017"
              />
            }
          />

          <p className=" -mt-0.5 ms-2 text-[#ff9017]">{product.rating.rate}</p>
        </div>
        <p className="mt-3 text-sm text-gray-600">{product.title}</p>
      </div>
    </div>
  );
};

export default ProductCard;
