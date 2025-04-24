// const express = require('express');
// const router = express.Router();
// const {
//   registerUser,
//   loginUser,
//   getUserProfile,
// } = require('../controllers/userController');
// const { protect } = require('../middleware/authMiddleware');

// router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.get('/profile', protect, getUserProfile);      

// module.exports = router;




const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
// const { updateCart } = require("../controllers/cartController");


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);

module.exports = router;
