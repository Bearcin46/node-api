import express from "express";
import axios from "axios";
import cors from "cors";

const server = express();
const SERVER_PORT = 3000;
server.use(cors());

server.get("/", async (req, res) => {
  const placeholder = await axios.get("https://jsonplaceholder.org/comments");
  const response = await placeholder.data;
  res.status(200).json(response);
});

server.listen(SERVER_PORT, () => {
  console.log(`server is running on http://localhost:${SERVER_PORT}`);
});
