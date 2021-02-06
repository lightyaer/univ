require("dotenv").config();
require("./db/db");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
