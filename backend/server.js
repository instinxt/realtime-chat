const express = require("express");
const chats = require("./data/chats");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
	console.log("API is running");
	res.send("welcome to homepage");
});

app.use("/api/user/", userRoutes);
app.use("/api/chat/", chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server is listening on ${port}`);
});
