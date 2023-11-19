const dotenv = require("dotenv");
dotenv.config();

const db_url = process.env.DB_URL;
const mongoose = require("mongoose");

const connectDb = async () => {
	try {
		await mongoose.connect(db_url);
		console.log("Connected to MongoDB Atlas successfully.");
	} catch (error) {
		throw error;
	}
};

module.exports = connectDb;