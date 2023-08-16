import {Router}  from "express";
import  tokenControllers from "../controllers/TokenControllers";
import loginRequired from "../middlewares/loginRequired";
const router = new Router ();


router.post ("/", tokenControllers.store)

export default router;
