const express = require('express');
const mongoose = require('mongoose');
const bugRoutes = require('./routes/bugs');
const errorHandler = require('./middleware/error');

const app = express();
app.use(express.json());

// Routes
app.use('/api/bugs', bugRoutes);

// Error middleware (must be last!)
app.use(errorHandler);

// Start server
mongoose.connect('mongodb://localhost:27017/bugtracker')
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch(err => console.error(err));