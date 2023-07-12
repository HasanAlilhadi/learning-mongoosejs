exports.getAllBlogs = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'All the blogs',
  });
};
