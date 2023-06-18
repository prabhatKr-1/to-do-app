import mongoose from "mongoose";
export const connectDB = () => {
    mongoose
      .connect(  "mongodb://127.0.0.1:27017/", {
        dbName: "backendapi",
      })
      .then((c) => console.log(`Database Connected`))
      .catch((e) => console.log(e));
  };
  