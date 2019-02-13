var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Please provide a review before submitting"],
        minlength: [5, "Your review must contain at least 5 characters"]
    },
    star: {
        type: Number,
        required: [true, "Please provide a star rating."]
    }
},
{timestamp: true});

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username."],
        minlength: [2, "Username must be at least 2 characters."]
    },
    firstname: {
        type: String,
        required: [true, "Please enter your first name."],
        minlength: [2, "First name must have at least 2 characters."]
    },
    lastname: {
        type: String,
        required: [true, "Please enter your last name."],
        minlength: [2, "Last name must be at least 2 characters."]
    },
    password: {
        type: String,
        required: [true, "Please enter a password."],
        minlength: [6, "Password must be at least 6 characters."]
    }
},
{timestamp: true});

var ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name of the product"],
        minlength: [3, "Product name must be at least 3 characters."]
    },
    description: {
        type: String,
        required: [true, "Please provide a description of the product."],
        minlength: [5, "Description must have at least 5 characters."]
    },
    price: {
        type: Number,
        required: [true, "Please provide a price of the product."],

    },
    img: {
        type: String,
        required: [true, "Please provide the image name of the product."],
    },
    category: {
        type: String,
        required: [true, "Please provide category"]
    },
    reviews: [ReviewSchema]
},
{timestamps: true});

var CartSchema = new mongoose.Schema ({
    items: [ProductSchema]
})

mongoose.model('Product', ProductSchema);
mongoose.model('Review', ReviewSchema);
mongoose.model('User', UserSchema);
mongoose.model('Cart', CartSchema);
