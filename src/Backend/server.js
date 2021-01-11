const config = require("config");
const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/dashboard");

app.use("/api", apiRoutes);

if (!config.get("jwtPrivateKey")) {
  console.error("Fatal Error: jwtPrivateKey is not defined.");
  process.exit(1);
}

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Wiredelta app listening at http://localhost:${PORT}`);
  });
});

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();

// var corsOptions = {
//   origin: "http://localhost:3001"
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to my wiredelta application." });
// });

// require("./routes/dashboard")(app);

// // set port, listen for requests
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });
