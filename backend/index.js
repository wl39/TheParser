import express from "express";
import cors from "cors";
import generateJSONRoute from "./routes/generateJSON.js";
import generateCodeRoute from "./routes/generateCode.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/generate-json", generateJSONRoute);
app.use("/api/generate-code", generateCodeRoute);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
