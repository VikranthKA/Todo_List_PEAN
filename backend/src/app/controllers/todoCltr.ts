import { Request,Response } from "express"
import Todo from "../models/todo.model"

export const createTodo = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        
        const newTodo = {
            title,
            description,
            createdBy: req.user?.id // Ensure req.user is recognized here
        };

        const todo = await Todo.create(newTodo);
        return res.status(201).json({
            message: "Todo created successfully",
            todo // Optionally return the created todo
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
}



export const readTodo = async(req:Request,res:Response)=>{

}
export const readTodoById =async(req:Request,res:Response)=>{

}

export const updateTodoById = async(req:Request,res:Response)=>{

}

export const deleteTodoById = async(req:Request,res:Response)=>{

}