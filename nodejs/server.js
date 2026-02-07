import express from 'express'
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import Users from './models/Users.js';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';

dotenv.config();
await connectDB();
const app = express()
const port = 3000

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await Users.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Users({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ success: true, message: "User registered successfully" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ success: false, message: "Server error" })
    }
})

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: "Invalid password" });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,        // true in production (HTTPS)
            maxAge: 1000 * 60 * 60 // 1 hour
        });

        res.status(200).json({ success: true, message: "Login successful" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ success: false, message: "Server error" })
    }
})

app.get('/logout', async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: false,
            maxAge: 1000 * 60 * 60
        });

        res.status(200).json({ success: true, message: "Logout successful" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ success: false, message: "Server error" })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
