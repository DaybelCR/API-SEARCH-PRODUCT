const { Router } = require('express');

const productRouter=require('./productRouter.js');

const router = Router();

router.use('/product',productRouter)

module.exports = router;