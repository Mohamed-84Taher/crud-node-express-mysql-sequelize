const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/addproduct", productController.addProduct);
router.get("/allproducts", productController.getAllProducts);
router.get("/oneproduct/:id", productController.getOneProduct);
router.patch("/updateproduct/:id", productController.updateProduct);
router.delete("/deleteproduct/:id", productController.deleteProduct);
router.get("/publishedproducts", productController.getPublishedProducts);

module.exports = router;
