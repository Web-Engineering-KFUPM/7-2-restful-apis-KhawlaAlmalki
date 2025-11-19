/* global process */

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongo connected");
    } catch (err) {
        console.error("Connection error:", err.message);
    }
})();

