import { Response } from "express";
import { IUserDocument } from "../models/user.model.js";
import jwt from "jsonwebtoken" ;

export const generateToken = (res:Response , user:IUserDocument) =>{
    const token = jwt.sign({userId:user._id} , process.env.JWT_SECRET! ,{expiresIn:'1d'}) ;
    const isProd = process.env.NODE_ENV === 'production';
    res.cookie("token", token, {
        httpOnly: true,
        secure: isProd,
        sameSite: isProd ? 'none' : 'lax',
        maxAge: 24 * 60 * 60 * 1000,
    });
    return token ;
}