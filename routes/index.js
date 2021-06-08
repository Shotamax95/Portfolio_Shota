let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
// router.get('/about', function(req, res, next) {
//   res.render('content/about', { title: 'About' });
// });

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('content/projects', { title: 'Projects' });
});

/* GET services page. */
router.get('/skills', function(req, res, next) {
  res.render('content/skills', { title: 'Skills' });
});

// router.get('*', function(req, res, next) {
//   res.render('error', { title: 'error' });
// });



module.exports = router;
