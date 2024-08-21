const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const bodyparser = require('body-parser')

app.use(cors());
app.use(bodyparser.json());

const dbconnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/MyDB');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
};

dbconnect();

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email uniqueness
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

app.post('/api/register', async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(201).json(user);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Failed to register' });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        
        if (!user) {
            return res.json({ userexist: false });
        }
        
        if (user.password === req.body.password) {
            return res.json({ user: user, userexist: true });
        }
        
        return res.json({ userexist: false });
        
    } catch (error) {
        console.error('Error logging in user:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/api/getusers', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Failed to get users' });
    }
});

app.listen(5007, () => {
    console.log('Server running on port 5007');
});
