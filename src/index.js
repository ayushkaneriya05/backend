import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

// import express from "express";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

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
