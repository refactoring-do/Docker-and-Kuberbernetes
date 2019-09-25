const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const ProductSchema = new Schema({
    imageUrl: String,
    product: String,
    price: String,
    reviewCount: String
});


module.exports = mongoose.model("Product", ProductSchema);