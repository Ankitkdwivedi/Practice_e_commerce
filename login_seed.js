const mongoose = require('mongoose');
const Login = require('./models/login');
require("dotenv").config();
mongoose.connect(process.env.dbURL)
    .then(()=>console.log("DB Connected."))
    .catch((err)=>console.log("Something Went Wrong!!"))

const login = [
    {
        islogin: false
    }
];

Login.insertMany(login)
    .then(()=>console.log('Details Seeded'))
    .catch((err)=>console.log('Something Went Wrong!!'));

// Product.deleteMany({})
//     .then(()=> console.log('Deleted everything in the collection!!'));
