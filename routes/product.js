const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product')



router.get('/',ProductController.getProduct)


router.post('/',)


router.delete('/:id',)


module.exports = router;


