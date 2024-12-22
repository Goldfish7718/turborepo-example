"use client";

import { exampleSchema, ExampleSchemaType } from "@packages/schemas/example";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useApi } from "@packages/api-hooks";

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExampleSchemaType>({ resolver: zodResolver(exampleSchema) });

  const { submit } = useApi();

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
