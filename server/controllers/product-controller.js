const { CREATE_SUCCESS, DELETE_SUCCESS } = require("../utils/consts");
const ErrorHandler = require("../utils/error-handler");
const ProductService = require("../services/product-service.js");

const create = async (req, res, next) => {
  try {
    const { name, price, brand, type, img } = req.body;
    const { id } = req.user;
    // let images;
    // if (req.files) {
    //   images = req.files.images;
    // }
    const { id: problemId } = await ProductService.create(
      name,
      price,
      brand,
      type,
      img,
      id,
     
      // images
    );
    res.json({ message: CREATE_SUCCESS, problemId });
  } catch (e) {
    next(e);
  }
};
const getAll = async (req, res, next) => {
  try {
    let { q, page, limit, tag } = req.query;
    page = page || 1;
    limit = limit || 6;

    const offset = page * limit - limit;
    const problems = await ProductService.getAll({ offset, page, q, limit });
    // console.log(req.query);
    res.json(problems);
  } catch (e) {
    // res.status(404).json({ message: "tag not found" });
    next(e);
  }
};
const getOne = async (req, res, next) => {
  try {
    // let { q, page, limit, tag } = req.query;
    // page = page || 1;
    // limit = limit || 6;
    // const offset = page * limit - limit;
    const { id } = req.params;

    const product = await ProductService.getOne(id);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "qwe not found" });
  }
};
const update = async (req, res, next) => {
  try {
    const { name, price, brand, type, img } = req.body;

    const { id } = req.params;
    await ProductService.update(id, name, price, brand, type, img);
    res.json({ message: DELETE_SUCCESS });
  } catch (error) {
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    await ProductService.deleteOne(id);
    res.json({ message: DELETE_SUCCESS });
  } catch (e) {
    next(e);
  }
};
module.exports = {
  create,
  getAll,
  deleteOne,
  getOne,
  update,
};