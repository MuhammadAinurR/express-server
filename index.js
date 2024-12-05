const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const authRoutes = require("./routes/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
