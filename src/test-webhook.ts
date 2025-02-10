// Testing done here for each webhook event type

import { Pool } from "pg";
import { config } from "../src/config";
import { WebhookProcessor } from "../src/webhookProcessorv2";
import * as sampleWebhook from "./smeeWebhooks";

// async function testRepoWebhooks() {
// 	const pool = new Pool(config.database);
// 	const client = await pool.connect();

// 	try {
// 		const processor = new WebhookProcessor(client);
// 		console.log("Processing webhook...");
// 		const repo_wh1 = sampleWebhook.repoWebhook4;
// 		await processor.processWebhook("repository", repo_wh1);
// 		console.log("Webhook processed successfully");

// 		// Query results
// 		const ownerResult = await client.query(
// 			"SELECT * FROM owners WHERE id = $1",
// 			[repo_wh1.repository.owner.id],
// 		);
// 		console.log("Owner record:", ownerResult.rows[0]);

// 		const repoResult = await client.query(
// 			"SELECT * FROM repositories WHERE id = $1",
// 			[repo_wh1.repository.id],
// 		);
// 		console.log("Repository record:", repoResult.rows[0]);
// 	} catch (error) {
// 		console.error("Error:", error);
// 	} finally {
// 		await client.release();
// 		await pool.end();
// 	}
// }

async function testIssueWebhooks() {
	const pool = new Pool(config.database);
	const client = await pool.connect();

	try {
		const processor = new WebhookProcessor(client);
		console.log("Processing webhook...");
		const issue_wh1 = sampleWebhook.IssueLabeledWebhook;
		await processor.processWebhook("issues", issue_wh1.payload);
		console.log("Webhook processed successfully");

		// Query results
		// const repoResult = await client.query(
		// 	"SELECT * FROM repositories WHERE id = $1",
		// 	[issue_wh1.payload.repository.id],
		// );
		// console.log("Repository record:", repoResult.rows[0]);

		const issueResult = await client.query(
			"SELECT * FROM issues WHERE id = $1",
			[issue_wh1.payload.issue.id],
		);
		console.log("Issue record:", issueResult.rows[0]);
	} catch (error) {
		console.error("Error:", error);
	} finally {
		await client.release();
		await pool.end();
	}
}

async function testPullRequestWebhooks() {
	const pool = new Pool(config.database);
	const client = await pool.connect();

	try {
		const processor = new WebhookProcessor(client);
		console.log("Processing webhook...");
		const pr_wh1 = sampleWebhook.PullRequestClosedWebhook;
		await processor.processWebhook("pull_request", pr_wh1.payload);
		console.log("Webhook processed successfully");

		// Query results
		// const repoResult = await client.query(
		// 	"SELECT * FROM repositories WHERE id = $1",
		// 	[pr_wh1.repository.id],
		// );
		// console.log("Repository record:", repoResult.rows[0]);

		const prResult = await client.query(
			"SELECT * FROM pull_requests WHERE id = $1",
			[pr_wh1.payload.pull_request.id],
		);
		console.log("Pull Request record:", prResult.rows[0]);
	} catch (error) {
		console.error("Error:", error);
	} finally {
		await client.release();
		await pool.end();
	}
}

// async function testIssueCommentWebhooks() {
// 	const pool = new Pool(config.database);
// 	const client = await pool.connect();

// 	try {
// 		const processor = new WebhookProcessor(client);
// 		console.log("Processing webhook...");
// 		const issue_comment_wh1 = sampleWebhook.issueCommentWebhook1;
// 		await processor.processWebhook("issue_comment", issue_comment_wh1);
// 		console.log("Webhook processed successfully");

// 		// Query results
// 		const issueCommentResult = await client.query(
// 			"SELECT * FROM issuecomments WHERE id = $1",
// 			[issue_comment_wh1.comment.id],
// 		);
// 		console.log("Issue Comment record:", issueCommentResult.rows[0]);
// 	} catch (error) {
// 		console.error("Error:", error);
// 	} finally {
// 		await client.release();
// 		await pool.end();
// 	}
// }

// testRepoWebhooks();
testIssueWebhooks();
// testPullRequestWebhooks();
// testIssueCommentWebhooks();
