import { z } from "zod";

export const exampleSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type ExampleSchemaType = z.infer<typeof exampleSchema>;
