const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose.connect("mongodb+srv://daniel:manga321@cluster0.bg3bi.mongodb.net/?retryWrites=true&w=majority", {
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