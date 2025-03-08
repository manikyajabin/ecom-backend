require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");



const app = express();
app.use(express.json());
app.use(cors())

connectDB();

app.use("/auth", require("./routes/authRoutes"));
app.use("/cart", require("./routes/cartRoutes"));
app.use("/checkout", require("./routes/paymentRoutes"));
app.get('/',(req,res)=>{
    res.send("getting the server")
})

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
