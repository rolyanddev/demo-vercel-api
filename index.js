const express = require("express");
const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.json({ msg: "Hello RolyDev!" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server ready on port ${PORT}`);
});

module.exports = app;
