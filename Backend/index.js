const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');

const UserModel = require('./Models/UserModel');


const app = express();

app.use(cors({ origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true 
})); // CORS configuration to allow requests from the frontend
app.use(express.json()); // Middleware to parse data in JSON bodies to Frontend
app.use(cookieParser()); // Middleware to parse cookies from incoming requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/BlogApp')
   .then(() => {
   console.log('Connected to MongoDB')})
   .catch((err) => {
   console.error('Error connecting to MongoDB:', err)});

   
app.post('/register',  (req, res) => {
  const { username, email, password } = req.body;
  // Hash the password before saving to the database , 10 is the salt rounds for bcrypt which determines the computational cost of hashing the password. A higher number means more security but also more time to hash.
  bcrypt.hash(password,10)
    .then((hash) => {
      UserModel.create({ username, email, password: hash })
        .then(user => res.json(user))
        .catch(err => res.json(err));
    })
    .catch(err => console.log(err));
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  UserModel.findOne({ email: email })
    .then (user =>{
      if(user){
        bcrypt.compare(password, user.password)
        .then((response) => {
          if (response){
            const token = jwt.sign({ email: user.email, username :user.username },
               "jwt-secret-key", { expiresIn: '1d' });
               res.cookie('token', token , { 
                              httpOnly: true,
                              sameSite: 'lax'}
                          );
               return res.json("Login Successfull");
          }

          else{
            return res.json("Password Incorrect");
          }
        })
      }
      else{
        return res.json("User not found" )
      }
    })

    .catch(err => res.json(err));
});


app.listen(3001, () => {
  console.log('Server is running ');
});