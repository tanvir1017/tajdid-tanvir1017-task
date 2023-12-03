# Building a React E-commerce Dashboard

## Overview

This repository contains the Tajdid-Store E-commerce Dashboard, a dashboard contain which is all of the data for manipulation.

## Technology Stack

1.  React.js,
2.  React Router,
3.  Tailwind CSS,
4.  React Hook Form,
5.  Zod - _**For Form Validation**_

## Features

- **_Load All Data_**: As project requirement, i utilize the faksoter API for load data by useQuery from Tanstack-query .

- **_Insert Data_**: As part of the requirement, there is functionality to insert products into `fakestore` API. But, they won't allow the user to manipulate their real database. so, i use caching with `useQuery` by @Tanstack-query , to implement this features and meet the project requirement.

- **_Delete Product_**: We can't manipulate their real DB for any HTTP request, as mentioned previously. Similarly, I use cached data to implement the `useMutation` feature.

- **_Update Product_**: Additionally, I implemented an Update system by useMution as part of CRUD operations. The cached data is used for update requests by using @TanStack-Query -- _**useMutation**_ ` hook.

- **_Form Validation_**: As the part of requirement, I implemented form validation with _**React-hook**_ form and also used _**Zod**_ for schema validation .

- **_UI Design Via TailwindCSS_**: Tried to make the UI according to _**Figma**_ design, was given as task-list.

- **_User Interactivity_**: For more user interactivity and part of task, I implemented _**@headlessUI**_ dialog or modal when user want to delete any product & ensure again that user .
