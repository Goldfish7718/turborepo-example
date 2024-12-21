"use client";

import { exampleSchema, ExampleSchemaType } from "@packages/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExampleSchemaType>({ resolver: zodResolver(exampleSchema) });

  const submit = async (data: ExampleSchemaType) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/example`,
        data
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <label>ID:</label>
        <input type="number" {...register("id", { valueAsNumber: true })} />

        <label>Name:</label>
        <input type="text" {...register("name")} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Page;
