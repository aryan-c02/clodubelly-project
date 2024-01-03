import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from "./routes/userRotues.js"
import connectDatabase from './connectDatabase.js';
import bodyParser from "body-parser";

const app = express();
dotenv.config();


const PORT = process.env.PORT || 7000;

connectDatabase();

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


// routes
app.use('/api', userRoutes);


app.listen(PORT, () => {
    console.log(`Server started on the Port ${PORT}`);
})






