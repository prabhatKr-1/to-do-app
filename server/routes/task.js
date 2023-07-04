import express from 'express';
import { getTasks, createTask, deleteTask, updateTask } from '../controllers/taskController.js';
import {isLoggedIn} from '../middleware/isLoggedIn.js'
const router = express.Router();

router.get('/', isLoggedIn, getTasks);
router.post('/', isLoggedIn, createTask);
router.delete('/:id', isLoggedIn, deleteTask);
router.patch('/:id', isLoggedIn, updateTask);


export default router;