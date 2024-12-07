require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorHandler = require("./utils/errorHandler");
const app = express();
const PORT = process.env.PORT || 3000;

const routes = require("./routes");
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.use("/api", routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
