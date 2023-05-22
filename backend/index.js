const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./src/configurations/Database");

const userRouter = require("./src/apis/UserAPI");

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello Node!");
});

// Routes
app.use("/api", userRouter);

// Start the server
app.listen(port, () => {
  console.log("\x1b[35m%s\x1b[0m", `Server is running on port: ${port}`);
});
//# sourceMappingURL=index.js.map
