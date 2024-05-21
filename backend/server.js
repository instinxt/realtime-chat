const express = require("express");
const app = express();
const { chats } = require("./data/chats");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
	console.log("API is running");
	res.send("welcome to homepage");
});

app.get("/api/chat", (req, res) => {
	res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
	const { id } = req.params;
	const chat = chats.find((chat) => chat._id === id);

	res.send(chat);
});

app.listen(port, () => {
	console.log(`Server is listening on ${port}`);
});
