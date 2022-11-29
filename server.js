require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/products", require("./routes/productRoute"));

app.get("/", (req, res) => {
  res.send("test");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
