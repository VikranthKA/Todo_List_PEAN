import { Router } from 'express';
import { createTodo, deleteTodoById, readTodo, readTodoById, updateTodoById } from '../controllers/todoCltr';
import { authenticateUser } from '../middlewares/auth';
import { checkSchema } from 'express-validator';
import { todoCreateValidationSchema, todoUpdateValidationSchema } from '../validations/todo.validation';

const router: Router = Router();

router.post("/",checkSchema(todoCreateValidationSchema) ,createTodo);
router.get("/", readTodo);
router.get("/:todoId", readTodoById);
router.put("/:todoId",checkSchema(todoUpdateValidationSchema) , updateTodoById);
router.delete("/:todoId", deleteTodoById);

export default router; 
