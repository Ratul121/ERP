const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
    name: String
});

const categorySchema = new mongoose.Schema({
    name: String,
    subcategories: [subcategorySchema]
});

module.exports = mongoose.model('Category', categorySchema);
