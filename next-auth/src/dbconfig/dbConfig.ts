import mongoose, { mongo } from "mongoose";

export async function connect() {
  try {
    // Connect to DB
    mongoose.connect(process.env.MONGO_URI!);
    // Grab a connection
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongo Db Connected Successfully");
    });
    connection.on("error", (err) => {
      console.log("Mongo db Connection error, make sure it's running " + err);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}
