const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');

const app = require('./app');

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB connection successful!');
  });

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  body: String,
  comments: [
    {
      body: String,
      date: Date,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

port = process.env.PORT;
app.listen(port, () => {
  console.log('Server is running...');
});
