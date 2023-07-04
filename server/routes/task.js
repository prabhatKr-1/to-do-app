import express from 'express';
import { getTasks, createTask, deleteTask, updateTask } from '../controllers/taskController.js';
import {isLoggedIn} from '../middleware/isLoggedIn.js'
const router = express.Router();

router.get('/all', isLoggedIn, getTasks);
router.post('/add', isLoggedIn, createTask);
router.delete('/:id', isLoggedIn, deleteTask);
router.put('/:id', isLoggedIn, updateTask);


export default router;