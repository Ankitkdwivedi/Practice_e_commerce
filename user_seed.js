const mongoose = require('mongoose');
const User = require('./models/user');
require("dotenv").config();
mongoose.connect(process.env.dbURL)
    .then(()=>console.log("DB Connected."))
    .catch((err)=>console.log("Something Went Wrong!!"))

const user = {
    name: "rohit",
    wishlist: [],
    cartlist: [],
    orderlist: []
};


let seed1=async function(){
    await User.insertMany(user)
    .then(()=>console.log('Details Seeded'))
    .catch((err)=>console.log('Something Went Wrong!!'));
}
module.exports=seed1;


// Product.deleteMany({})
//     .then(()=> console.log('Deleted everything in the collection!!'));
