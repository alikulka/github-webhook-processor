// This file is used to connect to the RDS db

import dotenv from "dotenv";
dotenv.config();

export const config = {
	database: {
		host: process.env.DB_HOST || "localhost",
		port: Number.parseInt(process.env.DB_PORT || "5432"),
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
	},
};
