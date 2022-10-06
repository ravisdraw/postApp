const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.use('/api/posts', (req, res, next) => {
  const posts = [{
      id: 1,
      title: "apple",
      content: "apple da venna!!!"
    },
    {
      id: 2,
      title: "banana",
      content: "banana da venna!!!"
    }
  ]

  return res.status(200).json({
    message: "Posts fetched Succesfully!",
    post: posts
  })
});

module.exports = app;
