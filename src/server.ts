import express from "express";
import mustacheExpress from "mustache-express";
import dotenv from "dotenv";
import path from "path";
import router from "./routes";
import { Pet } from "./models/Pet";

dotenv.config();

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustacheExpress());

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.static(path.join(__dirname, "./views/")));
server.use(router);

server.use((req, res) => {
  res.status(404).send("página não encontrada");
});
console.log(Pet.getFromName("a"));

// - Routes
server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
