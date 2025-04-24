// const jwt = require('jsonwebtoken');
// const User = require('../models/userModel');

// const protect = async (req, res, next) => {
//   let token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'Not authorized, no token' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);     
//     req.user = await User.findById(decoded.id).select('-password');
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Not authorized, token failed' });
//   }
// };

// // middleware to  check if the user is an admin
// const admin = (req,res,next) => {
//   if (req.user && req.user.role === "admin") {
//     next();
//   } else {
//     res.status(403).json({ message: "Not authorized as an admin"});
//   }
// };

// module.exports = { protect, admin };





// const jwt = require('jsonwebtoken');
// const User = require('../models/userModel');

// const protect = async (req, res, next) => {
//   let token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'Not authorized, no token' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     console.log('Decoded JWT:', decoded);  // Token ko decode karne ke baad log karen

//     req.user = await User.findById(decoded.id).select('-password');
    
//     if (!req.user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     console.log('User from DB:', req.user);  // User ko database se fetch karne ke baad log karen

//     next();
//   } catch (error) {
//     console.error('JWT error:', error);  // Agar token verification mein koi error ho toh log karen
//     return res.status(401).json({ message: 'Not authorized, token failed' });
//   }
// };

// module.exports = { protect };






// const jwt = require('jsonwebtoken');
// const User = require('../models/userModel');

// const protect = async (req, res, next) => {
//   let token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'Not authorized, no token' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     req.user = await User.findById(decoded.id).select('-password');

//     if (!req.user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     next();
//   } catch (error) {
//     console.error('JWT error:', error);
//     return res.status(401).json({ message: 'Not authorized, token failed' });
//   }
// };

// const admin = (req, res, next) => {
//   if (req.user && req.user.role === 'admin') {
//     next();
//   } else {
//     res.status(403).json({ message: 'Not authorized as admin' });
//   }
// };

// module.exports = { protect, admin };





// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized as admin' });
  }
};

module.exports = { protect, admin };
