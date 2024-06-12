import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import financialRecordRouter from './routes/financial-records'
import cors from 'cors'

// Load environment variables from .env file in the root directory
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const app: Express = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors())

const mongoURI: string = process.env.MONGO_URI as string;

if (!mongoURI) {
  console.error("MONGO_URI environment variable is not defined.");
  process.exit(1);
}

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to the Database"))
  .catch((err) => console.error("Failed to connect to the Database:", err));

app.use('/financial-records', financialRecordRouter)

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
