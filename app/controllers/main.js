// app/controller/dashboard.js
// CODING STANDARD - https://github.com/felixge/node-style-guide

// ============
// Dependencies
// ============
// Package Dependencies
var express = require('express'); 	// Routing Framework
var router	= express.Router();		// API Routes

// ======
// Routes
// ======
/**
	* Render Home Page
	**/
router.get('/', function(req, res) {
	res.render('index');
});

/**
	* Render About Page
	**/
router.get('/about', function(req, res) {
	res.render('index');
});

/**
	* Render Experience Page
	**/
router.get('/experience', function(req, res) {
	res.render('index');
});

/**
	* Render Contact Page
	**/
router.get('/contact', function(req, res) {
	res.render('index');
});

/**
	* Template Render
	**/
router.get('/pages/:name', function(req, res) {
	res.render('pages/' + req.params.name);
});

// =======
// Exports
// =======
module.exports = router;