// connecting to mongodb database thro mongoose
import mongoose from "mongoose";

export async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONG0_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error; ${err.message}`);
    process.exit(1);
  }
}
