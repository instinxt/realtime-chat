const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		content: {
			type: String,
			trim: true,
		},
		chatId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Chat",
		},
	},
	{
		timestamp: true,
	}
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
