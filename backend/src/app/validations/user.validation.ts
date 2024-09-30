import User from "../models/user.model";

const passwordSchema = {
    isLength: {
        bail: true,
        options: { min: 3, max: 128 },
        errorMessage: "Password should be btw 3 and 128"
    },
    notEmpty: {
        bail: true,
        errorMessage: "Password can be empty"
    }
}

const userNameSchema = {
    notEmpty:{
        bail: true,
        errorMessage :"User Name cannot be empty"
    },isLength: {
        bail: true,
        options: { min: 2, max: 128 },
        errorMessage: "Name should be btw 3 and 128"
    },
}

 const emailSchema = {
    isEmail: {
        bail: true,
        errorMessage: `Email must be a valid format`
    },
    notEmpty: {
        bail: true,
        errorMessage: "Email cannot be empty"
    }
}

export const userRegistrationSchema = {
    username: {
        notEmpty: {
            errorMessage: "User cannot be empty"
        },
        isLength: {
            options: { min: 1, max: 100 },
            errorMessage: "Username must be between 1 and 100 characters long"
        }
    },
    email: {
        ...emailSchema,
        custom: {
            bail: true,
            options: async function(value:string) {
                const email = await User.findOne({where:{ email: value }});
                if (email) {
                    throw new Error("Email is already taken. Please try logging in.");
                } else {
                    return true;
                }
            }
        }
    },
    password: passwordSchema,

}

export const userLoginSchema = {
    email:emailSchema,
    password:passwordSchema
}


