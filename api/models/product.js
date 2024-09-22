const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, 
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageURL: { type: String },
    category: { type: String, required: true }, 
    stock: { type: Number, required: true, default: 0 }, 
    createdAt: { type: Date, default: Date.now }, 
    updatedAt: { type: Date, default: Date.now } 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
