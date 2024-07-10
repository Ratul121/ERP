const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://Ratul:Ratul123456@c1.niqlysu.mongodb.net/ERP?retryWrites=true&w=majority&appName=C1', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
const categoryRoutes = require('./routes/category');
app.use('/categories', categoryRoutes);

// Start Server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
