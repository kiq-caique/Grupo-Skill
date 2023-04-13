const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ijxidaw.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
    )
    .then(() => console.log("Conexão bem-sucedida"))
    .catch((error) => console.log("Erro ao se conectar " + error));
};

module.exports = connectToDatabase;
