import { Router } from 'express';
import { createTodo, deleteTodoById, readTodo, readTodoById, updateTodoById } from '../controllers/todoCltr';

const router: Router = Router();

router.post("/", createTodo);
router.get("/", readTodo);
router.get("/:todoId", readTodoById);
router.put("/:todoId", updateTodoById);
router.delete("/:todoId", deleteTodoById);

export default router; 
