const express = require("express");
const app = express();
const port = 8080;

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "API running" });
});

// mount routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});