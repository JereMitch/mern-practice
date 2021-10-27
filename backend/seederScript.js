require("dotenv").config();

const productData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productData);
    console.log("Data Import SUCCESS");
    process.exit();
  } catch (error) {
    console.erroe("Error with Data Import");
    process.exit(1);
  }
};

importData();
