const express    = require("express"),
      app        = express(),
      bodyParser = require("body-parser"),
      mongoose   = require("mongoose"),
      path       = require('path');

const postRoutes = require("./routes/posts"),
      userRoutes = require("./routes/users");

//DB SETUP
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

mongoose
  .connect("mongodb+srv://dagil123:" + process.env.MONGO_ATLAS_PW + "@cluster0-ox8cv.mongodb.net/post-sphere?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to DB!');
  })
  .catch(() => {
    console.log('Connection to DB failed!');
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join('backend/images')));

//CORS Headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

//ROUTES
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
