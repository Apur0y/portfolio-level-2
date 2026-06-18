const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

export const connectDB=()=>{
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected successfully");
   
  })
  .catch((err) => {
    console.log("Connection failed:", err.message);
  
  });
}

