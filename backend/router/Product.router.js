const { Router } = require('express');
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controller/Product.controller');
const { decode } = require('../middlewares/decodeJwt');
const upload = require('../utils/imageUpload');

const productRouter = Router();

productRouter.get('/', getProducts);
productRouter.get('/:productId', getProductById);
productRouter.post('/create', decode, upload.single("image"), createProduct);
productRouter.patch('/:productId', decode,upload.single("image"), updateProduct);
productRouter.delete('/:productId', decode, deleteProduct);

module.exports = productRouter;