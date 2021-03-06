const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mogoURI;

//Connect to mongo using mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//Use Routes...Hit this routes and it goes to the items file to get the default "/"
app.use("/api/items", items);

// heroku uses process.env.PORT or alternatively 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on ${port}`));
