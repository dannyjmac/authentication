import express from "express";
import cors from "cors";
import { router } from "./routes";
import mongoose from "mongoose";

// mongoose.connect(
//   `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.obak4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// );

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(PORT, () => {
  console.log("LIGHTNING SERVICE RUNNING ON PORT", PORT);
});
