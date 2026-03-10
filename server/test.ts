import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

dotenv.config();
console.log("Config done");
console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 3000;

console.log("About to listen on port", PORT);

app.listen(PORT, async () => {
    console.log("Server listening callback called");
    try {
        await connectDB();
        console.log(`Server listen at port ${PORT}`);
    } catch (error) {
        console.error("Error in connectDB:", error);
        process.exit(1);
    }
});

console.log("app.listen called");

