// @ts-nocheck
import { Edit, StarIcon } from "lucide-react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { ProductTypes } from "../../../types/types";
import HeadlessModal from "./headless-modal";

const ProductCard = ({ product }: { product: ProductTypes }) => {
  return (
    <>
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
            <div className="flex items-center gap-2">
              <div>
                <HeadlessModal
                  productId={product.id}
                  productTitle={product.title}
                />
              </div>
              <Link
                to={`/products/${product.id}/edit`}
                className="border p-1 rounded-md"
              >
                <Edit strokeWidth={1} className="text-gray-500 h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="flex ">
            <Rating
              initialRating={product?.rating?.rate}
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

            <p className=" -mt-0.5 ms-2 text-[#ff9017]">
              {product?.rating?.rate}
            </p>
          </div>
          <p className="mt-3 text-sm text-gray-600">{product.title}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
