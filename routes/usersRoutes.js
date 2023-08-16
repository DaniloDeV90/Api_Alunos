import {Router}  from "express";
import  userControllers from "../controllers/UserControllers";
import loginRequired from "../middlewares/loginRequired";
const router = new Router ();

//router.get ("/:id", userControllers.show) 
//router.get ("/", userControllers.index) 


router.post  ("/", userControllers.store)
router.put ("/", loginRequired, userControllers.update)
router.delete ("/",loginRequired, userControllers.delete)
export default router;
