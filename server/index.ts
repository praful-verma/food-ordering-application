import express from "express" ;
import dotenv from "dotenv"
import connectDB from "./db/connectDB.js";
import bodyParser from "body-parser"
import cookieParser from "cookie-parser";
import cors from "cors"
import userRoutes from "./routes/user.route.js"
import restaurantRoutes from "./routes/restaurant.route.js" 
import menuRoutes from "./routes/menu.route.js"

dotenv.config() ;

const app = express() ;

const PORT = 8000 ;

//default middleware for mern projects

app.use(bodyParser.json({limit:'10mb'})) ;
app.use(express.urlencoded({extended:true , limit:'10mb'})) ;
app.use(express.json()) ;
app.use(cookieParser()) ;
const corsOptions = {
    origin : "http://localhost:5173" ,
    credentials:true,
}
app.use(cors(corsOptions)) ;

//api
app.use("/api/v1/user" , userRoutes)
app.use("/api/v1/restaurant" , restaurantRoutes) 
app.use("/api/v1/menu" , menuRoutes) 



app.listen(PORT , async ()=>{
    await connectDB();
    console.log(`Server listen at port ${PORT}`)
})
