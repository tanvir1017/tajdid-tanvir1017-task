import { TProductSchema } from "../src/types/types";

// Function to delete a product using DELETE request
export const deleteProduct = async (id: number) => {
  // Construct the API endpoint URL with the specified product ID
  const productURL = `https://fakestoreapi.com/products/${id}`;

  // Send DELETE request to the product URL
  const response = await fetch(productURL, {
    method: "DELETE", // Specify HTTP method as DELETE
  });

  // Parse JSON response
  const deletedProduct = await response.json();

  // Return the deleted product data
  return deletedProduct;
};

// Function to fetch product data from the specified API endpoint
export const getAllProductsData = async () => {
  // Send GET request to the 'https://fakestoreapi.com/products' endpoint
  const fetchedDataFromDb = await fetch("https://fakestoreapi.com/products");

  // Parse JSON response
  const productsData = await fetchedDataFromDb.json();

  // Return the fetched product data
  return productsData;
};

// **Function to create a new product using POST request**
export const postData = async (postAbleDAta: TProductSchema) => {
  // Send POST request to 'https://fakestoreapi.com/products' endpoint
  const postTo = await fetch("https://fakestoreapi.com/products", {
    method: "POST", // Specify HTTP method as POST
    body: JSON.stringify({
      // Convert product data to JSON format
      title: postAbleDAta.title,
      price: postAbleDAta.price,
      description: postAbleDAta.description,
      image: "https://i.pravatar.cc",
      category: "cloth",
      rating: {},
    }),
    headers: {
      // Set HTTP headers
      "content-type": "application/json",
    },
  });

  // Parse JSON response
  const response = await postTo.json();

  // Return the parsed response
  return response;
};
