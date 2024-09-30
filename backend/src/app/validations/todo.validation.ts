import { error } from "console"

const titleSchema = {
    notEmpty:{
        errorMessage:"Todo cannot be Empty",
        bail: true,
    },
    isLength:{
        bail: true,
errorMessage:"Todo length must be btw 1 and 128",
        options:{
            min:1,
            max:128
        }
    }
}

const descriptionSchema = {
    notEmpty:{
        errorMessage:"Description cannot be Empty",
        bail: true,

    },
    isLength:{
        bail: true,

        options:{
            min:1,
            max:128
        },
        errorMessage:"Description lenght must be 1 to 128"
    }
}

const completedSchema = {
    isBoolean:{
        errorMessage:"Completed either true or false",
        bail: true,

    }
}


export const todoCreateValidationSchema = {
    title:titleSchema,
    description:descriptionSchema,
    completed: {
        optional: true,
        ...completedSchema
    }}


export const todoUpdateValidationSchema = {
    title: {
        optional: true, 
        ...titleSchema
    },
    description: {
        optional: true, 
        ...descriptionSchema
    },
    completed: {
        optional: true,
        ...completedSchema
    }
};