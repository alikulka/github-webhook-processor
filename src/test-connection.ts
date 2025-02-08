// Testing DB connection

import { Pool } from "pg";
import { config } from "../src/config";

async function testConnection() {
	const pool = new Pool(config.database);

	try {
		console.log("Attempting to connect to database...");
		const client = await pool.connect();
		console.log("Successfully connected to database!");

		// Test a simple query
		const result = await client.query("SELECT NOW()");
		console.log("Current database time:", result.rows[0].now);
		// console.log('Owners contains:', result);

		client.release();
	} catch (error) {
		console.error("Error connecting to database:", error);
	} finally {
		await pool.end();
	}
}

testConnection();
