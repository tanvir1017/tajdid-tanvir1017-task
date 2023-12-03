import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader, UploadCloud, X } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postData } from "../../../../utils/mutation";
import {
  ProductTypes,
  TProductSchema,
  productSchema,
} from "../../../types/types";

export default function AddProduct() {
  // **Initialize navigation and query client hooks**
  const navigation = useNavigate(); // Hook to navigate between pages
  const queryClient = useQueryClient(); // Hook to manage query cache

  // **Define product form using `useForm` hook**
  const {
    register, // Function to register form fields
    handleSubmit, // Function to handle form submission
    formState: { errors }, // Object containing form errors
  } = useForm<TProductSchema>({
    resolver: zodResolver(productSchema), // Schema for validating form data
  });

  // **Define product mutation using `useMutation` hook**
  const {
    mutate, // Function to trigger mutation (submit product data)
    isPending, // Boolean indicating if mutation is in progress
  } = useMutation({
    mutationFn: postData, // Function to submit product data to api server
    onSuccess: (data) => {
      // Callback function executed when mutation succeeds
      // Update product list in cache
      queryClient.setQueryData(["products"], (oldData: ProductTypes[]) => {
        return [data, ...oldData]; // Prepend new product to existing list
      });

      // Redirect to product list page after successfully update cache with new product 🧭
      navigation("/");
    },
  });

  // **Submit product form data**
  const onSubmit: SubmitHandler<TProductSchema> = (data: TProductSchema) => {
    console.log(typeof data.price);
    mutate(data); // Trigger mutation with form data
  };
  console.log(errors);

  return (
    <div className="px-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Add Product Header  Section */}
        <AddProductHeader isSubmitting={isPending} />
        {/* Add Product Header  Section */}
        <hr className="mt-5 border-2 border-slate-100 opacity-75 rounded-lg" />
        <div className="pt-10">
          {/* Product Title  Section */}
          <div className="grid grid-cols-4">
            <label className="block font-semibold">Title</label>
            <div className="col-span-2">
              <input
                placeholder="Product Price"
                {...register("title")}
                className="border w-full px-1 py-2 rounded-md  ring focus-visible:outline-none ring-slate-50 block"
              />
              {errors.title && (
                <span className="inline-block mt-1 text-red-500">
                  {errors.title?.message}
                </span>
              )}
            </div>
          </div>
          {/* Product Title  Section */}
          <hr className="my-5 border border-slate-100 rounded-lg" />
          {/* Product Price  Section */}
          <div className="grid grid-cols-4">
            <label className="block font-semibold">Price</label>
            <div className="col-span-2">
              <input
                placeholder="Product Price"
                type="string"
                className={
                  "border w-full px-1 py-2 rounded-md  ring focus-visible:outline-none ring-slate-50 block"
                }
                {...register("price")}
              />
              {errors.price && (
                <span className="inline-block mt-1 text-red-500">
                  {errors.price?.message}
                </span>
              )}
            </div>
          </div>

          {/* Product Price  Section */}
          <hr className="my-5 border border-slate-100 rounded-lg" />
          {/* Product Photo Upload Section */}
          <div className="grid grid-cols-4">
            <div>
              <label className="block font-semibold">Product Photo</label>
              <span className="2xl:text-sm xl:text-xs">
                This will be displayed on your product
              </span>
            </div>
            {/* Product Photo Upload Section */}
            <div className="flex gap-2 col-span-2 max-w-full">
              <div className="2xl:w-[25vw] xl:w-full  border  p-2 rounded-md w-full flex">
                <img src="/assets/images/cloths.png" className="m-auto" />
              </div>
              <div className="2xl:w-[35vw] xl:w-full border cursor-pointer hover:bg-slate-50 rounded-md p-5">
                <label htmlFor="file-input" className="cursor-pointer">
                  <div className="bg-[#f9fafbdf] flex rounded-full mx-auto 2xl:w-20 2xl:h-20 w-16 h-16 ">
                    <div className="bg-[#e4e5e7af] p-3 rounded-full 2xl:w-14 2xl:h-14 w-12 h-12 flex items-center justify-center m-auto">
                      <UploadCloud strokeWidth={0.8} />
                    </div>
                  </div>
                  <p className="cursor-pointer text-gray-700 text-center xl:text-xs 2xl:text-base">
                    <span className="text-blue-500 font-bold">
                      Click to upload{" "}
                    </span>
                    or drag and drop SVG, PNG, JPG or GIF (max. 800{" "}
                    <X className="h-4 w-4 inline-table" /> 400px)
                  </p>
                </label>
                <input
                  type="file"
                  id="file-input"
                  className="opacity-0 -z-10"
                />
                <div className=""></div>
              </div>
            </div>
          </div>
          {/* Product Photo Upload Section */}
          <hr className="my-5 border border-slate-100 rounded-lg" />
          {/* Product Description Section */}
          <div className="grid grid-cols-4">
            <div>
              <label className="block font-semibold">Description</label>
              <span className="2xl:text-sm xl:text-xs">
                Write a short description
              </span>
            </div>

            <div className=" gap-2 col-span-2 max-w-full">
              <textarea
                className="border w-full rounded-md resize-none p-2  px-1 py-2 col-span-2 ring focus-visible:outline-none ring-slate-50"
                defaultValue=""
                placeholder="Write something about your products.."
                {...register("description")}
                rows={6}
              />
              <span className="text-xs text-gray-700">275 characters left</span>
            </div>
          </div>
          {/* Product Description Section */}
        </div>
      </form>
    </div>
  );
}

function AddProductHeader({ isSubmitting }: { isSubmitting: boolean }) {
  const navigation = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Create Product</h1>
          <p>Upload a product photo and details here</p>
        </div>

        <div className="flex items-start">
          <div className="flex items-center gap-3 mr-7">
            <button
              onClick={() => navigation("/")}
              type="button"
              disabled={isSubmitting}
              className="rounded-md bg-white px-6 py-2 text-sm  text-black border shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Cancel
            </button>{" "}
            <button
              disabled={isSubmitting}
              type="submit"
              className="rounded-md bg-blue-500 px-6 py-2 text-sm  text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              {isSubmitting ? (
                <span>
                  <Loader className="animate-spin duration-200 w-4 h-4 mr-2 inline-table" />{" "}
                  creating...
                </span>
              ) : (
                "Create"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
