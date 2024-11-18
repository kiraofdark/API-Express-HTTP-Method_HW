const express = require("express");

const app = express();
const port = 3000;


app.use(express.json());

const products = [
  { id: 1, name: "Product 1" , price: 100 },
  { id: 2, name: "Product 2" , price: 200 },
  { id: 3, name: "Product 3" , price: 300 },
];

// POST สำหรับ Create
app.post("/products", (req, res) => {
  products.push(req.body);
  res.json(products);
});

// GET สำหรับ Read
app.get("/products", (req, res) => {
  res.json(products);
});

// GET สำหรับ Read แบบระบุ id
app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((s) => s.id === id);
  console.log(id)
  res.json(product);
});

app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = req.body;
  const index = products.findIndex((s) => s.id === id);
  console.log("Delete: " + id)
  products[index] = product;
  console.log("Delete index: " + index)
  res.json(product);
});

app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((s) => s.id === id);
  console.log(id)
  products.splice(index, 1);
  res.json(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});