const express = require('express');
const app = express();

const userRoutes = require('./routes/user.routes');
app.use('/users', userRoutes);

app.use(express.json());

module.exports = app;