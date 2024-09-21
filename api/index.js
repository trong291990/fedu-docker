const express = require('express');
const mongoose = require('mongoose');
const mysql = require('mysql2');

const app = express();
const port = 5000;

// Kết nối tới MongoDB với người dùng và mật khẩu
const mongoURL = 'mongodb://admin:123@mongo:27017/mydb?authSource=admin';
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Tạo schema và model cho một collection
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    email: String,
});

const User = mongoose.model('User', userSchema);

// Kết nối tới MySQL
const mysqlConnection = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "123",
    database: "mydb"
});


// API list users
app.get('/', async (req, res) => {
    try {
        const users = await User.find(); // Lấy tất cả người dùng từ MongoDB
        res.json(users); // Trả về danh sách người dùng dưới dạng JSON
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Api tạo user
app.get('/create-user', async (req, res) => {
    const user = new User({ name: 'John Doe', email: 'john@example.com' });
    await user.save();
    res.send(user);
});

app.get('/mysql', async (req, res) => {
    mysqlConnection.connect(function(err) {
        if (err) {
            res.send("Error connecting to MySQL: " + err.message)
        }
        res.send("Connected!!!")
    });
});


app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
