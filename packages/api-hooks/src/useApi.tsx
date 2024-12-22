import { ExampleSchemaType } from "@packages/schemas/example";
import axios from "axios";

interface UseApiReturns {
  submit: (data: ExampleSchemaType) => void;
}

export const useApi = (): UseApiReturns => {
  const submit = async (data: ExampleSchemaType) => {
    try {
      const res = await axios.post(`http://localhost:5000/example`, data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    submit,
  };
};
