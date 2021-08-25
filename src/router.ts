import express, {Request, Response} from "express";
import { getTasks, createTask, getTask, deleteTask, updateTask } from './tasks'


const router = express.Router();


router.get('/' , getTasks);
router.post('/', createTask)
router.get('/:id', getTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router