import express from 'express';
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  createPostsBatch,
  deletePost,
} from '../controllers/post.controller';
import { verifyToken } from '../middlerware/auth.middleware';

const router = express.Router();

router.get('/', verifyToken, getPosts);
router.get('/:id', verifyToken, getPostById);
router.post('/', verifyToken, createPost);
router.put('/:id', verifyToken, updatePost);
router.put('/:id', verifyToken, createPostsBatch);
router.delete('/:id', verifyToken, deletePost);

export default router;
