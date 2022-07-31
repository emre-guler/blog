const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./index");

dotenv.config({ path: "./config.env" });


const DB = process.env.DATABASE!.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD!
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successful Connection");
  });
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
