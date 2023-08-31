import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {seedRouter} from "./Routes/seedRoutes.js";
import userRouter from "./Routes/userRoutes.js";
import contentRouter from "./Routes/contectRoutes.js";

dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use ("/api/seed", seedRouter);
app.use ("/api/users", userRouter); 
app.use("/api/content", contentRouter) 


app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=> {
    console.log("Connected to mongodb!");
    app.listen(port);
    console.log("server listening on port " + port);
})
.catch((e) => console.log(e));