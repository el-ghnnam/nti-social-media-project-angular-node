import express from 'express';
import { getUserById } from '../controllers/user.controller';
import { verifyToken } from '../middlerware/auth.middleware';
import { getUserByUsername } from '../controllers/user.controller';

const router = express.Router();

router.get('/:id', verifyToken, getUserById);
router.get('/username/:username', getUserByUsername);

export default router;
