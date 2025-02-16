// Testing done here for each webhook event type

import { Pool } from "pg";
import { config } from "../src/config";
import { WebhookProcessor } from "../src/webhookProcessorv2";
import * as sampleWebhook from "./smeeWebhooks";

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
		const pr_wh1 = sampleWebhook.PullRequestLabeledWebhook;
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

async function testIssueCommentWebhooks() {
	const pool = new Pool(config.database);
	const client = await pool.connect();

	try {
		const processor = new WebhookProcessor(client);
		console.log("Processing webhook...");
		const issue_comment_wh1 = sampleWebhook.IssueCommentWebhook;
		await processor.processWebhook("issue_comment", issue_comment_wh1.payload);
		console.log("Webhook processed successfully");

		// Query results
		const issueCommentResult = await client.query(
			"SELECT * FROM issuecomments WHERE id = $1",
			[issue_comment_wh1.payload.comment.id],
		);
		console.log("Issue Comment record:", issueCommentResult.rows[0]);
	} catch (error) {
		console.error("Error:", error);
	} finally {
		await client.release();
		await pool.end();
	}
}

async function testDiscussionWebhooks() {
	const pool = new Pool(config.database);
	const client = await pool.connect();

	try {
		const processor = new WebhookProcessor(client);
		console.log("Processing webhook...");
		const discussion_wh = sampleWebhook.DiscussionAnsweredWebhook;
		await processor.processWebhook("discussion", discussion_wh.payload);
		console.log("Webhook processed successfully");

		// Query results
		// const repoResult = await client.query(
		// 	"SELECT * FROM repositories WHERE id = $1",
		// 	[issue_wh1.payload.repository.id],
		// );
		// console.log("Repository record:", repoResult.rows[0]);

		const discussionResult = await client.query(
			"SELECT * FROM discussions WHERE id = $1",
			[discussion_wh.payload.discussion.id],
		);
		console.log("Issue record:", discussionResult.rows[0]);
	} catch (error) {
		console.error("Error:", error);
	} finally {
		await client.release();
		await pool.end();
	}
}

async function testDiscussionCommentWebhooks() {
	const pool = new Pool(config.database);
	const client = await pool.connect();

	try {
		const processor = new WebhookProcessor(client);
		console.log("Processing webhook...");
		const discussion_comment_wh = sampleWebhook.DiscussionCommentWebhook;
		await processor.processWebhook(
			"discussion_comment",
			discussion_comment_wh.payload,
		);
		console.log("Webhook processed successfully");

		// Query results
		// const repoResult = await client.query(
		// 	"SELECT * FROM repositories WHERE id = $1",
		// 	[issue_wh1.payload.repository.id],
		// );
		// console.log("Repository record:", repoResult.rows[0]);

		const discussionCommentResult = await client.query(
			"SELECT * FROM discussioncomments WHERE id = $1",
			[discussion_comment_wh.payload.comment.id],
		);
		console.log("Issue record:", discussionCommentResult.rows[0]);
	} catch (error) {
		console.error("Error:", error);
	} finally {
		await client.release();
		await pool.end();
	}
}

async function testIssueMilestoneWebhooks() {
	const pool = new Pool(config.database);
	const client = await pool.connect();

	try {
		const processor = new WebhookProcessor(client);
		console.log("Processing webhook...");
		const issue_milestone_wh1 = sampleWebhook.IssueMilestonedWebhook;
		await processor.processWebhook("issues", issue_milestone_wh1.payload);
		console.log("Webhook processed successfully");

		const issueMilestoneResult = await client.query(
			"SELECT * FROM issue_milestones WHERE issue_id = $1",
			[issue_milestone_wh1.payload.issue.id],
		);
		console.log("Issue Milestone Record: ", issueMilestoneResult.rows[0]);
	} catch (error) {
		console.error("Error:", error);
	} finally {
		await client.release();
		await pool.end();
	}
}

async function testDiscussionLabelWebhooks() {
  const pool = new Pool(config.database);
  const client = await pool.connect();

  try {
    const processor = new WebhookProcessor(client);
    console.log("Processing webhook...");
    const discussion_label_wh1 = sampleWebhook.DiscussionLabeledWebhook;
    await processor.processWebhook("discussion", discussion_label_wh1.payload);
    console.log("Webhook processed successfully");

    const discussionLabelResult = await client.query(
      "SELECT * FROM discussion_labels WHERE label_id = $1",
      [discussion_label_wh1.payload.discussion.labels[0].id],
    );
    console.log("Discussion Label Record: ", discussionLabelResult.rows[0]);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.release();
    await pool.end();
  }
}

async function testIssueAssignedWebhooks() {
	const pool = new Pool(config.database);
	const client = await pool.connect();

	try {
		const processor = new WebhookProcessor(client);
		console.log("Processing webhook...");
		const issue_assigned_wh1 = sampleWebhook.IssueAssignedWebhook;
		await processor.processWebhook("issues", issue_assigned_wh1.payload);
		console.log("Webhook processed successfully");

		// Query results
		// const repoResult = await client.query(
		// 	"SELECT * FROM repositories WHERE id = $1",
		// 	[issue_wh1.payload.repository.id],
		// );
		// console.log("Repository record:", repoResult.rows[0]);

		const issueAssigneeResult = await client.query(
			"SELECT * FROM issue_assignees WHERE issue_id = $1",
			[issue_assigned_wh1.payload.issue.id],
		);
		console.log("Issue Assignee record:", issueAssigneeResult.rows[0]);
	} catch (error) {
		console.error("Error:", error);
	} finally {
		await client.release();
		await pool.end();
	}
}

async function testPullRequestAssignedWebhooks() {
	const pool = new Pool(config.database);
	const client = await pool.connect();

	try {
		const processor = new WebhookProcessor(client);
		console.log("Processing webhook...");
		const pr_assigned_wh1 = sampleWebhook.PullRequestAssignedWebhook;
		await processor.processWebhook("pull_request", pr_assigned_wh1.payload);
		console.log("Webhook processed successfully");

		// Query results
		// const repoResult = await client.query(
		// 	"SELECT * FROM repositories WHERE id = $1",
		// 	[issue_wh1.payload.repository.id],
		// );
		// console.log("Repository record:", repoResult.rows[0]);

		const prAssigneeResult = await client.query(
			"SELECT * FROM pull_request_assignees WHERE pull_request_id = $1",
			[pr_assigned_wh1.payload.pull_request.id],
		);
		console.log("Pull Request Assignee record:", prAssigneeResult.rows[0]);
	} catch (error) {
		console.error("Error:", error);
	} finally {
		await client.release();
		await pool.end();
	}
}

async function testSubIssueSubWebhooks() {
	const pool = new Pool(config.database);
	const client = await pool.connect();

	try {
		const processor = new WebhookProcessor(client);
		console.log("Processing webhook...");
		const sub_issue_wh1 = sampleWebhook.subIssueSubWebhook;
		await processor.processWebhook("sub_issue", sub_issue_wh1.payload);
		console.log("Webhook processed successfully");

		// Query results
		// const repoResult = await client.query(
		// 	"SELECT * FROM repositories WHERE id = $1",
		// 	[issue_wh1.payload.repository.id],
		// );
		// console.log("Repository record:", repoResult.rows[0]);

		const subIssueResult = await client.query(
			"SELECT * FROM sub_issue_list WHERE sub_id = $1",
			[sub_issue_wh1.payload.sub_issue_id],
		);
		console.log("Pull Request Assignee record:", subIssueResult.rows[0]);
	} catch (error) {
		console.error("Error:", error);
	} finally {
		await client.release();
		await pool.end();
	}
}

// testIssueWebhooks();
// testPullRequestWebhooks();
// testIssueCommentWebhooks();
// testDiscussionWebhooks();
// testDiscussionCommentWebhooks();
// testIssueMilestoneWebhooks();
// testDiscussionLabelWebhooks();
// testIssueAssignedWebhooks();
// testPullRequestAssignedWebhooks();
testSubIssueSubWebhooks();
