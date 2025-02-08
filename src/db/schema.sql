-- SQL dump generated using DBML (dbml.dbdiagram.io)
-- Database: PostgreSQL
-- Generated at: 2025-02-07T23:40:04.122Z

CREATE TYPE "IssueState" AS ENUM (
  'open',
  'closed'
);

CREATE TYPE "PullRequestState" AS ENUM (
  'open',
  'closed',
  'merged'
);

CREATE TYPE "IssueStateReason" AS ENUM (
  'completed',
  'reopened',
  'not_planned'
);

CREATE TYPE "AuthorAssociation" AS ENUM (
  'owner',
  'collaborator',
  'contributor',
  'member',
  'first_timer',
  'first_time_contributor',
  'mannequin',
  'none'
);

CREATE TYPE "ActiveLockReason" AS ENUM (
  'off_topic',
  'too_heated',
  'resolved',
  'spam',
  'other'
);

CREATE TYPE "DiscussionStateReason" AS ENUM (
  'resolved',
  'outdated',
  'duplicate',
  'reopened'
);

CREATE TYPE "DiscussionCommentMinimizedReason" AS ENUM (
  'abuse',
  'off_topic',
  'outdated',
  'resolved',
  'spam',
  'duplicate',
  'other'
);

CREATE TYPE "SubOrParentIssue" AS ENUM (
  'sub',
  'sub_and_parent',
  'parent',
  'neither'
);

CREATE TABLE "repositories" (
  "id" "bigint unsigned" UNIQUE PRIMARY KEY NOT NULL,
  "node_id" text NOT NULL,
  "name" text NOT NULL,
  "full_name" text NOT NULL,
  "owner" int NOT NULL,
  "url" text NOT NULL,
  "description" text NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL,
  "pushed_at" timestamp,
  "watchers_count" int,
  "forks_count" int,
  "size" int,
  "default_branch" text,
  "open_issues_count" int,
  "is_fork" boolean NOT NULL,
  "is_private" boolean NOT NULL,
  "is_template" boolean,
  "has_issues" boolean,
  "has_projects" boolean,
  "has_wiki" boolean,
  "has_pages" boolean,
  "has_downloads" boolean,
  "has_discussions" boolean,
  "forking_allowed" boolean,
  "is_archived" boolean,
  "is_disabled" boolean,
  "visibility" text
);

CREATE TABLE "owners" (
  "id" int UNIQUE PRIMARY KEY NOT NULL,
  "login" text NOT NULL,
  "node_id" text NOT NULL,
  "url" text NOT NULL,
  "avatar_url" text NOT NULL,
  "description" text,
  "company" text,
  "email" text,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL,
  "is_verified" boolean,
  "is_organization" boolean NOT NULL
);

CREATE TABLE "issues" (
  "id" "bigint unsigned" UNIQUE PRIMARY KEY NOT NULL,
  "node_id" text NOT NULL,
  "url" text NOT NULL,
  "issue_number" int NOT NULL,
  "state" IssueState NOT NULL,
  "state_reason" IssueStateReason,
  "title" text NOT NULL,
  "body" text,
  "created_by" int NOT NULL,
  "locked" boolean NOT NULL,
  "active_lock_reason" text,
  "num_comments" int NOT NULL,
  "closed_at" timestamp,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL,
  "closed_by" int,
  "repository_id" "bigint unsigned" NOT NULL,
  "author_association" AuthorAssociation NOT NULL,
  "total_reaction_count" int NOT NULL,
  "sub_or_parent_issue" SubOrParentIssue
);

CREATE TABLE "pull_requests" (
  "id" "bigint unsigned" UNIQUE PRIMARY KEY NOT NULL,
  "node_id" text NOT NULL,
  "url" text NOT NULL,
  "pull_request_number" int NOT NULL,
  "state" PullRequestState NOT NULL,
  "state_reason" IssueStateReason,
  "title" text NOT NULL,
  "body" text,
  "created_by" int NOT NULL,
  "locked" boolean NOT NULL,
  "active_lock_reason" ActiveLockReason,
  "num_comments" int NOT NULL,
  "closed_at" timestamp,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL,
  "closed_by" int,
  "repository_id" "bigint unsigned" NOT NULL,
  "author_association" AuthorAssociation NOT NULL,
  "total_reaction_count" int NOT NULL,
  "merged_at" timestamp,
  "diff_url" text NOT NULL,
  "draft" boolean NOT NULL
);

CREATE TABLE "issuecomments" (
  "id" "bigint unsigned" UNIQUE PRIMARY KEY NOT NULL,
  "node_id" text NOT NULL,
  "url" text NOT NULL,
  "body" text,
  "created_by" int NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL,
  "issue_id" "bigint unsigned" NOT NULL,
  "author_association" AuthorAssociation NOT NULL
);

CREATE TABLE "issuecommentreactions" (
  "issuecomment_id" "bigint unsigned" NOT NULL,
  "plusone" int,
  "minusone" int,
  "laugh" int,
  "hooray" int,
  "confused" int,
  "heart" int,
  "rocket" int,
  "eyes" int
);

CREATE TABLE "discussions" (
  "active_lock_reason" ActiveLockReason,
  "answer" int,
  "answer_chosen_at" timestamp,
  "answer_chosen_by" int,
  "created_by" int,
  "author_association" AuthorAssociation NOT NULL,
  "body" text NOT NULL,
  "category_id" int,
  "is_closed" boolean NOT NULL,
  "closed_at" timestamp,
  "created_at" timestamp NOT NULL,
  "id" text UNIQUE PRIMARY KEY NOT NULL,
  "is_answered" boolean,
  "last_edited_at" timestamp,
  "is_locked" boolean NOT NULL,
  "discussion_number" int NOT NULL,
  "published_at" timestamp,
  "total_reaction_count" int NOT NULL,
  "repository_id" "bigint unsigned" NOT NULL,
  "state_reason" DiscussionStateReason,
  "title" text NOT NULL,
  "updated_at" timestamp NOT NULL,
  "total_upvote_count" int NOT NULL,
  "url" text NOT NULL
);

CREATE TABLE "discussionpolls" (
  "discussion_id" text,
  "poll_id" text UNIQUE PRIMARY KEY NOT NULL,
  "question" text NOT NULL,
  "total_votes" int NOT NULL
);

CREATE TABLE "discussionpolloptions" (
  "poll_id" text,
  "option_id" text UNIQUE PRIMARY KEY NOT NULL,
  "option" text NOT NULL,
  "votes" int NOT NULL
);

CREATE TABLE "discussioncomments" (
  "created_by" int,
  "author_association" AuthorAssociation NOT NULL,
  "body" text NOT NULL,
  "created_at" timestamp NOT NULL,
  "deleted_at" timestamp,
  "discussion_id" text NOT NULL,
  "id" text UNIQUE PRIMARY KEY NOT NULL,
  "edited_by" int,
  "is_answer" boolean NOT NULL,
  "is_minimized" boolean NOT NULL,
  "lasted_edited_at" timestamp,
  "minimized_reason" DiscussionCommentMinimizedReason,
  "published_at" timestamp,
  "in_reply_to_id" text
);

CREATE TABLE "discussioncommentreactions" (
  "discussioncomment_id" text NOT NULL,
  "plusone" int,
  "minusone" int,
  "laugh" int,
  "hooray" int,
  "confused" int,
  "heart" int,
  "rocket" int,
  "eyes" int
);

CREATE TABLE "discussioncategories" (
  "created_at" timestamp NOT NULL,
  "description" text,
  "emoji" text NOT NULL,
  "id" int UNIQUE PRIMARY KEY NOT NULL,
  "is_answerable" boolean NOT NULL,
  "name" text NOT NULL,
  "repository_id" "bigint unsigned" NOT NULL,
  "slug" text NOT NULL,
  "updated_at" timestamp NOT NULL
);

CREATE TABLE "milestones" (
  "id" int UNIQUE PRIMARY KEY NOT NULL,
  "node_id" text NOT NULL,
  "url" text NOT NULL,
  "milestone_number" int NOT NULL,
  "state" IssueState NOT NULL,
  "title" text NOT NULL,
  "description" text,
  "created_by" int,
  "open_issues" int NOT NULL,
  "closed_issues" int NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL,
  "closed_at" timestamp,
  "due_on" timestamp
);

CREATE TABLE "repo_labels" (
  "id" "bigint unsigned" UNIQUE PRIMARY KEY NOT NULL,
  "repository_id" "bigint unsigned" NOT NULL,
  "node_id" text NOT NULL,
  "name" text NOT NULL,
  "description" text,
  "color" text NOT NULL,
  "default" boolean NOT NULL
);

CREATE TABLE "org_types" (
  "id" "bigint unsigned" UNIQUE PRIMARY KEY NOT NULL,
  "owner_id" "bigint unsigned" NOT NULL,
  "node_id" text NOT NULL,
  "name" text NOT NULL,
  "description" text,
  "color" text NOT NULL,
  "default" boolean NOT NULL
);

CREATE TABLE "issue_labels" (
  "issue_id" "bigint unsigned" NOT NULL,
  "label_id" "bigint unsigned" NOT NULL
);

CREATE TABLE "discussion_labels" (
  "discussion_id" text NOT NULL,
  "label_id" "bigint unsigned" NOT NULL
);

CREATE TABLE "milestone_labels" (
  "milestone_id" int NOT NULL,
  "label_id" "bigint unsigned" NOT NULL
);

CREATE TABLE "pull_request_labels" (
  "pull_request_id" "bigint unsigned" NOT NULL,
  "label_id" "bigint unsigned" NOT NULL
);

CREATE TABLE "issue_type" (
  "issue_id" "bigint unsigned" NOT NULL,
  "type_id" "bigint unsigned" NOT NULL
);

CREATE TABLE "issue_assignees" (
  "issue_id" "bigint unsigned" NOT NULL,
  "assignee_id" int
);

CREATE TABLE "pull_request_assignees" (
  "pull_request_id" "bigint unsigned" NOT NULL,
  "assignee_id" int
);

CREATE TABLE "issue_milestones" (
  "issue_id" "bigint unsigned" NOT NULL,
  "milestone_id" int NOT NULL
);

CREATE TABLE "pull_request_milestones" (
  "pull_request_id" "bigint unsigned" NOT NULL,
  "milestone_id" int NOT NULL
);

CREATE TABLE "sub_issue_list" (
  "parent_id" "bigint unsigned" NOT NULL,
  "sub_id" "bigint unsigned" NOT NULL
);

ALTER TABLE "repositories" ADD FOREIGN KEY ("owner") REFERENCES "owners" ("id");

ALTER TABLE "issues" ADD FOREIGN KEY ("created_by") REFERENCES "owners" ("id");

ALTER TABLE "issues" ADD FOREIGN KEY ("closed_by") REFERENCES "owners" ("id");

ALTER TABLE "issues" ADD FOREIGN KEY ("repository_id") REFERENCES "repositories" ("id");

ALTER TABLE "pull_requests" ADD FOREIGN KEY ("created_by") REFERENCES "owners" ("id");

ALTER TABLE "pull_requests" ADD FOREIGN KEY ("closed_by") REFERENCES "owners" ("id");

ALTER TABLE "pull_requests" ADD FOREIGN KEY ("repository_id") REFERENCES "repositories" ("id");

ALTER TABLE "issuecomments" ADD FOREIGN KEY ("created_by") REFERENCES "owners" ("id");

ALTER TABLE "issuecomments" ADD FOREIGN KEY ("issue_id") REFERENCES "issues" ("id");

ALTER TABLE "issuecommentreactions" ADD FOREIGN KEY ("issuecomment_id") REFERENCES "issuecomments" ("id");

ALTER TABLE "discussions" ADD FOREIGN KEY ("answer") REFERENCES "discussioncomments" ("id");

ALTER TABLE "discussions" ADD FOREIGN KEY ("answer_chosen_by") REFERENCES "owners" ("id");

ALTER TABLE "discussions" ADD FOREIGN KEY ("created_by") REFERENCES "owners" ("id");

ALTER TABLE "discussions" ADD FOREIGN KEY ("category_id") REFERENCES "discussioncategories" ("id");

ALTER TABLE "discussions" ADD FOREIGN KEY ("repository_id") REFERENCES "repositories" ("id");

ALTER TABLE "discussionpolls" ADD FOREIGN KEY ("discussion_id") REFERENCES "discussions" ("id");

ALTER TABLE "discussionpolloptions" ADD FOREIGN KEY ("poll_id") REFERENCES "discussionpolls" ("poll_id");

ALTER TABLE "discussioncomments" ADD FOREIGN KEY ("created_by") REFERENCES "owners" ("id");

ALTER TABLE "discussioncomments" ADD FOREIGN KEY ("discussion_id") REFERENCES "discussions" ("id");

ALTER TABLE "discussioncomments" ADD FOREIGN KEY ("edited_by") REFERENCES "owners" ("id");

ALTER TABLE "discussioncomments" ADD FOREIGN KEY ("in_reply_to_id") REFERENCES "discussioncomments" ("id");

ALTER TABLE "discussioncommentreactions" ADD FOREIGN KEY ("discussioncomment_id") REFERENCES "discussioncomments" ("id");

ALTER TABLE "discussioncategories" ADD FOREIGN KEY ("repository_id") REFERENCES "repositories" ("id");

ALTER TABLE "milestones" ADD FOREIGN KEY ("created_by") REFERENCES "owners" ("id");

ALTER TABLE "repo_labels" ADD FOREIGN KEY ("repository_id") REFERENCES "repositories" ("id");

ALTER TABLE "org_types" ADD FOREIGN KEY ("owner_id") REFERENCES "owners" ("id");

ALTER TABLE "issue_labels" ADD FOREIGN KEY ("issue_id") REFERENCES "issues" ("id");

ALTER TABLE "issue_labels" ADD FOREIGN KEY ("label_id") REFERENCES "repo_labels" ("id");

ALTER TABLE "discussion_labels" ADD FOREIGN KEY ("discussion_id") REFERENCES "discussions" ("id");

ALTER TABLE "discussion_labels" ADD FOREIGN KEY ("label_id") REFERENCES "repo_labels" ("id");

ALTER TABLE "milestone_labels" ADD FOREIGN KEY ("milestone_id") REFERENCES "milestones" ("id");

ALTER TABLE "milestone_labels" ADD FOREIGN KEY ("label_id") REFERENCES "repo_labels" ("id");

ALTER TABLE "pull_request_labels" ADD FOREIGN KEY ("pull_request_id") REFERENCES "pull_requests" ("id");

ALTER TABLE "pull_request_labels" ADD FOREIGN KEY ("label_id") REFERENCES "repo_labels" ("id");

ALTER TABLE "issue_type" ADD FOREIGN KEY ("issue_id") REFERENCES "issues" ("id");

ALTER TABLE "issue_type" ADD FOREIGN KEY ("type_id") REFERENCES "org_types" ("id");

ALTER TABLE "issue_assignees" ADD FOREIGN KEY ("issue_id") REFERENCES "issues" ("id");

ALTER TABLE "issue_assignees" ADD FOREIGN KEY ("assignee_id") REFERENCES "owners" ("id");

ALTER TABLE "pull_request_assignees" ADD FOREIGN KEY ("pull_request_id") REFERENCES "pull_requests" ("id");

ALTER TABLE "pull_request_assignees" ADD FOREIGN KEY ("assignee_id") REFERENCES "owners" ("id");

ALTER TABLE "issue_milestones" ADD FOREIGN KEY ("issue_id") REFERENCES "issues" ("id");

ALTER TABLE "issue_milestones" ADD FOREIGN KEY ("milestone_id") REFERENCES "milestones" ("id");

ALTER TABLE "pull_request_milestones" ADD FOREIGN KEY ("pull_request_id") REFERENCES "pull_requests" ("id");

ALTER TABLE "pull_request_milestones" ADD FOREIGN KEY ("milestone_id") REFERENCES "milestones" ("id");

ALTER TABLE "sub_issue_list" ADD FOREIGN KEY ("parent_id") REFERENCES "issues" ("id");

ALTER TABLE "sub_issue_list" ADD FOREIGN KEY ("sub_id") REFERENCES "issues" ("id");
