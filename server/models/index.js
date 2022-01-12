const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
  activationLink: { type: DataTypes.STRING },
});

const Cart = sequelize.define("cart", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  //   rating: { type: DataTypes.STRING, defaultValue: 0 },
  brand: { type: DataTypes.ENUM("one", "two", "three") },
  type: {
    type: DataTypes.ENUM("Man", "Woman", "Kids", "Teen"),
    allowNull: false,
  },
  img: { type: DataTypes.STRING, allowNull: false },
});

const CartProduct = sequelize.define("cart_product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});


const Comment = sequelize.define("comment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  owner: { type: DataTypes.STRING, allowNull: false },
  text: { type: DataTypes.TEXT, allowNull: false },
});

// const Rating = sequelize.define('rating', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     rate: {type: DataTypes.INTEGER, allowNull: false}
// })

User.hasMany(Product);
Product.belongsTo(User);

User.hasOne(Cart);
Cart.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Product.hasMany(Comment);
Comment.belongsTo(Product);

// Rating.hasOne(User);
//User.belongsTo(Rating);

// Product.hasMany(Rating);
// Rating.belongsTo(Product);

Cart.belongsToMany(Product, { through: CartProduct });
Product.belongsToMany(Cart, { through: CartProduct });

module.exports = {
  User,
  Cart,
  Product,
  CartProduct,
  Comment,
  // Rating,
};
