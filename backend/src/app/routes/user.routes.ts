import {Router} from 'express'
import { userSignIn, userSignUp } from '../controllers/userCltr';

const router:Router = Router()


router.post("/signin",userSignIn);
router.post("/signup",userSignUp);



export default router
