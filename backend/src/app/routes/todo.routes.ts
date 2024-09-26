import { Router } from 'express';
import { createTodo, deleteTodoById, readTodo, readTodoById, updateTodoById } from '../controllers/todoCltr';
import { authenticateUser } from '../middlewares/auth';

const router: Router = Router();

router.post("/",authenticateUser, createTodo);
router.get("/", readTodo);
router.get("/:todoId",authenticateUser, readTodoById);
router.put("/:todoId",authenticateUser, updateTodoById);
router.delete("/:todoId",authenticateUser, deleteTodoById);

export default router; 
