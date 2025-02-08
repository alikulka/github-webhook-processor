
import dotenv from "dotenv";
// server.ts
import express from "express";
import { Pool } from "pg";
import { WebhookProcessor } from "./webhookProcessor";

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

const pool = new Pool({
	host: process.env.DB_HOST,
	port: Number.parseInt(process.env.DB_PORT || "5432"),
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	ssl: {
		rejectUnauthorized: false, // For development - use proper SSL cert in production
	},
	// Connection pool settings
	max: 20, // Maximum number of clients in the pool
	idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed
	connectionTimeoutMillis: 2000, // How long to wait when connecting a new client
});

// Add basic error handling for the pool
pool.on("error", (err) => {
	console.error("Unexpected error on idle client", err);
	process.exit(-1);
});

app.post("/webhook", async (req, res) => {
	const eventType = req.headers["x-github-event"] as string;
	const payload = req.body;

	console.log("Received webhook:", eventType);
	console.log("Payload:", JSON.stringify(payload, null, 2));

	let client;
	try {
		client = await pool.connect();
		const processor = new WebhookProcessor(client);
		await processor.processWebhook(eventType, payload);
		res.status(200).send("Processed successfully");
	} catch (error) {
		console.error("Error processing webhook:", error);
		res.status(500).send("Error processing webhook");
	} finally {
		if (client) {
			client.release();
		}
	}
});

// Add basic health check endpoint
app.get("/health", async (req, res) => {
	try {
		const client = await pool.connect();
		await client.query("SELECT NOW()");
		client.release();
		res.status(200).send("OK");
	} catch (error) {
		console.error("Health check failed:", error);
		res.status(500).send("DB connection failed");
	}
});

// Graceful shutdown
process.on("SIGTERM", async () => {
	console.log("SIGTERM signal received: closing HTTP server");
	await pool.end();
	process.exit(0);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
	console.log(`Database host: ${process.env.DB_HOST}`);
});
