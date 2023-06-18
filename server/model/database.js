import mongoose from "mongoose";
export const connectDB = () => {
  mongoose
    .connect(process.env.DB, {
      dbName: "backendapi",
    })
    .then((c) => console.log(`Database Connected`))
    .catch((e) => console.log(e));
};
