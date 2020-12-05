const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.connect(
  "mongodb+srv://aircnc:aircnc@aircnc.tjip1.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edicao, delete)
// req.body = Acessar corpo da requisicao (para criacao, edicao)

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
