const router = require('express').Router();

const adminRouter = require('./admin');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.use('/admin',adminRouter)

module.exports = router;