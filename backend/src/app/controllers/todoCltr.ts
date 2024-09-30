import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
require("dotenv").config()
import Todo from "../models/todo.model";
import { validationResult } from "express-validator";

const authenticateUser = (req: Request): string | null => {
    const token = req.header('Authorization')
    if (!token) {
        return null;
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY || 'your_jwt_secret') as { userId: string };
        // const decoded = jwt.verify(token,process.env.SECRET_KEY)

        return decoded?.userId;
    } catch (error) {
        return null;
    }
}

export const createTodo = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    try {
        const { title, description } = req.body;

        const id = authenticateUser(req);

        if (!id) {
            return res.status(401).json({ message: 'Access denied. Invalid or missing token.' });
        }

        const newTodo = {
            title,
            description,
            createdBy: id
        };

        const todo = await Todo.create(newTodo);

        return res.status(201).json({
            message: "Todo created successfully",
            todo
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
};




export const readTodo = async (req: Request, res: Response) => {
    try {
        const todos = await Todo.findAll();
        return res.status(200).json(todos)
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }

}
export const readTodoById = async (req: Request, res: Response) => {
    const { todoId } = req.params;
    try {
        const id = authenticateUser(req);

        if (!id) {
            return res.status(401).json({ message: 'Access denied. Invalid or missing token.' });
        }
        // const todo = await Todo.findByPk(id)
        const todo = await Todo.findOne({
            where: {
                id: todoId,
                createdBy: id
            }
        })

        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });

        }

        return res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });

    }
}

export const updateTodoById = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    const { todoId } = req.params
    const { title, description, completed } = req.body;

    try {
        const id = authenticateUser(req);

        if (!id) {
            return res.status(401).json({ message: 'Access denied. Invalid or missing token.' });
        }

        const todo = await Todo.findOne({
            where: {
                id: todoId,
                createdBy: id
            }
        });

        if (
            !todo
        ) {
            return res.status(404).json({
                message: "Todo not found"
            })
        }

        todo.title = title || todo.title
        todo.description = description || todo.description
        todo.completed = (completed !== undefined) ? completed : todo.completed

        await todo.save()

        return res.status(200).json({
            message: "Todo updated successfully",
            todo
        })

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });

    }


}

export const deleteTodoById = async (req: Request, res: Response) => {
    const { todoId } = req.params

    try {
        
        const id = authenticateUser(req);
    
        if (!id) {
            return res.status(401).json({ message: 'Access denied. Invalid or missing token.' });
        }

        const todo = await Todo.findOne({
            where: {
                id: todoId,
                createdBy: id
            }
        })

        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        await todo.destroy()

        return res.status(200).json({ message: "Todo deleted successfully" });

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });

    }



}