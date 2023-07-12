const express = require('express');
const blogRoutes = require(`${__dirname}/routes/blogRoutes.js`);

const app = express();
app.use(express.json());

app.use('/blogs', blogRoutes);

module.exports = app;
