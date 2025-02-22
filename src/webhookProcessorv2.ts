// This file contains the code that handles labels and milestone events as linked to issues and PRs
// It is the most recent file being worked on but has not be tested AT ALL
// Contains many bugs needed to be fixed

import type { PoolClient } from "pg";
import { PayloadMapper } from "./createFromPayload";
import type * as types from "./types";
import { Upserts } from "./upsert";

// Interfaces for type safety
interface DatabaseOperations<T> {
	tableName: string;
	operations: {
		insert: (entity: T) => Promise<void>;
		update: (entity: T) => Promise<void>;
		upsert: (entity: T) => Promise<void>;
	};
	entityName: string;
	identifierColumn: string;
}

enum WebhookEventType {
	Repository = "repository",
	Issue = "issues",
	PullRequest = "pull_request",
	IssueComment = "issue_comment",
	IssueCommentReaction = "issue_comment_reaction",
	Discussion = "discussion",
	DiscussionComment = "discussion_comment",
	RepoLabel = "label",
	Milestone = "milestone",
	SubIssue = "sub_issues",
}

enum WebhookAction {
	Created = "created",
	Deleted = "deleted",
	Edited = "edited",
	Archived = "archived",
	Unarchived = "unarchived",
	Opened = "opened",
	Closed = "closed",
	Reopened = "reopened",
	Assigned = "assigned",
	Unassigned = "unassigned",
	Labeled = "labeled",
	Unlabeled = "unlabeled",
	Added = "added",
	Removed = "removed",
	Pinned = "pinned",
	Unpinned = "unpinned",
	Locked = "locked",
	Unlocked = "unlocked",
	Transferred = "transferred",
	CategoryChanged = "category_changed",
	Answered = "answered",
	Unanswered = "unanswered",
	Milestoned = "milestoned",
	Demilestoned = "demilestoned",
}

export class WebhookProcessor {
	private upserts: Upserts;

	// Database operation configurations: Maps query to operation for respective table
	private ownerOperations: DatabaseOperations<types.Owner> = {
		tableName: "owners",
		operations: {
			insert: (owner) => this.upserts.insertOwner(owner),
			update: (owner) => this.upserts.updateOwner(owner),
			upsert: (owner) => this.upserts.upsertOwner(owner),
		},
		entityName: "Owner",
		identifierColumn: "id",
	};

	private repositoryOperations: DatabaseOperations<types.Repository> = {
		tableName: "repositories",
		operations: {
			insert: (repo) => this.upserts.insertRepository(repo),
			update: (repo) => this.upserts.updateRepository(repo),
			upsert: (repo) => this.upserts.upsertRepository(repo),
		},
		entityName: "Repository",
		identifierColumn: "id",
	};

	private issueOperations: DatabaseOperations<types.Issue> = {
		tableName: "issues",
		operations: {
			insert: (issue) => this.upserts.insertIssue(issue),
			update: (issue) => this.upserts.updateIssue(issue),
			upsert: (issue) => this.upserts.upsertIssue(issue),
		},
		entityName: "Issue",
		identifierColumn: "id",
	};

	private pullRequestOperations: DatabaseOperations<types.PullRequest> = {
		tableName: "pull_requests",
		operations: {
			insert: (pr) => this.upserts.insertPullRequest(pr),
			update: (pr) => this.upserts.updatePullRequest(pr),
			upsert: (pr) => this.upserts.upsertPullRequest(pr),
		},
		entityName: "Pull Request",
		identifierColumn: "id",
	};

	private issueCommentOperations: DatabaseOperations<types.IssueComment> = {
		tableName: "issuecomments",
		operations: {
			insert: (issue_comment) => this.upserts.insertIssueComment(issue_comment),
			update: (issue_comment) => this.upserts.updateIssueComment(issue_comment),
			upsert: (issue_comment) => this.upserts.upsertIssueComment(issue_comment),
		},
		entityName: "Issue Comment",
		identifierColumn: "id",
	};

	private discussionCategoriesOperations: DatabaseOperations<types.DiscussionCategory> =
		{
			tableName: "discussioncategories",
			operations: {
				insert: (discussion_category) =>
					this.upserts.insertDiscussionCategories(discussion_category),
				update: (discussion_category) =>
					this.upserts.updateDiscussionCategories(discussion_category),
				upsert: (discussion_category) =>
					this.upserts.upsertDiscussionCategories(discussion_category),
			},
			entityName: "Discussion Categories",
			identifierColumn: "id",
		};

	private discussionCommentOperations: DatabaseOperations<types.DiscussionComment> =
		{
			tableName: "discussioncomments",
			operations: {
				insert: (discussion_comment) =>
					this.upserts.insertDiscussionComment(discussion_comment),
				update: (discussion_comment) =>
					this.upserts.updateDiscussionComment(discussion_comment),
				upsert: (discussion_comment) =>
					this.upserts.upsertDiscussionComment(discussion_comment),
			},
			entityName: "Discussion Comment",
			identifierColumn: "id",
		};

	private discussionPollOperations: DatabaseOperations<types.DiscussionPoll> = {
		tableName: "discussionpolls",
		operations: {
			insert: (discussion_poll) =>
				this.upserts.insertDiscussionPoll(discussion_poll),
			update: (discussion_poll) =>
				this.upserts.updateDiscussionPoll(discussion_poll),
			upsert: (discussion_poll) =>
				this.upserts.upsertDiscussionPoll(discussion_poll),
		},
		entityName: "Discussion Poll",
		identifierColumn: "id",
	};

	private discussionPollOptionsOperations: DatabaseOperations<types.DiscussionPollOption> =
		{
			tableName: "discussionpolloptions",
			operations: {
				insert: (discussion_poll_option) =>
					this.upserts.insertDiscussionPollOptions(discussion_poll_option),
				update: (discussion_poll_option) =>
					this.upserts.updateDiscussionPollOptions(discussion_poll_option),
				upsert: (discussion_poll_option) =>
					this.upserts.upsertDiscussionPollOptions(discussion_poll_option),
			},
			entityName: "Discussion Poll Option",
			identifierColumn: "id",
		};

	private milestoneOperations: DatabaseOperations<types.Milestone> = {
		tableName: "milestones",
		operations: {
			insert: (milestone) => this.upserts.insertMilestone(milestone),
			update: (milestone) => this.upserts.updateMilestone(milestone),
			upsert: (milestone) => this.upserts.upsertMilestone(milestone),
		},
		entityName: "Milestone",
		identifierColumn: "id",
	};

	private repoLabelOperations: DatabaseOperations<types.RepoLabel> = {
		tableName: "repo_labels",
		operations: {
			insert: (repo_label) => this.upserts.insertRepoLabels(repo_label),
			update: (repo_label) => this.upserts.updateRepoLabels(repo_label),
			upsert: (repo_label) => this.upserts.upsertRepoLabels(repo_label),
		},
		entityName: "Repo Label",
		identifierColumn: "id",
	};

	private issueLabelOperations: DatabaseOperations<types.IssueLabel> = {
		tableName: "issue_labels",
		operations: {
			insert: (issue_label) => this.upserts.insertIssueLabels(issue_label),
			update: (issue_label) => this.upserts.updateIssueLabels(issue_label),
			upsert: (issue_label) => this.upserts.upsertIssueLabels(issue_label),
		},
		entityName: "Issue Label",
		identifierColumn: "issue_id",
	};

	private discussionOperations: DatabaseOperations<types.Discussion> = {
		tableName: "discussions",
		operations: {
			insert: (discussion) => this.upserts.insertDiscussion(discussion),
			update: (discussion) => this.upserts.updateDiscussion(discussion),
			upsert: (discussion) => this.upserts.upsertDiscussion(discussion),
		},
		entityName: "Discussion",
		identifierColumn: "id",
	};

	private discussionLabelOperations: DatabaseOperations<types.DiscussionLabel> =
		{
			tableName: "discussion_labels",
			operations: {
				insert: (discussion_label) =>
					this.upserts.insertDiscussionLabels(discussion_label),
				update: (discussion_label) =>
					this.upserts.updateDiscussionLabels(discussion_label),
				upsert: (discussion_label) =>
					this.upserts.upsertDiscussionLabels(discussion_label),
			},
			entityName: "Discussion Label",
			identifierColumn: "discussion_id",
		};

	private pullRequestLabelOperations: DatabaseOperations<types.PullRequestLabel> =
		{
			tableName: "pull_request_labels",
			operations: {
				insert: (pull_request_label) =>
					this.upserts.insertPullRequestLabels(pull_request_label),
				update: (pull_request_label) =>
					this.upserts.updatePullRequestLabels(pull_request_label),
				upsert: (pull_request_label) =>
					this.upserts.upsertPullRequestLabels(pull_request_label),
			},
			entityName: "Pull Request Label",
			identifierColumn: "pull_request_id",
		};

	private issueMilestoneOperations: DatabaseOperations<types.IssueMilestone> = {
		tableName: "issue_milestones",
		operations: {
			insert: (issue_milestone) =>
				this.upserts.insertIssueMilestone(issue_milestone),
			update: (issue_milestone) =>
				this.upserts.updateIssueMilestone(issue_milestone),
			upsert: (issue_milestone) =>
				this.upserts.upsertIssueMilestone(issue_milestone),
		},
		entityName: "Issue Milestone",
		identifierColumn: "issue_id",
	};

	private pullRequestMilestoneOperations: DatabaseOperations<types.PullRequestMilestone> =
		{
			tableName: "pullrequestmilestones",
			operations: {
				insert: (pull_request_milestone) =>
					this.upserts.insertPullRequestMilestone(pull_request_milestone),
				update: (pull_request_milestone) =>
					this.upserts.updatePullRequestMilestone(pull_request_milestone),
				upsert: (pull_request_milestone) =>
					this.upserts.upsertPullRequestMilestone(pull_request_milestone),
			},
			entityName: "Pull Request Milestone",
			identifierColumn: "id",
		};

	private issueAssigneeOperations: DatabaseOperations<types.IssueAssignee> = {
		tableName: "issue_assignees",
		operations: {
			insert: (issue_assignee) =>
				this.upserts.insertIssueAssignee(issue_assignee),
			update: (issue_assignee) =>
				this.upserts.updateIssueAssignee(issue_assignee),
			upsert: (issue_assignee) =>
				this.upserts.upsertIssueAssignee(issue_assignee),
		},
		entityName: "Issue Assignee",
		identifierColumn: "issue_id",
	};

	private pullRequestAssigneeOperations: DatabaseOperations<types.PullRequestAssignee> =
		{
			tableName: "pull_request_assignees",
			operations: {
				insert: (pull_request_assignee) =>
					this.upserts.insertPullRequestAssignee(pull_request_assignee),
				update: (pull_request_assignee) =>
					this.upserts.updatePullRequestAssignee(pull_request_assignee),
				upsert: (pull_request_assignee) =>
					this.upserts.upsertPullRequestAssignee(pull_request_assignee),
			},
			entityName: "Pull Request Assignee",
			identifierColumn: "pull_request_id",
		};

	private subIssueListOperations: DatabaseOperations<types.SubIssueList> = {
		tableName: "sub_issue_list",
		operations: {
			insert: (sub_issue_list) =>
				this.upserts.insertSubIssueList(sub_issue_list),
			update: (sub_issue_list) =>
				this.upserts.updateSubIssueList(sub_issue_list),
			upsert: (sub_issue_list) =>
				this.upserts.upsertSubIssueList(sub_issue_list),
		},
		entityName: "Sub Issue List",
		identifierColumn: "parent_id",
	};

	constructor(private client: PoolClient) {
		this.upserts = new Upserts(client);
	}

	// Checks if record exists in table. If record exists -> update. If not -> insert
	private async handleDatabaseOperation<T>(
		entity: T,
		operations: DatabaseOperations<T>,
		identifier: number | string,
	): Promise<void> {
		try {
			console.log(`Performing upsert on ${operations.entityName}.`);
			await operations.operations.upsert(entity);
		} catch (error) {
			console.error(
				`Error handling ${operations.entityName} operation:`,
				error,
			);
			throw error;
		}
	}

	private async processRepositoryEvent(payload: any): Promise<void> {
		const owner = PayloadMapper.createOwnerFromPayload(
			payload.repository.owner,
		);
		const repo = PayloadMapper.createRepositoryFromPayload(payload, owner);

		// Always handle owner first due to foreign key constraints
		await this.handleDatabaseOperation(owner, this.ownerOperations, owner.id);

		// Then handle repository
		await this.handleDatabaseOperation(
			repo,
			this.repositoryOperations,
			repo.id,
		);
	}

	private async processIssueEvent(payload: any): Promise<void> {
		// console.log(payload)
		const owner = PayloadMapper.createOwnerFromPayload(payload.issue.user);
		const repo = PayloadMapper.createRepositoryFromPayload(payload, owner);
		const issue = PayloadMapper.createIssueFromPayload(payload);

		// Handle owner first
		await this.handleDatabaseOperation(owner, this.ownerOperations, owner.id);

		await this.handleDatabaseOperation(
			repo,
			this.repositoryOperations,
			repo.id,
		);

		// the idea is to do specific things depending on the webhook action
		// for opened, an insert takes place. for closed, an updated takes place
		if (payload.action === WebhookAction.Opened) {
			await this.handleDatabaseOperation(issue, this.issueOperations, issue.id);
		} else if (payload.action === WebhookAction.Closed) {
			await this.handleDatabaseOperation(issue, this.issueOperations, issue.id);
		}
	}

	private async processPullRequestEvent(payload: any): Promise<void> {
		const owner = PayloadMapper.createOwnerFromPayload(
			payload.pull_request.user,
		);
		const repo = PayloadMapper.createRepositoryFromPayload(payload, owner);
		const pullRequest = PayloadMapper.createPullRequestFromPayload(payload);

		// Handle owner first
		await this.handleDatabaseOperation(owner, this.ownerOperations, owner.id);

		// Then repository
		await this.handleDatabaseOperation(
			repo,
			this.repositoryOperations,
			repo.id,
		);

		// Then pull request
		if (payload.action === WebhookAction.Opened) {
			await this.handleDatabaseOperation(
				pullRequest,
				this.pullRequestOperations,
				pullRequest.id,
			);
		}

		// if (payload.action === WebhookAction.Closed) {
		// 	await this.handleDatabaseOperation(
		// 		pullRequest,
		// 		this.pullRequestOperations,
		// 		pullRequest.id,
		// 	);
		// }
	}

	private async processLabel(payload: any, context: string): Promise<void> {
		// Then handle the junction table based on context
		switch (context) {
			case "issue": {
				// console.log(payload.issue.labels);

				const repo_id = payload.repository.id;

				const issue = PayloadMapper.createIssueFromPayload(payload);

				await this.handleDatabaseOperation(
					issue,
					this.issueOperations,
					issue.id,
				);

				for (const labelData of payload.issue.labels) {
					console.log(labelData);
					const repoLabel = PayloadMapper.createRepoLabelsFromPayload(
						labelData,
						repo_id,
					);
					// console.log(issueLabel);
					await this.handleDatabaseOperation(
						repoLabel,
						this.repoLabelOperations,
						repoLabel.id,
					);

					const issueLabel = PayloadMapper.createIssueLabelFromPayload(
						payload.issue.id,
						labelData.id,
					);

					await this.handleDatabaseOperation(
						issueLabel,
						this.issueLabelOperations,
						issueLabel.issue_id,
					);
				}
				break;
			}

			case "pull_request": {
				const repo_id = payload.repository.id;

				const pr = PayloadMapper.createPullRequestFromPayload(payload);

				await this.handleDatabaseOperation(
					pr,
					this.pullRequestOperations,
					pr.id,
				);

				for (const labelData of payload.pull_request.labels) {
					console.log(labelData);
					const repoLabel = PayloadMapper.createRepoLabelsFromPayload(
						labelData,
						repo_id,
					);
					// console.log(issueLabel);
					await this.handleDatabaseOperation(
						repoLabel,
						this.repoLabelOperations,
						repoLabel.id,
					);

					const prLabel = PayloadMapper.createPullRequestLabelFromPayload(
						payload.pull_request.id,
						labelData.id,
					);

					await this.handleDatabaseOperation(
						prLabel,
						this.pullRequestLabelOperations,
						prLabel.pull_request_id,
					);
				}
				break;
			}

			case "discussion": {
				const repo_id = payload.repository.id;

				for (const labelData of payload.discussion.labels) {
					console.log(labelData);
					const repoLabel = PayloadMapper.createRepoLabelsFromPayload(
						labelData,
						repo_id,
					);

					await this.handleDatabaseOperation(
						repoLabel,
						this.repoLabelOperations,
						repoLabel.id,
					);

					const discussionLabel =
						PayloadMapper.createDiscussionLabelFromPayload(
							payload.discussion.id,
							labelData.id,
						);

					await this.handleDatabaseOperation(
						discussionLabel,
						this.discussionLabelOperations,
						discussionLabel.discussion_id,
					);
				}

				break;
			}
		}
	}

	private async processMilestone(payload: any, context: string): Promise<void> {
		// First, ensure the milestone exists
		const milestone = PayloadMapper.createMilestonesFromPayload(payload);
		await this.handleDatabaseOperation(
			milestone,
			this.milestoneOperations,
			milestone.id,
		);

		// Then handle the junction table based on context
		switch (context) {
			case "issue": {
				const issue = PayloadMapper.createIssueFromPayload(payload);

				await this.handleDatabaseOperation(
					issue,
					this.issueOperations,
					issue.id,
				);

				const issueMilestone = PayloadMapper.createIssueMilestoneFromPayload(
					issue.id,
					milestone.id,
				);
				await this.handleDatabaseOperation(
					issueMilestone,
					this.issueMilestoneOperations,
					issueMilestone.issue_id,
				);
				break;
			}

			case "pull_request": {
				const pr = PayloadMapper.createPullRequestFromPayload(payload);

				await this.handleDatabaseOperation(
					pr,
					this.pullRequestOperations,
					pr.id,
				);

				const prMilestone = PayloadMapper.createPullRequestMilestoneFromPayload(
					pr.id,
					milestone.id,
				);
				await this.handleDatabaseOperation(
					prMilestone,
					this.pullRequestMilestoneOperations,
					prMilestone.pull_request_id,
				);
				break;
			}

			case "":
				break;
		}
	}

	private async processAssignee(payload: any, context: string): Promise<void> {
		switch (context) {
			case "issue": {
				const issue = PayloadMapper.createIssueFromPayload(payload);

				await this.handleDatabaseOperation(
					issue,
					this.issueOperations,
					issue.id,
				);

				// const issueAssignee = PayloadMapper.createIssueAssigneeFromPayload(issue.id, issue.assignees.id);
				// await this.handleDatabaseOperation(
				//     issueAssignee,
				//     this.issueAssigneeOperations,
				//     issueAssignee.issue_id,
				// );

				if (payload.issue.assignees) {
					for (const assignee of payload.issue.assignees) {
						const issueAssignee = PayloadMapper.createIssueAssigneeFromPayload(
							issue.id,
							assignee.id,
						);

						await this.handleDatabaseOperation(
							issueAssignee,
							this.issueAssigneeOperations,
							issueAssignee.issue_id,
						);
					}
				}

				break;
			}

			case "pull_request": {
				const pr = PayloadMapper.createPullRequestFromPayload(payload);

				await this.handleDatabaseOperation(
					pr,
					this.pullRequestOperations,
					pr.id,
				);

				// const prAssignee = PayloadMapper.createPullRequestAssigneeFromPayload(pr.id, pr.assignee.id);
				// await this.handleDatabaseOperation(
				//     prAssignee,
				//     this.pullRequestAssigneeOperations,
				//     prAssignee.pullrequest_id,
				// );

				if (payload.pull_request.assignees) {
					for (const assignee of payload.pull_request.assignees) {
						const prAssignee =
							PayloadMapper.createPullRequestAssigneeFromPayload(
								pr.id,
								assignee.id,
							);

						await this.handleDatabaseOperation(
							prAssignee,
							this.pullRequestAssigneeOperations,
							prAssignee.pullrequest_id,
						);
					}
				}
				break;
			}
		}
	}

	private async processIssueCommentEvent(payload: any): Promise<void> {
		const comment = PayloadMapper.createIssueCommentFromPayload(payload);
		const issue = PayloadMapper.createIssueFromPayload(payload);
		const owner = PayloadMapper.createOwnerFromPayload(payload.comment.user);
		const repo = PayloadMapper.createRepositoryFromPayload(payload, owner);
		// const reaction =
		// 	PayloadMapper.createIssueCommentReactionFromPayload(payload);

		// Handle all entities in correct order
		await this.handleDatabaseOperation(owner, this.ownerOperations, owner.id);

		await this.handleDatabaseOperation(
			repo,
			this.repositoryOperations,
			repo.id,
		);

		await this.handleDatabaseOperation(issue, this.issueOperations, issue.id);

		await this.handleDatabaseOperation(
			comment,
			this.issueCommentOperations,
			comment.id,
		);

		// await this.handleDatabaseOperation(
		// 	reaction,
		// 	this.issueCommentReactionOperations,
		// 	reaction.issuecomment_id,
		// );
	}

	private async processDiscussionCategories(payload: any): Promise<void> {
		const discussion_category =
			PayloadMapper.createDiscussionCategoriesFromPayload(payload);

		await this.handleDatabaseOperation(
			discussion_category,
			this.discussionCategoriesOperations,
			discussion_category.id,
		);
	}

	private async processDiscussionComments(payload: any): Promise<void> {
		const discussion_category =
			PayloadMapper.createDiscussionCategoriesFromPayload(payload);
		const discussion = PayloadMapper.createDiscussionFromPayload(payload);
		const discussion_comment =
			PayloadMapper.createDiscussionCommentFromPayload(payload.comment, payload.discussion.id);

		await this.handleDatabaseOperation(
			discussion_category,
			this.discussionCategoriesOperations,
			discussion_category.id,
		);

		await this.handleDatabaseOperation(
			discussion,
			this.discussionOperations,
			discussion.id,
		);

		await this.handleDatabaseOperation(
			discussion_comment,
			this.discussionCommentOperations,
			discussion_comment.id,
		);
	}

	// private async processDiscussionPolls(payload: any): Promise<void> {
	//     const discussion_poll = PayloadMapper.createDiscussionPollsFromPayload(payload);

	//     await this.handleDatabaseOperation(
	//         discussion_poll,
	//         this.discussionPollOperations,
	//         discussion_poll.discussion_id,
	//     );
	// }

	// private async processDiscussionPollOptions(payload: any): Promise<void> {
	//     const discussion_poll_options = PayloadMapper.createDiscussionPollOptionsFromPayload(payload);

	//     await this.handleDatabaseOperation(
	//         discussion_poll_options,
	//         this.discussionPollOptionsOperations,
	//         discussion_poll_options.poll_id,
	//     );
	// }

	private async processDiscussionEvent(payload: any): Promise<void> {
		const owner = PayloadMapper.createOwnerFromPayload(payload.discussion.user);
		const repo = PayloadMapper.createRepositoryFromPayload(payload, owner);
		const discussion_category =
			PayloadMapper.createDiscussionCategoriesFromPayload(payload);
		const discussion = PayloadMapper.createDiscussionFromPayload(payload);

		await this.handleDatabaseOperation(owner, this.ownerOperations, owner.id);

		await this.handleDatabaseOperation(
			repo,
			this.repositoryOperations,
			repo.id,
		);

		await this.handleDatabaseOperation(
			discussion_category,
			this.discussionCategoriesOperations,
			discussion_category.id,
		);

		await this.handleDatabaseOperation(
			discussion,
			this.discussionOperations,
			discussion.id,
		);
	}
	// discussionOperations(discussion: types.Discussion, discussionOperations: any, id: string) {
	//     throw new Error("Method not implemented.");
	// }

	private async processDiscussionAnswer(payload: any): Promise<void> {
		// console.log("payload in processDiscussionAnswer():", payload)
		// console.log("payload.answer: ", payload.answer)
		// console.log("payload.id: ", payload.id)
		const discussion_comment_answer =
			PayloadMapper.createDiscussionCommentFromPayload(payload.answer, payload.discussion.id);
		// const discussion = PayloadMapper.createDiscussionFromPayload(payload);

		discussion_comment_answer.is_answer = true;

		await this.handleDatabaseOperation(
			discussion_comment_answer,
			this.discussionCommentOperations,
			discussion_comment_answer.id,
		);

		// await this.handleDatabaseOperation(
		// 	discussion,
		// 	this.discussionOperations,
		// 	discussion.id
		// );
	}

	private async processDiscussionCategoryChanged(payload: any): Promise<void> {
		const discussion_category = PayloadMapper.createDiscussionCategoriesFromPayload(payload)

		await this.handleDatabaseOperation(
			discussion_category,
			this.discussionCategoriesOperations,
			discussion_category.id
		)
	}

	private async processRepoLabels(payload: any): Promise<void> {
		const repo_label = PayloadMapper.createRepoLabelsFromPayload(
			payload.label,
			payload.repository.id,
		);

		await this.handleDatabaseOperation(
			repo_label,
			this.repoLabelOperations,
			repo_label.id,
		);
	}

	private async processSubIssueList(payload: any): Promise<void> {
		const owner = PayloadMapper.createOwnerFromPayload(payload.sub_issue.user);
		const repo = PayloadMapper.createRepositoryFromPayload(payload, owner);

		const parent_issue = PayloadMapper.createParentIssueFromPayload(payload);

		const sub_issue = PayloadMapper.createSubIssueFromPayload(payload);
		const sub_issue_list = PayloadMapper.createSubIssueListFromPayload(
			payload.parent_issue_id,
			payload.sub_issue_id,
		);

		await this.handleDatabaseOperation(owner, this.ownerOperations, owner.id);
		await this.handleDatabaseOperation(
			repo,
			this.repositoryOperations,
			repo.id,
		);

		await this.handleDatabaseOperation(
			parent_issue,
			this.issueOperations,
			parent_issue.id,
		);

		await this.handleDatabaseOperation(
			sub_issue,
			this.issueOperations,
			sub_issue.id,
		);

		await this.handleDatabaseOperation(
			sub_issue_list,
			this.subIssueListOperations,
			sub_issue_list.parent_id,
		);
	}

	public async processWebhook(eventType: string, payload: any): Promise<void> {
		console.log("In processWebhook()");
		console.log("Payload: ", payload);
		console.log(
			`Processing ${eventType} webhook with action ${payload.action}...`,
		);

		switch (eventType) {
			case WebhookEventType.Repository:
				await this.processRepositoryEvent(payload);
				break;
			case WebhookEventType.Issue:
				await this.processIssueEvent(payload);

				switch (payload.action) {
					case WebhookAction.Labeled:
						await this.processLabel(payload, "issue");
						break;

					case WebhookAction.Milestoned:
					case WebhookAction.Demilestoned:
						await this.processMilestone(payload, "issue");
						break;

					case WebhookAction.Assigned:
					case WebhookAction.Unassigned:
						await this.processAssignee(payload, "issue");
						break;
				}
				break;
			case WebhookEventType.PullRequest:
				await this.processPullRequestEvent(payload);

				switch (payload.action) {
					case WebhookAction.Labeled:
						await this.processLabel(payload, "pull_request");
						break;

					case WebhookAction.Milestoned:
					case WebhookAction.Demilestoned:
						await this.processMilestone(payload, "pull_request");
						break;

					case WebhookAction.Assigned:
					case WebhookAction.Unassigned:
						await this.processAssignee(payload, "pull_request");
						break;
				}
				break;

			case WebhookEventType.IssueComment:
				await this.processIssueCommentEvent(payload);
				break;

			case WebhookEventType.Discussion:
				await this.processDiscussionEvent(payload);

				switch (payload.action) {
					case WebhookAction.Labeled:
					case WebhookAction.Unlabeled:
						await this.processLabel(payload, "discussion");
						break;

					case WebhookAction.Answered:
						await this.processDiscussionAnswer(payload);
						break;

					case WebhookAction.CategoryChanged:
						await this.processDiscussionCategoryChanged(payload)
						break;
				}
				break;
			case WebhookEventType.DiscussionComment:
				await this.processDiscussionComments(payload);
				break;

			case WebhookEventType.SubIssue:
				await this.processSubIssueList(payload);
				break;

			case WebhookEventType.RepoLabel:
				await this.processRepoLabels(payload);
				break;

			case WebhookEventType.Milestone:
				await this.processMilestone(payload, "");
				break;

			default:
				console.log(`Unhandled event type: ${eventType}`);
		}
	}
}
