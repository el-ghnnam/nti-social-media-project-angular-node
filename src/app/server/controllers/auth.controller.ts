import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/Users';

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password, name } = req.body;

    const existing = await User.findOne({ $or: [{ username }, { email }] });
    if (existing)
      return res.status(400).json({ message: 'User already exists' });

    const user = new User({ username, email, password, name });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env['JWT_SECRET']!, {
      expiresIn: '1d',
    });

    res.status(201).json({
      token,
      user: {
        id: user._id,
        username: user.username,
        name: user.name,
        imgurl: user.imgurl,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err });
    return;
  }
  return;
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env['JWT_SECRET']!, {
      expiresIn: '1d',
    });

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        name: user.name,
        imgurl: user.imgurl,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err });
    return;
  }
  return;
};
