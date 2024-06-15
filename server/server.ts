import { v2 as cloudinary } from "cloudinary";
import colors from "colors";
import http from "http";
import connectDB from "./utils/db";
import { initSocketServer } from "./socketServer";
import { app } from "./app";
require("dotenv").config();
const server = http.createServer(app);

// cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

initSocketServer(server);

// Server
const port = process.env.PORT || 8080;

// create server
server.listen(port, () => {
  console.log(
    colors.bgCyan.white(
      `Server is running in ${process.env.NODE_MODE} Mode on port ${port}`
    )
  );

  connectDB();
});


