import { Request, Response } from 'express';
import Post from '../models/Posts';
import { ResolveEnd } from '@angular/router';

export const getPosts = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const posts = await Post.find({ userid: userId }).sort({ date: -1 });
  res.json(posts);
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const postId = req.params['id'];
    const userId = (req as any).user.id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.userid.toString() !== userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    return res.json(post);
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const post = new Post({ ...req.body, userid: userId });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.log('Create Post Error: ', err);
    res.status(400).json({ message: 'Failed to create post' });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params['id'], req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Update failed' });
  }
};

export const createPostsBatch = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const posts = req.body;

    if (!Array.isArray(posts) || posts.length === 0) {
      return res.status(400).json({ message: 'No posts provided' });
    }

    const postsToInsert = posts.map((post) => ({
      ...post,
      userid: userId,
      date: post.date ? new Date(post.date) : new Date(),
    }));

    const createdPosts = await Post.insertMany(postsToInsert);

    return res
      .status(201)
      .json({ message: 'Batch posts created', posts: createdPosts });
  } catch (error) {
    console.error('Batch creation error:', error);
    return res.status(500).json({ message: 'Batch creation failed' });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    await Post.findByIdAndDelete(req.params['id']);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: 'Delete failed' });
  }
};
