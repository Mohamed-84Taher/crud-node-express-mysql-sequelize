const db = require("../models");

// create main Models
const Product = db.products;
const Review = db.reviews;

// add new product
const addProduct = async (req, res) => {
  try {
    let { title, price, description, published } = req.body;
    const product = await Product.create({
      title,
      description,
      price,
      published: published ? published : false
    });
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send("server errro");
  }
};

// get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("server errro");
  }
};
// get single product
const getOneProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ where: { id: id } });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send("server errro");
  }
};
// update single product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.update({ ...req.body }, { where: { id: id } });
    res.status(200).send("product updated");
  } catch (error) {
    res.status(500).send("server errro");
  }
};
// delete single product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.destroy({ where: { id: id } });
    res.status(200).send("product deleted");
  } catch (error) {
    res.status(500).send("server errro");
  }
};
// get published products
const getPublishedProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ where: { published: true } });
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("server errro");
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProducts
};
