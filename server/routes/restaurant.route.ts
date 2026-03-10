import express from "express";
import { createRestaurant, getRestaurant, getRestaurantOrder, getSingleResataurant, searchRestaurant, updateOrderStatus, updateRestaurant } from "../controllers/restaurant.controller.js";
import { isAuthenticate } from "../middlewares/isAuthenticate.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/" , isAuthenticate , upload.single("imageFile") , createRestaurant) ;
router.get("/" , isAuthenticate , getRestaurant) ;
router.put("/" , isAuthenticate , upload.single("imageFile") , updateRestaurant) ;
router.get("/order" , isAuthenticate ,  getRestaurantOrder) ;
router.put("/order/:orderId/status" , isAuthenticate ,  updateOrderStatus) ;
router.put("/search/:searchText" , isAuthenticate , searchRestaurant) ;
router.get("/:id" , isAuthenticate ,  getSingleResataurant) ;

export default router ;