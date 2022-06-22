require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // Product.deleteMany() removes any previous data from db before we populate it with the json products array
    await Product.deleteMany();
    await Product.create(jsonProducts);
    // once db has been populated we can exit and stop running
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();

// need to stop server then run code; node populate
