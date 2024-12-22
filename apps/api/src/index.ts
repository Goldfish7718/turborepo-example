import express from "express";
import cors from "cors";
import { exampleSchema, ExampleSchemaType } from "@packages/schemas/example";
import { ZodError } from "zod";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("this is server");
});

app.post("/example", async (req, res): Promise<any> => {
  try {
    const data: ExampleSchemaType = exampleSchema.parse(req.body);
    res.send("Valid");
  } catch (error) {
    if (error instanceof ZodError) {
      console.log("Validation Error", error);
      return res.send("Invalid!");
    }

    console.log(error);
    return res.send("Internal Server Error");
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
