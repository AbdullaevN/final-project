const { Op } = require("sequelize");
const { NOT_FOUND } = require("../utils/consts");
const ErrorHandler = require("../utils/error-handler");
const { Product } = require("./../models");

// const PictureService = require("./../services/picture-service.js");

const create = async (name, price, brand, type,img) => {
  const product = await Product.create({ name, price, brand, type,img });

  return product;
};

const getAll = async ({ q, offset, limit, type }) => {
  if (q || type) {
    if (!q) q = "";
    if (type) {
      return await Product.findAndCountAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.iLike]: "%" + q + "%",
              },
            },
          ],
          type,
        },
        // include: [
        //   {
        //     model: Picture,
        //   },
        // ],
        limit,
        offset,
      });
    } else {
      return await Product.findAndCountAll({
        where: {
          name: {
            [Op.iLike]: "%" + q + "%",
          },
        },
        // include: [
        //   {
        //     model: Picture,
        //   },
        // ],
        limit,
        offset,
      });
    }
  }

  return await Product.findAndCountAll({
    limit,
    offset,
    // include: [
    //   {
    //     model: Picture,
    //   },
    // ],
  });
};

const deleteOne = async (id) => {
  return await Product.destroy({ where: { id } });
};

const update = async (id, name, price, brand, type,img) => {
  return await Product.update(
    {name, price, brand, type,img },
    { where: { id } }
  );
    return await Product.patch({ where: { id } });
};
const getOne = async (id) => {
  const product = await Product.findOne({
    where: { id },
  });
  console.log(product);
  return product.dataValues;
};
module.exports = {
  create,
  getAll,
  deleteOne,
  update,
  getOne
};