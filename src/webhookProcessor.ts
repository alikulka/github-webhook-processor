// Original ugly code

// webhookProcessor.ts
import type { PoolClient } from "pg";
import type * as types from "./types";
import { Upserts } from "./upsert";

export class WebhookProcessor {
	private upserts: Upserts;

	constructor(private client: PoolClient) {
		this.upserts = new Upserts(client);
	}

	async processWebhook(eventType: string, payload: any): Promise<void> {
		switch (eventType) {
			case "repository":
				await this.processRepositoryEvent(payload);
				break;
			case "issues":
				await this.processIssueEvent(payload);
				break;
			case "pull_request":
				await this.processPullRequestEvent(payload);
				break;
			case "issue_comment":
				await this.processIssueCommentEvent(payload);
				break;
			// case "discussion":
			// 	await this.processDiscussionEvent(payload);
			// 	break;
			// Add more event types as needed
			default:
				console.log(`Unhandled event type: ${eventType}`);
		}
	}

	private async processRepositoryEvent(payload: any): Promise<void> {
		const owner: types.Owner = {
			id: payload.repository.owner.id,
			login: payload.repository.owner.login,
			node_id: payload.repository.owner.node_id,
			url: payload.repository.owner.url,
			avatar_url: payload.repository.owner.avatar_url,
			description: "",
			company: "",
			email: "",
			created_at: new Date(),
			updated_at: new Date(),
			is_verified: false,
			is_organization: payload.repository.owner.type === "Organization",
		};

		const repo: types.Repository = {
			id: payload.repository.id,
			node_id: payload.repository.node_id,
			name: payload.repository.name,
			full_name: payload.repository.full_name,
			owner: owner,
			url: payload.repository.url,
			description: payload.repository.description || "",
			created_at: new Date(payload.repository.created_at),
			updated_at: new Date(payload.repository.updated_at),
			pushed_at: new Date(payload.repository.pushed_at),
			watchers_count: payload.repository.watchers_count,
			forks_count: payload.repository.forks_count,
			size: payload.repository.size,
			default_branch: payload.repository.default_branch,
			open_issues_count: payload.repository.open_issues_count,
			is_fork: payload.repository.fork,
			is_private: payload.repository.private,
			has_issues: payload.repository.has_issues,
			has_projects: payload.repository.has_projects,
			has_wiki: payload.repository.has_wiki,
			has_pages: payload.repository.has_pages,
			has_downloads: payload.repository.has_downloads,
			has_discussions: payload.repository.has_discussions,
			forking_allowed: payload.repository.allow_forking,
			is_archived: payload.repository.archived,
			is_disabled: payload.repository.disabled,
			visibility: payload.repository.visibility,
		};

		switch (payload.action) {
			case "created":
				try {
					await this.upserts.upsertOwner(owner);
					console.log("Owner updated successfully");
				} catch (error) {
					console.error("Error inserting owner:", error);
				}

				try {
					await this.upserts.insertRepository(repo);
					console.log("Repository inserted successfully");
				} catch (error) {
					console.error("Error inserting repo:", error);
				}

				break;

			case "edited":
				try {
					await this.upserts.upsertOwner(owner);
					console.log("Owner updated successfully");
				} catch (error) {
					console.error("Error inserting owner:", error);
				}

				try {
					await this.upserts.updateRepository(repo);
					console.log("Repository updated successfully");
				} catch (error) {
					console.error("Error inserting repo:", error);
				}
				break;
		}
	}

	private async processIssueEvent(payload: any): Promise<void> {
		// Needed for the repo since it accepts an object of type Repository
		const repoOwner: types.Owner = {
			id: payload.issue.user.id,
			login: payload.issue.user.login,
			node_id: payload.issue.user.node_id,
			url: payload.issue.user.url,
			avatar_url: payload.issue.user.avatar_url,
			description: "",
			company: "",
			email: "",
			created_at: new Date(),
			updated_at: new Date(),
			is_verified: false,
			is_organization: payload.issue.user.type === "Organization",
		};

		const repo: types.Repository = {
			id: payload.repository.id,
			node_id: payload.repository.node_id,
			name: payload.repository.name,
			full_name: payload.repository.full_name,
			owner: repoOwner,
			url: payload.repository.url,
			description: payload.repository.description || "",
			created_at: new Date(payload.repository.created_at),
			updated_at: new Date(payload.repository.updated_at),
			pushed_at: new Date(payload.repository.pushed_at),
			watchers_count: payload.repository.watchers_count,
			forks_count: payload.repository.forks_count,
			size: payload.repository.size,
			default_branch: payload.repository.default_branch,
			open_issues_count: payload.repository.open_issues_count,
			is_fork: payload.repository.fork,
			is_private: payload.repository.private,
			has_issues: payload.repository.has_issues,
			has_projects: payload.repository.has_projects,
			has_wiki: payload.repository.has_wiki,
			has_pages: payload.repository.has_pages,
			has_downloads: payload.repository.has_downloads,
			has_discussions: payload.repository.has_discussions,
			forking_allowed: payload.repository.allow_forking,
			is_archived: payload.repository.archived,
			is_disabled: payload.repository.disabled,
			visibility: payload.repository.visibility,
		};

		// for created_by
		const issueCreator: types.Owner = {
			id: payload.issue.user.id,
			login: payload.issue.user.login,
			node_id: payload.issue.user.node_id,
			url: payload.issue.user.url,
			avatar_url: payload.issue.user.avatar_url,
			description: "",
			company: "",
			email: "",
			created_at: new Date(),
			updated_at: new Date(),
			is_verified: false,
			is_organization: payload.issue.user.type === "Organization",
		};

		const issue: types.Issue = {
			id: payload.issue.id,
			node_id: payload.issue.node_id,
			url: payload.issue.url,
			issue_number: payload.issue.number,
			state: payload.issue.state,
			title: payload.issue.title,
			body: payload.issue.body,
			created_by: payload.issue.user,
			locked: payload.issue.locked,
			active_lock_reason: payload.issue.active_lock_reason,
			num_comments: payload.issue.comments,
			closed_at: new Date(payload.issue.closed_at),
			created_at: new Date(payload.issue.created_at),
			updated_at: new Date(payload.issue.updated_at),
			closed_by: payload.issue.closed_by,
			repository_id: payload.repository.id,
			author_association: payload.issue.author_association,
			total_reaction_count: payload.issue.reactions.total_count,
			sub_or_parent_issue: payload.issue.sub_or_parent_issue,
			// labels: payload.issue.labels.map((label: any) => label.name),
			// assignees: payload.issue.assignees.map((assignee: any) => assignee.login),
			// milestone: payload.issue.milestone ? payload.issue.milestone.title : null,
		};

		switch (payload.action) {
			case "opened":
				try {
					await this.upserts.upsertOwner(repoOwner);
					console.log("Repo owner upserted successfully");
				} catch (error) {
					console.error("Error upserting repo owner:", error);
				}

				try {
					await this.upserts.updateRepository(repo);
					console.log("Repo updated successfully");
				} catch (error) {
					console.error("Error updating repo:", error);
				}

				try {
					await this.upserts.upsertOwner(issueCreator);
					console.log("Issue creator upserted successfully");
				} catch (error) {
					console.error("Error upserting issue creator:", error);
				}

				try {
					await this.upserts.insertIssue(issue);
					console.log("Issue inserted successfully");
				} catch (error) {
					console.error("Error inserting issue:", error);
				}
				break;

			case "closed":
				// idk how to do this one yet
				break;

			case "edited":
				try {
					await this.upserts.upsertOwner(repoOwner);
					console.log("Repo owner upserted successfully");
				} catch (error) {
					console.error("Error upserting repo owner:", error);
				}

				try {
					await this.upserts.updateRepository(repo);
					console.log("Repo updated successfully");
				} catch (error) {
					console.error("Error updating repo:", error);
				}

				try {
					await this.upserts.upsertOwner(issueCreator);
					console.log("Issue creator upserted successfully");
				} catch (error) {
					console.error("Error upserting issue creator:", error);
				}

				try {
					await this.upserts.updateIssue(issue);
					console.log("Issue inserted successfully");
				} catch (error) {
					console.error("Error inserting issue:", error);
				}
				break;

			case "deleted":
				// idk how to do this one yet
				break;
		}

		if (payload.issue.closed_by) {
			const closedByUser: types.Owner = {
				id: payload.issue.closed_by.id,
				login: payload.issue.closed_by.login,
				node_id: payload.issue.closed_by.node_id,
				url: payload.issue.closed_by.url,
				avatar_url: payload.issue.closed_by.avatar_url,
				description: "",
				company: "",
				email: "",
				created_at: new Date(),
				updated_at: new Date(),
				is_verified: false,
				is_organization: payload.issue.closed_by.type === "Organization",
			};

			try {
				await this.upserts.upsertOwner(closedByUser);
				console.log("Closed by user upserted successfully");
			} catch (error) {
				console.error("Error upserting closed by user:", error);
			}
		}

		// try {
		// 	await this.upserts.upsertIssue(issue);
		// 	console.log("Issue upserted successfully");
		// } catch (error) {
		// 	console.error("Error upserting issue:", error);
		// }

		// Process labels
		// if (issue.labels) {
		//   for (const label of issue.labels) {
		//     // await this.upserts.upsertRepoLabel(label);
		//     await this.upserts.upsertIssueLabel({ issue_id: issue.id, label_id: label.id });
		//   }
		// }

		// // Process assignees
		// if (issue.assignees) {
		//   for (const assignee of issue.assignees) {
		//     await this.upserts.upsertOwner(assignee);
		//     await this.upserts.upsertIssueAssignee({ issue_id: issue.id, assignee_id: assignee.id });
		//   }
		// }

		// // Process milestone
		// if (issue.milestone) {
		//   await this.upserts.upsertMilestone(issue.milestone);
		//   await this.upserts.upsertIssueMilestone({ issue_id: issue.id, milestone_id: issue.milestone.id });
		// }
	}

	private async processPullRequestEvent(payload: any): Promise<void> {
		// Needed for the repo since it accepts an object of type Repository
		const repoOwner: types.Owner = {
			id: payload.pull_request.user.id,
			login: payload.pull_request.user.login,
			node_id: payload.pull_request.user.node_id,
			url: payload.pull_request.user.url,
			avatar_url: payload.pull_request.user.avatar_url,
			description: "",
			company: "",
			email: "",
			created_at: new Date(),
			updated_at: new Date(),
			is_verified: false,
			is_organization: payload.pull_request.user.type === "Organization",
		};

		const repo: types.Repository = {
			id: payload.repository.id,
			node_id: payload.repository.node_id,
			name: payload.repository.name,
			full_name: payload.repository.full_name,
			owner: repoOwner,
			url: payload.repository.url,
			description: payload.repository.description || "",
			created_at: new Date(payload.repository.created_at),
			updated_at: new Date(payload.repository.updated_at),
			pushed_at: new Date(payload.repository.pushed_at),
			watchers_count: payload.repository.watchers_count,
			forks_count: payload.repository.forks_count,
			size: payload.repository.size,
			default_branch: payload.repository.default_branch,
			open_issues_count: payload.repository.open_issues_count,
			is_fork: payload.repository.fork,
			is_private: payload.repository.private,
			has_issues: payload.repository.has_issues,
			has_projects: payload.repository.has_projects,
			has_wiki: payload.repository.has_wiki,
			has_pages: payload.repository.has_pages,
			has_downloads: payload.repository.has_downloads,
			has_discussions: payload.repository.has_discussions,
			forking_allowed: payload.repository.allow_forking,
			is_archived: payload.repository.archived,
			is_disabled: payload.repository.disabled,
			visibility: payload.repository.visibility,
		};

		// for created_by
		const prCreator: types.Owner = {
			id: payload.pull_request.user.id,
			login: payload.pull_request.user.login,
			node_id: payload.pull_request.user.node_id,
			url: payload.pull_request.user.url,
			avatar_url: payload.pull_request.user.avatar_url,
			description: "",
			company: "",
			email: "",
			created_at: new Date(),
			updated_at: new Date(),
			is_verified: false,
			is_organization: payload.pull_request.user.type === "Organization",
		};

		const pr: types.PullRequest = {
			id: payload.pull_request.id,
			node_id: payload.pull_request.node_id,
			url: payload.pull_request.url,
			// issue_number: payload.pull_request.number,
			pull_request_number: payload.pull_request.number,
			state: payload.pull_request.state,
			state_reason: payload.pull_request.state_reason,
			title: payload.pull_request.title,
			body: payload.pull_request.body,
			created_by: payload.pull_request.user,
			locked: payload.pull_request.locked,
			active_lock_reason: payload.pull_request.active_lock_reason,
			num_comments: payload.pull_request.comments,
			closed_at: new Date(payload.pull_request.closed_at),
			created_at: new Date(payload.pull_request.created_at),
			updated_at: new Date(payload.pull_request.updated_at),
			closed_by: payload.pull_request.closed_by,
			repository_id: payload.repository.id,
			author_association: payload.pull_request.author_association,
			total_reaction_count: payload.pull_request.reactions.total_count,
			merged_at: new Date(payload.pull_request.merged_at),
			diff_url: payload.pull_request.diff_url,
			draft: payload.pull_request.draft,
			// labels: payload.pull_request.labels.map((label: any) => label.name),
			// assignees: payload.pull_request.assignees.map((assignee: any) => assignee.login),
			// milestone: payload.pull_request.milestone ? payload.pull_request.milestone.title : null,
		};

		switch (payload.action) {
			case "opened":
				try {
					await this.upserts.upsertOwner(repoOwner);
					console.log("Repo owner upserted successfully");
				} catch (error) {
					console.error("Error upserting repo owner:", error);
				}

				try {
					await this.upserts.updateRepository(repo);
					console.log("Repo updated successfully");
				} catch (error) {
					console.error("Error updating repo:", error);
				}

				try {
					await this.upserts.upsertOwner(prCreator);
					console.log("PR creator upserted successfully");
				} catch (error) {
					console.error("Error upserting PR creator:", error);
				}

				try {
					await this.upserts.insertPullRequest(pr);
					console.log("PR inserted successfully");
				} catch (error) {
					console.error("Error inserting issue:", error);
				}
				break;

			case "closed":
				// idk how to do this one yet
				break;

			case "edited":
				try {
					await this.upserts.upsertOwner(repoOwner);
					console.log("Repo owner upserted successfully");
				} catch (error) {
					console.error("Error upserting repo owner:", error);
				}

				try {
					await this.upserts.updateRepository(repo);
					console.log("Repo updated successfully");
				} catch (error) {
					console.error("Error updating repo:", error);
				}

				try {
					await this.upserts.upsertOwner(prCreator);
					console.log("PR creator upserted successfully");
				} catch (error) {
					console.error("Error upserting issue creator:", error);
				}

				try {
					await this.upserts.updatePullRequest(pr);
					console.log("PR updated successfully");
				} catch (error) {
					console.error("Error updating PR:", error);
				}
				break;

			case "deleted":
				// idk how to do this one yet
				break;
		}

		// if (payload.pull_request.closed_by) {
		// 	const closedByUser: types.Owner = {
		// 		id: payload.pull_request.closed_by.id,
		// 		login: payload.pull_request.closed_by.login,
		// 		node_id: payload.pull_request.closed_by.node_id,
		// 		url: payload.pull_request.closed_by.url,
		// 		avatar_url: payload.pull_request.closed_by.avatar_url,
		// 		description: "",
		// 		company: "",
		// 		email: "",
		// 		created_at: new Date(),
		// 		updated_at: new Date(),
		// 		is_verified: false,
		// 		is_organization: payload.pull_request.closed_by.type === "Organization",
		// 	};

		//     console.log("The error in creating closedByUser is:")

		// 	try {
		// 		await this.upserts.upsertOwner(closedByUser);
		// 		console.log("Closed by user upserted successfully");
		// 	} catch (error) {
		// 		console.error("Error upserting closed by user:", error);
		// 	}
		// }

		// try {
		// 	await this.upserts.upsertIssue(issue);
		// 	console.log("Issue upserted successfully");
		// } catch (error) {
		// 	console.error("Error upserting issue:", error);
		// }

		// Process labels
		// if (issue.labels) {
		//   for (const label of issue.labels) {
		//     // await this.upserts.upsertRepoLabel(label);
		//     await this.upserts.upsertIssueLabel({ issue_id: issue.id, label_id: label.id });
		//   }
		// }

		// // Process assignees
		// if (issue.assignees) {
		//   for (const assignee of issue.assignees) {
		//     await this.upserts.upsertOwner(assignee);
		//     await this.upserts.upsertIssueAssignee({ issue_id: issue.id, assignee_id: assignee.id });
		//   }
		// }

		// // Process milestone
		// if (issue.milestone) {
		//   await this.upserts.upsertMilestone(issue.milestone);
		//   await this.upserts.upsertIssueMilestone({ issue_id: issue.id, milestone_id: issue.milestone.id });
		// }
	}

	private async processIssueCommentEvent(payload: any): Promise<void> {
		const issue: types.Issue = {
			id: payload.issue.id,
			node_id: payload.issue.node_id,
			url: payload.issue.url,
			issue_number: payload.issue.number,
			state: payload.issue.state,
			title: payload.issue.title,
			body: payload.issue.body,
			created_by: payload.issue.user,
			locked: payload.issue.locked,
			active_lock_reason: payload.issue.active_lock_reason,
			num_comments: payload.issue.comments,
			closed_at: new Date(payload.issue.closed_at),
			created_at: new Date(payload.issue.created_at),
			updated_at: new Date(payload.issue.updated_at),
			closed_by: payload.issue.closed_by,
			repository_id: payload.repository.id,
			author_association: payload.issue.author_association,
			total_reaction_count: payload.issue.reactions.total_count,
			sub_or_parent_issue: payload.issue.sub_or_parent_issue,
			// labels: payload.issue.labels.map((label: any) => label.name),
			// assignees: payload.issue.assignees.map((assignee: any) => assignee.login),
			// milestone: payload.issue.milestone ? payload.issue.milestone.title : null,
		};

		const issueComment: types.IssueComment = {
			id: payload.comment.id,
			node_id: payload.comment.node_id,
			url: payload.comment.url,
			issue_id: payload.issue.id,
			created_by: payload.comment.user,
			body: payload.comment.body,
			created_at: new Date(payload.comment.created_at),
			updated_at: new Date(payload.comment.updated_at),
			author_association: payload.comment.author_association,
		};

		const repo: types.Repository = {
			id: payload.repository.id,
			node_id: payload.repository.node_id,
			name: payload.repository.name,
			full_name: payload.repository.full_name,
			owner: payload.repository.owner,
			url: payload.repository.url,
			description: payload.repository.description || "",
			created_at: new Date(payload.repository.created_at),
			updated_at: new Date(payload.repository.updated_at),
			pushed_at: new Date(payload.repository.pushed_at),
			watchers_count: payload.repository.watchers_count,
			forks_count: payload.repository.forks_count,
			size: payload.repository.size,
			default_branch: payload.repository.default_branch,
			open_issues_count: payload.repository.open_issues_count,
			is_fork: payload.repository.fork,
			is_private: payload.repository.private,
			has_issues: payload.repository.has_issues,
			has_projects: payload.repository.has_projects,
			has_wiki: payload.repository.has_wiki,
			has_pages: payload.repository.has_pages,
			has_downloads: payload.repository.has_downloads,
			has_discussions: payload.repository.has_discussions,
			forking_allowed: payload.repository.allow_forking,
			is_archived: payload.repository.archived,
			is_disabled: payload.repository.disabled,
			visibility: payload.repository.visibility,
		};

		const owner: types.Owner = {
			id: payload.comment.user.id,
			login: payload.comment.user.login,
			node_id: payload.comment.user.node_id,
			url: payload.comment.user.url,
			avatar_url: payload.comment.user.avatar_url,
			description: "",
			company: "",
			email: "",
			created_at: new Date(),
			updated_at: new Date(),
			is_verified: false,
			is_organization: payload.comment.user.type === "Organization",
		};

		const reaction: types.IssueCommentReaction = {
			issuecomment_id: payload.comment.id,
			plusone: payload.issue.reactions.plusone,
			minusone: payload.issue.reactions.minusone,
			laugh: payload.issue.reactions.laugh,
			hooray: payload.issue.reactions.hooray,
			confused: payload.issue.reactions.confused,
			heart: payload.issue.reactions.heart,
			rocket: payload.issue.reactions.rocket,
			eyes: payload.issue.reactions.eyes,
		};

		switch (payload.action) {
			case "created":
				try {
					await this.upserts.upsertIssue(issue);
					console.log("Issue upserted successfully");
				} catch (error) {
					console.error("Error upserting issue:", error);
				}

				try {
					await this.upserts.insertIssueComment(issueComment);
					console.log("Issue comment inserted successfully");
				} catch (error) {
					console.error("Error inserting issue comment:", error);
				}

				try {
					await this.upserts.upsertRepository(repo);
					console.log("Repository upserted successfully");
				} catch (error) {
					console.error("Error upserting repository:", error);
				}

				try {
					await this.upserts.upsertOwner(owner);
					console.log("Owner upserted successfully");
				} catch (error) {
					console.error("Error upserting owner:", error);
				}

				try {
					await this.upserts.upsertIssueCommentReaction(reaction);
					console.log("Issue comment reaction upserted successfully");
				} catch (error) {
					console.error("Error upserting issue comment reaction:", error);
				}
				break;

			case "edited":
				try {
					await this.upserts.upsertIssue(issue);
					console.log("Issue upserted successfully");
				} catch (error) {
					console.error("Error upserting issue:", error);
				}

				try {
					await this.upserts.updateIssueComment(payload.comment);
					console.log("Issue comment updated successfully");
				} catch (error) {
					console.error("Error updating issue comment:", error);
				}

				try {
					await this.upserts.upsertRepository(repo);
					console.log("Repository upserted successfully");
				} catch (error) {
					console.error("Error upserting repository:", error);
				}

				try {
					await this.upserts.upsertOwner(owner);
					console.log("Owner upserted successfully");
				} catch (error) {
					console.error("Error upserting owner:", error);
				}

				try {
					await this.upserts.upsertIssueCommentReaction(reaction);
					console.log("Issue comment reaction upserted successfully");
				} catch (error) {
					console.error("Error upserting issue comment reaction:", error);
				}

				break;

			case "deleted":
				// idk
				break;
		}
	}

	private async processIssueCommentReactionsEvent(payload: any): Promise<void> {
		const reaction: types.IssueCommentReaction = {
			issuecomment_id: payload.comment.id,
			plusone: payload.reaction.plusone,
			minusone: payload.reaction.minusone,
			laugh: payload.reaction.laugh,
			hooray: payload.reaction.hooray,
			confused: payload.reaction.confused,
			heart: payload.reaction.heart,
			rocket: payload.reaction.rocket,
			eyes: payload.reaction.eyes,
		};

		try {
			await this.upserts.upsertIssueCommentReaction(reaction);
			console.log("Issue comment reaction upserted successfully");
		} catch (error) {
			console.error("Error upserting issue comment reaction:", error);
		}
	}
}
