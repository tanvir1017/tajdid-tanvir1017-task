import { Dialog, Transition } from "@headlessui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader, X } from "lucide-react";
import { Fragment, useState } from "react";
import { deleteProduct } from "../../../../utils/mutation";
import { Delete } from "../../../svg/all-link-icon";
import { ProductTypes } from "../../../types/types";

// Declaring type for props value
type CProps = {
  productId: number;
  productTitle: string;
};

export default function HeadlessModal({ productId, productTitle }: CProps) {
  // State to manage the visibility of the modal
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the modal
  function closeModal() {
    setIsOpen(false);
  }

  // Function to open the modal
  function openModal() {
    setIsOpen(true);
  }

  // Accessing QueryClient from react-query to manage data fetching
  const queryClient = useQueryClient();

  // Mutation hook for deleting a product
  const { mutate, isPending } = useMutation({
    mutationFn: deleteProduct, // Function that performs the delete action
    onSuccess: (data) => {
      // Updating the query data after successful deletion
      queryClient.setQueryData(["products"], (prevProducts: ProductTypes[]) => {
        // Filtering out the deleted product from the previous list
        const filteredProducts = prevProducts.filter(
          (product) => product.id !== data.id
        );
        return filteredProducts;
      });
    },
  });

  // Function to handle the deletion process
  const handleDeleteProduct = () => {
    mutate(productId); // Initiating the mutation with the product ID
    closeModal(); // Closing the modal after initiating the delete operation
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <button onClick={openModal} className="border p-1 rounded-md">
          <Delete />
        </button>{" "}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto backdrop-blur-md bg-[#3a4d69aa]">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="font-semibold text-lg">Delete Product</h2>
                      <button onClick={closeModal}>
                        <X className="" strokeWidth={0.8} />
                      </button>
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-gray-700">
                      Are you sure want to delete{" "}
                      <span className="font-semibold">"{productTitle}"</span>{" "}
                      from your list
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <button
                      onClick={closeModal}
                      type="button"
                      className="rounded-md bg-white px-6 py-2.5 text-sm  border shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 w-full"
                    >
                      Cancel
                    </button>{" "}
                    <button
                      type="button"
                      className="rounded-md bg-red-500 px-6 py-2.5 text-sm  text-white border shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 w-full"
                      onClick={handleDeleteProduct}
                    >
                      {isPending ? (
                        <span>
                          <Loader className="animate-spin duration-200 w-4 h-4 mr-2 inline-table" />{" "}
                          Deleting...
                        </span>
                      ) : (
                        "Delete"
                      )}
                    </button>{" "}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
