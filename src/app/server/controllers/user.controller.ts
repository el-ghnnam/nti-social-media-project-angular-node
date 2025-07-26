import { Request, Response } from 'express';
import User from '../models/Users';

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params['id']).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getUserByUsername = async (req: Request, res: Response) => {
  const username = req.params['username'];
  const user = await User.findOne({ username }).select('-password');
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  return res.json(user);
};
