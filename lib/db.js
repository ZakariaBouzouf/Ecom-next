import mongoose from "mongoose";

async function connectDataBase() {
	let db;

	try {
		db = await mongoose.connect(process.env.MONGO_URI);

		console.log("Connect to DB".yellow.bold);
	} catch (err) {
		console.log("Error while try connecting to DB.".red.bold);
	}
}

export default connectDataBase;
