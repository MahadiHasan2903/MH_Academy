import mongoose from "mongoose";
import colors from "colors";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log(
      colors.bgGreen.white(`Mongodb Connected ${mongoose.connection.host}`)
    );
  } catch (error) {
    console.log(colors.bgRed.white(`Mongodb Server Issue ${error}`));
  }
};

export default connectDB;
