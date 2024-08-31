const express = require("express");
const mongoose = require("mongoose");
const productModel = require("./models/product.model.js");
const app = express();
const productRoutes = require("./routes/product.route.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoutes);

main()
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/simple-crud-app");
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
