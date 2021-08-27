import express, { Router } from 'express';
import TaskService from './modules/tasks';

const router: Router = express.Router();

router.get('/', TaskService.getTasks);
router.post('/', TaskService.createTask);
router.get('/:id', TaskService.getTask);
// router.get('/priority', TaskService.getPriorityTasks);
router.patch('/:id', TaskService.updateTask);
router.delete('/:id', TaskService.deleteTask);

export default router;
