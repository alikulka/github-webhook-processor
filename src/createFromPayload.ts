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
			closed_at: new Date(payload.issue.closed_at),
			created_at: new Date(payload.issue.created_at),
			updated_at: new Date(payload.issue.updated_at),
			closed_by: payload.issue.closed_by,
			repository_id: payload.repository.id,
			author_association: payload.issue.author_association,
			total_reaction_count: payload.issue.reactions?.total_count || 0,
			sub_or_parent_issue: payload.issue.sub_or_parent_issue || "neither",
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
			total_reaction_count: payload.pull_request.reactions?.total_count || 0,
			merged_at: new Date(payload.pull_request.merged_at),
			diff_url: payload.pull_request.diff_url,
			draft: payload.pull_request.draft || false,
		};
	}

	// static createIssueCommentFromPayload(payload: any): types.IssueComment {
	// 	return {
	// 		id: payload.comment.id,
	// 		node_id: payload.comment.node_id,
	// 		url: payload.comment.url,
	// 		body: payload.comment.body || "",
	// 		created_by: payload.comment.user,
	// 		created_at: new Date(payload.comment.created_at),
	// 		updated_at: new Date(payload.comment.updated_at),
	// 		issue_id: payload.issue.id,
	// 		author_association: payload.comment.author_association,
	// 	};
	// }

	// static createIssueCommentReactionFromPayload(
	// 	payload: any,
	// ): types.IssueCommentReaction {
	// 	return {
	// 		issuecomment_id: payload.comment.id,
	// 		plusone: payload.comment.reactions?.["+1"] || 0,
	// 		minusone: payload.comment.reactions?.["-1"] || 0,
	// 		laugh: payload.comment.reactions?.laugh || 0,
	// 		hooray: payload.comment.reactions?.hooray || 0,
	// 		confused: payload.comment.reactions?.confused || 0,
	// 		heart: payload.comment.reactions?.heart || 0,
	// 		rocket: payload.comment.reactions?.rocket || 0,
	// 		eyes: payload.comment.reactions?.eyes || 0,
	// 	};
	// }

	// static createDiscussionCategoriesFromPayload(
	// 	payload: any,
	// ): types.DiscussionCategory {
	// 	return {
	// 		id: payload.discussion_category.id,
	// 		description: payload.discussion_category.description,
	// 		emoji: payload.discussion_category.emoji,
	// 		name: payload.discussion_category.name,
	// 		created_at: new Date(payload.discussion_category.created_at),
	// 		updated_at: new Date(payload.discussion_category.updated_at),
	// 		is_answerable: payload.discussion_category.is_answerable,
	// 		repository_id: payload.repository.id,
	// 		slug: payload.discussion_category.slug,
	// 	};
	// }

    // // static createDiscussionFromPayload(payload: any): types.Discussion {
    // //     return {
    // //         id: payload.discussion.id,
    // //         url: payload.discussion.url,
    // //         title: payload.discussion.title,
    // //         body: payload.discussion.body || "",
    // //         created_by: payload.discussion.user,
    // //         is_locked: payload.discussion.locked,
    // //         active_lock_reason: payload.discussion.active_lock_reason,
    // //         comments: payload.discussion.comments,
    // //         created_at: new Date(payload.discussion.created_at),
    // //         updated_at: new Date(payload.discussion.updated_at),
    // //         closed_at: new Date(payload.discussion.closed_at),
    // //         repository_id: payload.repository.id,
    // //         author_association: payload.discussion.author_association,
    // //         total_reaction_count: payload.discussion.reactions?.total_count || 0,
    // //     };
    // // }

    // // static createDiscussionCommentFromPayload(payload: any): types.DiscussionComment {
    // //     return {
    // //         id: payload.comment.id,
    // //         body: payload.comment.body || "",
    // //         created_by: payload.comment.user,
    // //         created_at: new Date(payload.comment.created_at),
    // //         deleted_at: new Date(payload.comment.deleted_at),
    // //         discussion_id: payload.discussion.id,
    // //         edited_by: payload.comment.edited_by,
    // //         is_answer: payload.comment.is_answer,
    // //         is_minimized: payload.comment.is_minimized,
    // //         last_edited_at: new Date(payload.comment.last_edited_at),
    // //         minimized_reason: payload.comment.minimized_reason,
    // //         published_at: new Date(payload.comment.published_at),
    // //         author_association: payload.comment.author_association,
    // //         in_reply_to_id: 
    // //     };
    // // }

    // static createDiscussionCommentReactionFromPayload(
    //     payload: any,
    // ): types.DiscussionCommentReaction {
    //     return {
    //         discussioncomment_id: payload.comment.id,
    //         plusone: payload.comment.reactions?.["+1"] || 0,
    //         minusone: payload.comment.reactions?.["-1"] || 0,
    //         laugh: payload.comment.reactions?.laugh || 0,
    //         hooray: payload.comment.reactions?.hooray || 0,
    //         confused: payload.comment.reactions?.confused || 0,
    //         heart: payload.comment.reactions?.heart || 0,
    //         rocket: payload.comment.reactions?.rocket || 0,
    //         eyes: payload.comment.reactions?.eyes || 0,
    //     };
    // }

    // // static createDiscussionPollsFromPayload(payload: any): types.DiscussionPoll {
    // //     return {
    // //         poll_id: payload.option.id,
    // //         discussion_id: payload.discussion.id,
    // //         option_id: payload.option.id,
    // //         total_votes: payload.option.votes,
    // //     };
    // // }

    // // static createDiscussionPollOptionsFromPayload(payload: any): types.DiscussionPollOption {
    // //     return {
    // //         id: payload.option.id,
    // //         discussion_id: payload.discussion.id,
    // //         option: payload.option.option,
    // //         votes: payload.option.votes,
    // //     };
    // // }

    // // static createMilestonesFromPayload(payload: any): types.Milestone {
    // //     return {
    // //         id: payload.milestone.id,
    // //         node_id: payload.milestone.node_id,
    // //         url: payload.milestone.url,
    // //         title: payload.milestone.title,
    // //         description: payload.milestone.description || "",
    // //         state: payload.milestone.state,
    // //         due_on: new Date(payload.milestone.due_on),
    // //         created_at: new Date(payload.milestone.created_at),
    // //         updated_at: new Date(payload.milestone.updated_at),
    // //         closed_at: new Date(payload.milestone.closed_at),
    // //         repository_id: payload.repository.id,
    // //     };
    // // }

    static createRepoLabelsFromPayload(payload: any): types.RepoLabel {
        return {
            id: payload.id,
            node_id: payload.node_id,
            name: payload.name,
            color: payload.color,
            default: payload.default,
            description: payload.description || "",
            repository_id: payload.repository.id,
        };
    }

    static createIssueLabelFromPayload(payload: any): types.IssueLabel {
        return {
            issue_id: payload.id,
            label_id: payload.id,
        };
    }

    // static createDiscussionLabelFromPayload(payload: any): types.DiscussionLabel {
    //     return {
    //         discussion_id: payload.discussion.id,
    //         label_id: payload.label.id,
    //     };
    // }

    // static createMilestoneLabelFromPayload(payload: any): types.MilestoneLabel {
    //     return {
    //         milestone_id: payload.milestone.id,
    //         label_id: payload.label.id,
    //     };
    // }

    // static createPullRequestLabelFromPayload(payload: any): types.PullRequestLabel {
    //     return {
    //         pull_request_id: payload.pull_request.id,
    //         label_id: payload.label.id,
    //     };
    // }

    // static createIssueAssigneeFromPayload(payload: any): types.IssueAssignee {
    //     return {
    //         issue_id: payload.issue.id,
    //         assignee_id: payload.assignee.id,
    //     };
    // }

    // static createPullRequestAssigneeFromPayload(payload: any): types.PullRequestAssignee {
    //     return {
    //         pullrequest_id: payload.pull_request.id,
    //         assignee_id: payload.assignee.id,
    //     };
    // }

    // static createIssueMilestoneFromPayload(payload: any): types.IssueMilestone {
    //     return {
    //         issue_id: payload.issue.id,
    //         milestone_id: payload.milestone.id,
    //     };
    // }

    // static createPullRequestMilestoneFromPayload(payload: any): types.PullRequestMilestone {
    //     return {
    //         pull_request_id: payload.pull_request.id,
    //         milestone_id: payload.milestone.id,
    //     };
    // }

    // static createSubIssueListFromPayload(payload: any): types.SubIssueList {
    //     return {
    //         parent_id: payload.issue.id,
    //         sub_id: payload.sub_issue.id,
    //     };
    // }
}
