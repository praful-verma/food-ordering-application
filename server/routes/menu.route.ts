import express from "express";
import { addMenu, editMenu } from "../controllers/menu.controller.js";
import { isAuthenticate } from "../middlewares/isAuthenticate.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/" , isAuthenticate , upload.single("imageFile") , addMenu) ;
router.put("/:id" , isAuthenticate , upload.single("imageFile") , editMenu) ;

export default router ;