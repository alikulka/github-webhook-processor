// This files contains all the types that match the shapes of data in the database

export interface DatabaseConfig {
	host: string;
	database: string;
	user: string;
	password: string;
	port: number;
}

export interface GitHubWebhookEvent {
	Records: [
		{
			Sns: {
				Message: string;
			};
		},
	];
}

export interface WebhookPayload {
	action: string;
	repository: Repository;
	sender: Owner;
	[key: string]: any;
}

export interface Repository {
	id: number;
	node_id: string;
	name: string;
	full_name: string;
	owner: Owner;
	url: string;
	description: string;
	created_at: Date;
	updated_at: Date;
	pushed_at: Date;
	watchers_count: number;
	forks_count: number;
	size: number;
	default_branch: string;
	open_issues_count: number;
	is_fork: boolean;
	is_private: boolean;
	has_issues: boolean;
	has_projects: boolean;
	has_wiki: boolean;
	has_pages: boolean;
	has_downloads: boolean;
	has_discussions: boolean;
	forking_allowed: boolean;
	is_archived: boolean;
	is_disabled: boolean;
	visibility: string;
}

export interface Owner {
	id: number;
	login: string;
	node_id: string;
	url: string;
	avatar_url: string;
	description?: string;
	company?: string;
	email?: string;
	created_at: Date;
	updated_at: Date;
	is_verified: boolean;
	is_organization: boolean;
}

export interface Issue {
	id: number;
	node_id: string;
	url: string;
	issue_number: number;
	state: "open" | "closed";
	title: string;
	body: string;
	created_by: Owner;
	locked: boolean;
	active_lock_reason: string;
	num_comments: number;
	closed_at: Date | null;
	created_at: Date;
	updated_at: Date;
	closed_by: Owner;
	repository_id: Repository;
	author_association:
		| "OWNER"
		| "COLLABORATOR"
		| "CONTRIBUTOR"
		| "MEMBER"
		| "FIRST_TIMER"
		| "FIRST_TIME_CONTRIBUTOR"
		| "MANNEQUIN"
		| "NONE";
	total_reaction_count: number;
	sub_or_parent_issue: "SUB" | "SUB_AND_PARENT" | "PARENT" | "NEITHER";

	labels?: RepoLabel[];
	assignees?: Owner[];
	milestone?: Milestone;
}

export interface PullRequest {
	id: number;
	node_id: string;
	url: string;
	pull_request_number: number;
	state: "OPEN" | "CLOSED";
	state_reason: "COMPLETED" | "REOPENED" | "NOT_PLANNED";
	title: string;
	body: string;
	created_by: Owner;
	locked: boolean;
	active_lock_reason:
		| "OFF_TOPIC"
		| "TOO_HEATED"
		| "RESOLVED"
		| "RESOLVED"
		| "SPAM"
		| "OTHER";
	num_comments: number;
	closed_at: Date | null;
	created_at: Date;
	updated_at: Date;
	closed_by: Owner;
	repository_id: Repository;
	author_association:
		| "OWNER"
		| "COLLABORATOR"
		| "CONTRIBUTOR"
		| "MEMBER"
		| "FIRST_TIMER"
		| "FIRST_TIME_CONTRIBUTOR"
		| "MANNEQUIN"
		| "NONE";
	total_reaction_count: number;
	merged_at: Date;
	diff_url: string;
	draft: boolean;

	labels?: RepoLabel[];
	assignees?: Owner[];
	milestone?: Milestone;
}

export interface IssueComment {
	id: number;
	node_id: string;
	url: string;
	body: string;
	created_by: Owner;
	created_at: Date;
	updated_at: Date;
	issue_id: Issue;
	author_association:
		| "OWNER"
		| "COLLABORATOR"
		| "CONTRIBUTOR"
		| "MEMBER"
		| "FIRST_TIMER"
		| "FIRST_TIME_CONTRIBUTOR"
		| "MANNEQUIN"
		| "NONE";
	reactions?: IssueCommentReaction;
}

export interface IssueCommentReaction {
	issuecomment_id: number;
	plusone: number;
	minusone: number;
	laugh: number;
	hooray: number;
	confused: number;
	heart: number;
	rocket: number;
	eyes: number;
}

export interface Discussion {
	active_lock_reason:
		| "OFF_TOPIC"
		| "TOO_HEATED"
		| "RESOLVED"
		| "RESOLVED"
		| "SPAM"
		| "OTHER";
	answer?: DiscussionComment;
	answer_chosen_at: Date;
	answer_chosen_by: number;
	created_by: number;
	author_association:
		| "OWNER"
		| "COLLABORATOR"
		| "CONTRIBUTOR"
		| "MEMBER"
		| "FIRST_TIMER"
		| "FIRST_TIME_CONTRIBUTOR"
		| "MANNEQUIN"
		| "NONE";
	body: string;
	category_id: DiscussionCategory;
	is_closed: boolean;
	closed_at: Date | null;
	created_at: Date;
	id: string;
	is_answered: boolean;
	last_edited_at: Date;
	is_locked: boolean;
	discussion_number: number;
	published_at: Date;
	total_reaction_count: number;
	repository_id: Repository;
	state_reason: "COMPLETED" | "REOPENED" | "NOT_PLANNED";
	title: string;
	updated_at: Date;
	total_upvote_count: number;
	url: string;
	labels?: DiscussionLabel[];
	poll?: DiscussionPoll[];
	pollOptions?: DiscussionPollOption[];
	comments?: DiscussionComment[];
}

export interface DiscussionPoll {
	discussion_id: number;
	poll_id: string;
	question: string;
	total_votes: number;
}

export interface DiscussionPollOption {
	poll_id: number;
	option_id: string;
	option: string;
	votes: number;
}

export interface DiscussionComment {
	created_by: Owner;
	author_association:
		| "OWNER"
		| "COLLABORATOR"
		| "CONTRIBUTOR"
		| "MEMBER"
		| "FIRST_TIMER"
		| "FIRST_TIME_CONTRIBUTOR"
		| "MANNEQUIN"
		| "NONE";
	body: string;
	created_at: Date;
	deleted_at: Date;
	discussion_id: Discussion;
	id: string;
	edited_by: Owner;
	is_answer: boolean;
	is_minimized: boolean;
	last_edited_at: Date;
	minimized_reason:
		| "ABUSE"
		| "OFF_TOPIC"
		| "OUTDATED"
		| "RESOLVED"
		| "SPAM"
		| "DUPLICATE"
		| "OTHER";
	published_at: Date;
	in_reply_to_id: DiscussionComment;
	reactions?: DiscussionCommentReaction;
}

export interface DiscussionCommentReaction {
	discussioncomment_id: number;
	plusone: number;
	minusone: number;
	laugh: number;
	hooray: number;
	confused: number;
	heart: number;
	rocket: number;
	eyes: number;
}

export interface DiscussionCategory {
	created_at: Date;
	description: string;
	emoji: string;
	id: number;
	is_answerable: boolean;
	name: string;
	repository_id: Repository;
	slug: string;
	updated_at: Date;
}

export interface Milestone {
	id: number;
	node_id: string;
	url: string;
	milestone_number: number;
	state: "OPEN" | "CLOSED";
	title: string;
	description: string;
	created_by: Owner;
	open_issues: number;
	closed_issues: number;
	created_at: Date;
	updated_at: Date;
	closed_at: Date | null;
	due_on: Date;
	repository_id: number;
}

export interface RepoLabel {
	id: number;
	node_id: string;
	name: string;
	description: string;
	color: string;
	is_default: boolean;
	repository_id: number;
}

export interface IssueLabel {
	issue_id: number;
	label_id: number;
}

export interface DiscussionLabel {
	discussion_id: number;
	label_id: number;
}

export interface MilestoneLabel {
	milestone_id: number;
	label_id: number;
}

export interface PullRequestLabel {
	pull_request_id: number;
	label_id: number;
}

export interface IssueAssignee {
	issue_id: number;
	assignee_id: number;
}

export interface PullRequestAssignee {
	pullrequest_id: number;
	assignee_id: number;
}

export interface IssueMilestone {
	issue_id: number;
	milestone_id: number;
}

export interface PullRequestMilestone {
	pull_request_id: number;
	milestone_id: number;
}

export interface SubIssueList {
	parent_id: number;
	sub_id: number;
}
