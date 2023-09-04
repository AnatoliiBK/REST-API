const mongoose = require("mongoose");

require("dotenv").config({ override: true, debug: true });

const { DB_HOST, PORT = 3000 } = process.env;
// console.log(process.env.DB_HOST);
// console.log(process.env.SECRET_KEY);

const app = require("./app");

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
