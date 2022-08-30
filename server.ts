const dotenv = require("dotenv");
const mongoose = require("mongoose");
const api = require("./index");
const user = require("./models/userModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE!.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD!
);
mongoose.set("debug", true);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successful Connection");
  });

const port = 3000;
api.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
