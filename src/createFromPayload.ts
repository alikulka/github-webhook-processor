// This file contains code to create payloads that match predefined types

import type * as types from "./types";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class PayloadMapper {
	static createOwnerFromPayload(userPayload: any): types.Owner {
		return {
			id: userPayload.id,
			login: userPayload.login,
			node_id: userPayload.node_id,
			url: userPayload.url,
			avatar_url: userPayload.avatar_url,
			description: "",
			company: "",
			email: "",
			created_at: new Date(),
			updated_at: new Date(),
			is_verified: false,
			is_organization: userPayload.type === "Organization",
		};
	}

	static createRepositoryFromPayload(
		payload: any,
		owner: types.Owner,
	): types.Repository {
		return {
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
	}

	static createIssueFromPayload(payload: any): types.Issue {
		return {
			id: payload.issue.id,
			node_id: payload.issue.node_id,
			url: payload.issue.url,
			issue_number: payload.issue.number,
			state: payload.issue.state,
			title: payload.issue.title,
			body: payload.issue.body || "",
			created_by: payload.issue.user,
			locked: payload.issue.locked,
			active_lock_reason: payload.issue.active_lock_reason,
			num_comments: payload.issue.comments,
			closed_at: payload.issue.closed_at ? new Date(payload.issue.closed_at) : null,
			created_at: new Date(payload.issue.created_at),
			updated_at: new Date(payload.issue.updated_at),
			closed_by: payload.issue.closed_by,
			repository_id: payload.repository.id,
			author_association: payload.issue.author_association,
			total_reaction_count: payload.issue.reactions?.total_count || 0,
			sub_or_parent_issue: payload.issue.sub_or_parent_issue || "NEITHER",
		};
	}

	static createPullRequestFromPayload(payload: any): types.PullRequest {
		return {
			id: payload.pull_request.id,
			node_id: payload.pull_request.node_id,
			url: payload.pull_request.url,
			pull_request_number: payload.pull_request.number,
			state: payload.pull_request.state,
			state_reason: payload.pull_request.state_reason,
			title: payload.pull_request.title,
			body: payload.pull_request.body || "",
			created_by: payload.pull_request.user.id,
			locked: payload.pull_request.locked,
			active_lock_reason: payload.pull_request.active_lock_reason,
			num_comments: payload.pull_request.comments,
			closed_at: payload.pull_request.closed_at ? new Date(payload.pull_request.closed_at) : null,
			created_at: new Date(payload.pull_request.created_at),
			updated_at: new Date(payload.pull_request.updated_at),
			closed_by: payload.pull_request.closed_by,
			repository_id: payload.repository.id,
			author_association: payload.pull_request.author_association,
			total_reaction_count: payload.pull_request.reactions?.total_count || 0,
			merged_at: payload.pull_request.merged_at ? new Date(payload.pull_request.merged_at) : null,
			diff_url: payload.pull_request.diff_url,
			draft: payload.pull_request.draft || false,
		};
	}

	static createIssueCommentFromPayload(payload: any): types.IssueComment {
		return {
			id: payload.comment.id,
			node_id: payload.comment.node_id,
			url: payload.comment.url,
			body: payload.comment.body || "",
			created_by: payload.comment.user.id,
			created_at: new Date(payload.comment.created_at),
			updated_at: new Date(payload.comment.updated_at),
			issue_id: payload.issue.id,
			author_association: payload.comment.author_association,
      plusone: payload.comment.reactions?.["+1"] || 0,
			minusone: payload.comment.reactions?.["-1"] || 0,
			laugh: payload.comment.reactions?.laugh || 0,
			hooray: payload.comment.reactions?.hooray || 0,
			confused: payload.comment.reactions?.confused || 0,
			heart: payload.comment.reactions?.heart || 0,
			rocket: payload.comment.reactions?.rocket || 0,
			eyes: payload.comment.reactions?.eyes || 0,
		};
	}

	static createDiscussionCategoriesFromPayload(
		payload: any,
	): types.DiscussionCategory {
		return {
			id: payload.discussion.category.id,
			description: payload.discussion.category.description,
			emoji: payload.discussion.category.emoji,
			name: payload.discussion.category.name,
			created_at: new Date(payload.discussion.category.created_at),
			updated_at: new Date(payload.discussion.category.updated_at),
			is_answerable: payload.discussion.category.is_answerable,
			repository_id: payload.repository.id,
			slug: payload.discussion.category.slug,
		};
	}

	static createDiscussionFromPayload(payload: any): types.Discussion {
		return {
      active_lock_reason: payload.discussion.active_lock_reason,
			answer: payload.answer?.id,
			answer_chosen_at:  payload.discussion.answer_chosen_at ? new Date(payload.discussion.answer_chosen_at) : null,
			answer_chosen_by: payload.discussion.answer_chosen_by?.id, //OPTIONAL CHAINING
			created_by: payload.discussion.user.id,
			author_association: payload.discussion.author_association,
			body: payload.discussion.body,
			category_id: payload.discussion.category.id,
			is_closed: payload.discussion.locked,
			closed_at: payload.discussion.locked_at
				? new Date(payload.discussion.locked_at)
				: null,
			created_at: new Date(payload.discussion.created_at),
			id: payload.discussion.id,
			is_answered: !!payload.answer, // T if there is an answer, F if not
			last_edited_at: new Date(payload.discussion.updated_at),
			is_locked: payload.discussion.locked,
			discussion_number: payload.discussion.number,
			// published_at: new Date(payload.discussion.created_at),
			published_at: new Date(),
			total_reaction_count: payload.discussion.reactions?.total_count || 0,
			repository_id: payload.repository.id,
			state_reason: payload.discussion.state_reason,
			title: payload.discussion.title,
			updated_at: new Date(payload.discussion.updated_at),
			total_upvote_count: payload.discussion.reactions.total_count,
			url: payload.discussion.repository_url,
			// labels: payload.discussion.labels?.map((label: any) => {
			//     return {
			//         discussion_id: payload.discussion.id,
			//         label_id: label.id,
			//     };
			// }),
			// poll: payload.discussion.poll?.map((poll: any) => {
			//     return {
			//         discussion_id: payload.discussion.id,
			//         poll_id: poll.id,
			//         question: poll.question,
			//         total_votes: poll.total_votes,
			//     };
			// }),
			// pollOptions: payload.discussion.poll?.map((poll: any) => {
			//     return {
			//         poll_id: poll.id,
			//         option_id: poll.option.id,
			//         option: poll.option.option,
			//         votes: poll.option.votes,
			//     };
			// }),
			// comments: payload.discussion.comments?.map((comment: any) => {
			//     return {
			//         discussion_id: payload.discussion.id,
			//         comment_id: comment.id,
			//     };
			// }),
		};
	}

	static createDiscussionCommentFromPayload(
		payload: any,
	): types.DiscussionComment {
		return {
			id: payload.comment.id,
			body: payload.comment.body || "",
			created_by: payload.comment.user.id,
			created_at: payload.comment.created_at
				? new Date(payload.comment.created_at)
				: new Date(),
			deleted_at: payload.comment.deleted_at
				? new Date(payload.comment.deleted_at)
				: new Date(),
			discussion_id: payload.discussion.id,
			edited_by: payload.comment.edited_by,
			is_answer: payload.comment.is_answer ? payload.comment.is_answer : false,
			is_minimized: payload.comment.is_minimized
				? payload.comment.is_minimized
				: false,
			last_edited_at: payload.comment.last_edited_at
				? new Date(payload.comment.last_edited_at)
				: new Date(),
			minimized_reason: payload.comment.minimized_reason,
			published_at: payload.comment.published_at
				? new Date(payload.comment.published_at)
				: new Date(),
			author_association: payload.comment.author_association,
			in_reply_to_id: payload.comment.id,
			plusone: payload.comment.reactions?.["+1"] || 0,
			minusone: payload.comment.reactions?.["-1"] || 0,
			laugh: payload.comment.reactions?.laugh || 0,
			hooray: payload.comment.reactions?.hooray || 0,
			confused: payload.comment.reactions?.confused || 0,
			heart: payload.comment.reactions?.heart || 0,
			rocket: payload.comment.reactions?.rocket || 0,
			eyes: payload.comment.reactions?.eyes || 0,
		};
	}

  static createDiscussionCommentAnswerFromPayload(
		payload: any,
	): types.DiscussionComment {
    return {
			id: payload.answer.id,
			body: payload.answer.body || "",
			created_by: payload.answer.user.id,
			created_at: payload.answer.created_at
				? new Date(payload.answer.created_at)
				: new Date(),
			deleted_at: payload.answer.deleted_at
				? new Date(payload.answer.deleted_at)
				: new Date(),
			discussion_id: payload.discussion.id,
			edited_by: payload.answer.edited_by,
			is_answer: payload.answer.is_answer ? payload.answer.is_answer : false,
			is_minimized: payload.answer.is_minimized
				? payload.answer.is_minimized
				: false,
			last_edited_at: payload.answer.last_edited_at
				? new Date(payload.answer.last_edited_at)
				: new Date(),
			minimized_reason: payload.answer.minimized_reason,
			published_at: payload.answer.published_at
				? new Date(payload.answer.published_at)
				: new Date(),
			author_association: payload.answer.author_association,
			in_reply_to_id: payload.answer.id,
      plusone: payload.answer.reactions?.["+1"] || 0,
			minusone: payload.answer.reactions?.["-1"] || 0,
			laugh: payload.answer.reactions?.laugh || 0,
			hooray: payload.answer.reactions?.hooray || 0,
			confused: payload.answer.reactions?.confused || 0,
			heart: payload.answer.reactions?.heart || 0,
			rocket: payload.answer.reactions?.rocket || 0,
			eyes: payload.answer.reactions?.eyes || 0,
		};
  }

	// static createDiscussionPollsFromPayload(payload: any): types.DiscussionPoll {
	//     return {
	//         poll_id: payload.option.id,
	//         discussion_id: payload.discussion.id,
	//         question: payload.option.id,
	//         total_votes: payload.option.votes,
	//     };
	// }

	// static createDiscussionPollOptionsFromPayload(payload: any): types.DiscussionPollOption {
	//     return {
	//         id: payload.option.id,
	//         discussion_id: payload.discussion.id,
	//         option: payload.option.option,
	//         votes: payload.option.votes,
	//     };
	// }

	static createMilestonesFromPayload(payload: any): types.Milestone {
		return {
			id: payload.milestone.id,
			node_id: payload.milestone.node_id,
			url: payload.milestone.url,
			milestone_number: payload.milestone.number,
			state: payload.milestone.state,
			title: payload.milestone.title,
			description: payload.milestone.description || "",
			created_by: payload.milestone.creator.id,
			open_issues: payload.milestone.open_issues,
			closed_issues: payload.milestone.closed_issues,
			created_at: new Date(payload.milestone.created_at),
			updated_at: new Date(payload.milestone.updated_at),
			closed_at: payload.milestone.closed_at ? new Date(payload.milestone.closed_at) : null,
			due_on: new Date(payload.milestone.due_on),
			repository_id: payload.repository.id,
		};
	}

	static createRepoLabelsFromPayload(
		payload: any,
		repo_id: number,
	): types.RepoLabel {
		// console.log(payload, repo_id)
		return {
			id: payload.id,
			node_id: payload.node_id,
			name: payload.name,
			color: payload.color,
			is_default: payload.default,
			description: payload.description || "",
			repository_id: repo_id,
		};
	}

	static createIssueLabelFromPayload(
		issue_id: number,
		issue_label_id: number,
	): types.IssueLabel {
		return {
			issue_id: issue_id,
			label_id: issue_label_id,
		};
	}

	static createDiscussionLabelFromPayload(
		payload_discussion_id: number,
		payload_label_id: number,
	): types.DiscussionLabel {
		return {
			discussion_id: payload_discussion_id,
			label_id: payload_label_id,
		};
	}

	static createMilestoneLabelFromPayload(
		payload_milestone_id: number,
		payload_label_id: number,
	): types.MilestoneLabel {
		return {
			milestone_id: payload_milestone_id,
			label_id: payload_label_id,
		};
	}

	static createPullRequestLabelFromPayload(
		pr_id: number,
		pr_label_id: number,
	): types.PullRequestLabel {
		return {
			pull_request_id: pr_id,
			label_id: pr_label_id,
		};
	}

	static createIssueAssigneeFromPayload(payload_issue_id: number, payload_assignee_id: number): types.IssueAssignee {
	    return {
	        issue_id: payload_issue_id,
	        assignee_id: payload_assignee_id,
	    };
	}

	static createPullRequestAssigneeFromPayload(payload_pr_id: number, payload_assignee_id: number): types.PullRequestAssignee {
	    return {
	        pullrequest_id: payload_pr_id,
	        assignee_id: payload_assignee_id,
	    };
	}

	static createIssueMilestoneFromPayload(
		payload_issue_id: number,
		payload_milestone_id: number,
	): types.IssueMilestone {
		return {
			issue_id: payload_issue_id,
			milestone_id: payload_milestone_id,
		};
	}

	static createPullRequestMilestoneFromPayload(
		payload_pr_id: number,
		payload_milestone_id: number,
	): types.PullRequestMilestone {
		return {
			pull_request_id: payload_pr_id,
			milestone_id: payload_milestone_id,
		};
	}

	static createSubIssueListFromPayload(payload_parent_id: number, payload_sub_id: number): types.SubIssueList {
	    return {
	        parent_id: payload_parent_id,
	        sub_id: payload_sub_id,
	    };
	}
}
