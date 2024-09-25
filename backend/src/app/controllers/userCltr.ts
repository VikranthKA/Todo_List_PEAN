import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';

const JWT_SECRET = process.env.SECRET_KEY || 'your_jwt_secret_key';

export const userSignUp = async (req: Request, res: Response) => {


    try {
        // console.log(req.body,"body")
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign({ userId: newUser.id, email: newUser.email }, JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(201).json({ token, userId: newUser.id, email: newUser.email });
    } catch (error) {
        res.status(500).json({ message: 'Error signing up the user', error });
    }
};

export const userSignIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (!existingUser) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: existingUser.id, email: existingUser.email }, JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({ token, userId: existingUser.id, email: existingUser.email });
    } catch (error) {
        res.status(500).json({ message: 'Error signing in the user', error });
    }
};
