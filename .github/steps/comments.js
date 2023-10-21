// Create Webserver


// Import Module - Establish const
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle request - use router.get
router.get('/', commentController.comment_index);
router.post('/', commentController.comment_create_post);
router.get('/create', commentController.comment_create_get);
router.get('/:id', commentController.comment_details);
router.delete('/:id', commentController.comment_delete);

// Export router
module.exports = router;