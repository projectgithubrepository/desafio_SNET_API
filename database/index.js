const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose.connect("mongodb://localhost:27017/Users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;

  db.on("error", (error) => console.log(error));
  db.once("open", () => {
    console.log("📁📁📁 Connected to the database");
  });
}

module.exports = connectToDatabase;