const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/contact', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

// /admin/add-product => POST
router.post('/contact', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
