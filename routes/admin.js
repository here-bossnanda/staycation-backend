const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.get('/dashboard', adminController.viewDashboard);
router.get('/category', adminController.viewCategory);
router.get('/item', adminController.viewItem);
router.get('/bank', adminController.viewBank);
router.get('/booking', adminController.viewBooking);


module.exports = router;