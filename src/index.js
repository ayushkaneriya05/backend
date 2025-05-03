import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import express from "express";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

dotenv.config({path: "./env"});

connectDB();
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("MongoDB connected successfully");
//     app.on("error", (err) => {
//       console.error("Server error:", err);
//       throw err;
//     });
//     app.listen(process.env.PORT, () => {
//         console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     throw error;
//   }
// }
// )();