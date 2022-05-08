var express = require('express');
const {
  getHomepage,
  postCreateBlog,
  getDeleteBlog,
  getShowBlog
} = require('../Controllers/blogController');
var router = express.Router();

/* GET home page. */
router.get('/', getHomepage);

router.post('/create', postCreateBlog);

router.get('/delete/:id', getDeleteBlog);

router.get('/show', getShowBlog);


module.exports = router;