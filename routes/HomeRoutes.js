import {Router}  from "express";
import  homeControllers from "../controllers/HomeController";

const router = new Router ();

router.get ("/", homeControllers.index)

export default router;
