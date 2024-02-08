Object.defineProperty(exports, "__esModule", { value: true });

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const bodyParser = require("body-parser");
const Config = require("./Config");

const port = Config.PORT || 8080;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require("./routes");
app.use("/api", router);

app.listen(port);
console.info("API listening port: " + port);