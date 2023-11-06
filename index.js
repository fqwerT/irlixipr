const express = require("express");
const router = require("./router/router");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 6000;

app.use("/api", router);
app.listen(port, () => {
  console.log(`server is started on port ${port}`);
});
