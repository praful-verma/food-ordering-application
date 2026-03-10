import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config() ;

declare global {
    namespace Express{
        interface Request {
            id: string;
        }
    }
}

export const isAuthenticate = async (req:Request , res:Response , next:NextFunction) =>{
    try{

        const {token} = req.cookies.token ;

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token is missing"
            });
        }

        //verify token
        const decode = await jwt.verify(token , process.env.SECRET_KEY) ;

        if(!decode){
            return res.status(401).json({
                success:false,
                message:"Invalid Token"
            })
        }

        req.id = decode.userId;
        next() ;

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}