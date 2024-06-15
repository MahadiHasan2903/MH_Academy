import { Redis } from "ioredis";
import colors from "colors";
require("dotenv").config();

const redisClient = () => {
  if (process.env.REDIS_URL) {
    console.log(colors.bgMagenta.black("Redis Connected successfully"));
    return process.env.REDIS_URL;
  }
  throw new Error("Redis connection failed");
};

export const redis = new Redis(redisClient());
