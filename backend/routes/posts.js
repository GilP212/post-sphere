const express = require("express"),
      router  = express.Router();

const checkAuth = require('../middleware/check-auth'),
      extractFile = require('../middleware/file'),
      PostController = require('../controllers/posts');


// CREATE
router.post(
  "",
  checkAuth,
  extractFile,
  PostController.createPost
);


// UPDATE
router.put(
  "/:id",
  checkAuth,
  extractFile,
  PostController.updatePost
);

// INDEX - Get all posts.
router.get(
  "",
  PostController.getPosts
);

// SHOW
router.get(
  "/:id",
  PostController.getPost
);

// DELETE
router.delete(
  "/:id",
  checkAuth,
  PostController.deletePost
);

module.exports = router;
