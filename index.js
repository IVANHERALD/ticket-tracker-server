import router from './Routes/ticketRouter.js';
import mongoose from 'mongoose';
import  express  from 'express';
import cors from 'cors';
import dotenv from 'dotenv';



const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

app.use(cors());
app.use(express.json());
app.use('/ticket', router)


mongoose.connect(process.env.MONGO_URI).then(()=>
    app.listen(port,()=>
     console.log("Connected to Database And Server is running")
     )
    ).catch(e=>console.log(e));