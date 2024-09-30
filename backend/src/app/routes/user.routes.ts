import {Router} from 'express'
import { userSignIn, userSignUp } from '../controllers/userCltr';
import { checkSchema } from 'express-validator';
import {userLoginSchema, userRegistrationSchema} from "../validations/user.validation"

const router:Router = Router()


router.post("/signin",checkSchema(userLoginSchema),userSignIn);
router.post("/signup",checkSchema(userRegistrationSchema),userSignUp);



export default router
