const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// Get All Categories
router.get('/', async (req, res) => {
    const categories = await Category.find();
    res.render('category/list', { categories });
});

// Create New Category
router.post('/', async (req, res) => {
    const { name } = req.body;
    const category = new Category({ name, subcategories: [] });
    await category.save();
    res.redirect('/categories');
});

// Update Category
router.put('/:id', async (req, res) => {
    const { name } = req.body;
    await Category.findByIdAndUpdate(req.params.id, { name });
    res.redirect('/categories');
});

// Delete Category
router.delete('/:id', async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.redirect('/categories');
});

// Add Subcategory
router.post('/:id/subcategories', async (req, res) => {
    const category = await Category.findById(req.params.id);
    category.subcategories.push({ name: req.body.name });
    await category.save();
    res.redirect('/categories');
});

// Delete Subcategory
router.delete('/:categoryId/subcategories/:subcategoryId', async (req, res) => {
    const category = await Category.findById(req.params.categoryId);
    category.subcategories.id(req.params.subcategoryId).remove();
    await category.save();
    res.redirect('/categories');
});

module.exports = router;
