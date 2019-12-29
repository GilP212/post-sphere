const express    = require("express"),
      app        = express(),
      bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CORS Headers
app.use((req, res, next) => {
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
);
res.setHeader(
  "Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
);
next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log();
  res.status(201).json({
    message: "Post Added Succesfully"
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "1234",
      title: "First Post",
      content: "First Content."
    },
    {
      id: "2234",
      title: "Second Post",
      content: "Second Content."
    }
  ];
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts
  });
});

module.exports = app;
