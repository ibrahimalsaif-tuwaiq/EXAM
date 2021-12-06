const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

require("./db");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);

dotenv.config();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
