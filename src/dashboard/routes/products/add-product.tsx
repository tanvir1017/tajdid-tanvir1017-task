import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="px-6">
      <AddProductHeader />
      <hr className="mt-5 border-2 border-slate-50 opacity-75 rounded-lg" />
      <div className="pt-10">
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register("example")} />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

function AddProductHeader() {
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
              className="rounded-md bg-white px-6 py-2 text-sm  text-black border shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Cancel
            </button>{" "}
            <button
              type="button"
              className="rounded-md bg-blue-500 px-6 py-2 text-sm  text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
