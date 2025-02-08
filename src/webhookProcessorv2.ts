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
    RepoLabel = "repo_label",
    Milestone = "milestone",
    SubIssue = "sub_issue"
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
    Milestoned = "Milestoned",
    Demilestoned = "Demilestoned"
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

    private issueCommentReactionOperations: DatabaseOperations<types.IssueCommentReaction> =
        {
            tableName: "issuecommentreactions",
            operations: {
                insert: (issue_comment_reaction) =>
                    this.upserts.insertIssueCommentReaction(issue_comment_reaction),
                update: (issue_comment_reaction) =>
                    this.upserts.updateIssueCommentReaction(issue_comment_reaction),
                upsert: (issue_comment_reaction) =>
                    this.upserts.upsertIssueCommentReaction(issue_comment_reaction),
            },
            entityName: "Issue Comment Reaction",
            identifierColumn: "issuecomment_id",
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
    
    private discussionCommentReactionOperations: DatabaseOperations<types.DiscussionCommentReaction> =
        {
            tableName: "discussioncommentreactions",
            operations: {
                insert: (discussion_comment_reaction) =>
                    this.upserts.insertDiscussionCommentReactions(discussion_comment_reaction),
                update: (discussion_comment_reaction) =>
                    this.upserts.updateDiscussionCommentReactions(discussion_comment_reaction),
                upsert: (discussion_comment_reaction) =>
                    this.upserts.upsertDiscussionCommentReactions(discussion_comment_reaction),
            },
            entityName: "Discussion Comment Reaction",
            identifierColumn: "discussioncomment_id",
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

    private discussionPollOperations: DatabaseOperations<types.DiscussionPoll> =
        {
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

    private milestoneOperations: DatabaseOperations<types.Milestone> =
        {
            tableName: "milestones",
            operations: {
                insert: (milestone) =>
                    this.upserts.insertMilestone(milestone),
                update: (milestone) =>
                    this.upserts.updateMilestone(milestone),
                upsert: (milestone) =>
                    this.upserts.upsertMilestone(milestone),
            },
            entityName: "Milestone",
            identifierColumn: "id",
        };
    
    private repoLabelOperations: DatabaseOperations<types.RepoLabel> =
        {
            tableName: "repolabels",
            operations: {
                insert: (repo_label) =>
                    this.upserts.insertRepoLabels(repo_label),
                update: (repo_label) =>
                    this.upserts.updateRepoLabels(repo_label),
                upsert: (repo_label) =>
                    this.upserts.upsertRepoLabels(repo_label),
            },
            entityName: "Repo Label",
            identifierColumn: "id",
        };

    
    private issueLabelOperations: DatabaseOperations<types.IssueLabel> =
        {
            tableName: "issuelabels",
            operations: {
                insert: (issue_label) =>
                    this.upserts.insertIssueLabels(issue_label),
                update: (issue_label) =>
                    this.upserts.updateIssueLabels(issue_label),
                upsert: (issue_label) =>
                    this.upserts.upsertIssueLabels(issue_label),
            },
            entityName: "Issue Label",
            identifierColumn: "id",
        };
    
    private discussionLabelOperations: DatabaseOperations<types.DiscussionLabel> =
        {
            tableName: "discussionlabels",
            operations: {
                insert: (discussion_label) =>
                    this.upserts.insertDiscussionLabels(discussion_label),
                update: (discussion_label) =>
                    this.upserts.updateDiscussionLabels(discussion_label),
                upsert: (discussion_label) =>
                    this.upserts.upsertDiscussionLabels(discussion_label),
            },
            entityName: "Discussion Label",
            identifierColumn: "id",
        };
    
    private milestoneLabelOperations: DatabaseOperations<types.MilestoneLabel> =
        {
            tableName: "milestonelabels",
            operations: {
                insert: (milestone_label) =>
                    this.upserts.insertMilestoneLabels(milestone_label),
                update: (milestone_label) =>
                    this.upserts.updateMilestoneLabels(milestone_label),
                upsert: (milestone_label) =>
                    this.upserts.upsertMilestoneLabels(milestone_label),
            },
            entityName: "Milestone Label",
            identifierColumn: "id",
        };
    
    private pullRequestLabelOperations: DatabaseOperations<types.PullRequestLabel> =
        {
            tableName: "pullrequestlabels",
            operations: {
                insert: (pull_request_label) =>
                    this.upserts.insertPullRequestLabels(pull_request_label),
                update: (pull_request_label) =>
                    this.upserts.updatePullRequestLabels(pull_request_label),
                upsert: (pull_request_label) =>
                    this.upserts.upsertPullRequestLabels(pull_request_label),
            },
            entityName: "Pull Request Label",
            identifierColumn: "id",
        };
    
    private issueMilestoneOperations: DatabaseOperations<types.IssueMilestone> =
        {
            tableName: "issuemilestones",
            operations: {
                insert: (issue_milestone) =>
                    this.upserts.insertIssueMilestone(issue_milestone),
                update: (issue_milestone) =>
                    this.upserts.updateIssueMilestone(issue_milestone),
                upsert: (issue_milestone) =>
                    this.upserts.upsertIssueMilestone(issue_milestone),
            },
            entityName: "Issue Milestone",
            identifierColumn: "id",
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
    
    private subIssueListOperations: DatabaseOperations<types.SubIssueList> =
        {
            tableName: "subissuelists",
            operations: {
                insert: (sub_issue_list) =>
                    this.upserts.insertSubIssueList(sub_issue_list),
                update: (sub_issue_list) =>
                    this.upserts.updateSubIssueList(sub_issue_list),
                upsert: (sub_issue_list) =>
                    this.upserts.upsertSubIssueList(sub_issue_list),
            },
            entityName: "Sub Issue List",
            identifierColumn: "id",
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
            const query = `SELECT EXISTS(SELECT 1 FROM ${operations.tableName} WHERE ${operations.identifierColumn} = $1)`;
            const result = await this.client.query(query, [identifier]);
            const exists = result.rows[0].exists;

            if (exists) {
                console.log(`${operations.entityName} exists, updating...`);
                await operations.operations.update(entity);
            } else {
                console.log(`${operations.entityName} doesn't exist, inserting...`);
                await operations.operations.insert(entity);
            }
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
        const owner = PayloadMapper.createOwnerFromPayload(payload.issue.user);
        const repo = PayloadMapper.createRepositoryFromPayload(payload, owner);
        const issue = PayloadMapper.createIssueFromPayload(payload);

        // Handle owner first
        await this.handleDatabaseOperation(owner, this.ownerOperations, owner.id);

        // Then repository
        await this.handleDatabaseOperation(
            repo,
            this.repositoryOperations,
            repo.id,
        );

        // Then issue
        await this.handleDatabaseOperation(issue, this.issueOperations, issue.id);

        // Handle closed_by user if exists
        if (payload.issue.closed_by) {
            const closedByUser = PayloadMapper.createOwnerFromPayload(
                payload.issue.closed_by,
            );
            await this.handleDatabaseOperation(
                closedByUser,
                this.ownerOperations,
                closedByUser.id,
            );
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
        await this.handleDatabaseOperation(
            pullRequest,
            this.pullRequestOperations,
            pullRequest.id,
        );

        // Handle closed_by user if exists
        if (payload.pull_request.closed_by) {
            const closedByUser = PayloadMapper.createOwnerFromPayload(
                payload.pull_request.closed_by,
            );
            await this.handleDatabaseOperation(
                closedByUser,
                this.ownerOperations,
                closedByUser.id,
            );
        }
    }

    private async processLabel(payload: any, context: string): Promise<void> {
        // First, ensure the label exists in repo_labels
        const label = PayloadMapper.createRepoLabelsFromPayload(payload.label);
        await this.handleDatabaseOperation(
          label,
          this.repoLabelOperations,
          label.id
        );
    
        // Then handle the junction table based on context
        switch(context) {
          case 'issue': {
            const issueLabel = PayloadMapper.createIssueLabelFromPayload(payload);
            await this.handleDatabaseOperation(
              issueLabel,
              this.issueLabelOperations,
              issueLabel.issue_id
            );
            break;
          }
          
          case 'pull_request': {
            const prLabel = PayloadMapper.createPullRequestLabelFromPayload(payload);
            await this.handleDatabaseOperation(
              prLabel,
              this.pullRequestLabelOperations,
              prLabel.pull_request_id
            );
            break;
          }
          
          case 'discussion': {
            const discussionLabel = PayloadMapper.createDiscussionLabelFromPayload(payload);
            await this.handleDatabaseOperation(
              discussionLabel,
              this.discussionLabelOperations,
              discussionLabel.discussion_id
            );
            break;
          }
        }
      }
    
      private async processReaction(payload: any, context: string): Promise<void> {
        switch(context) {
          case 'issue_comment': {
            const commentReaction = PayloadMapper.createIssueCommentReactionFromPayload(payload);
            await this.handleDatabaseOperation(
              commentReaction,
              this.issueCommentReactionOperations,
              commentReaction.issuecomment_id
            );
            break;
          }
          
          case 'discussion_comment': {
            const discussionCommentReaction = PayloadMapper.createDiscussionCommentReactionFromPayload(payload);
            await this.handleDatabaseOperation(
              discussionCommentReaction,
              this.discussionCommentReactionOperations,
              discussionCommentReaction.discussioncomment_id
            );
            break;
          }
        }
      }
    
      private async processMilestone(payload: any, context: string): Promise<void> {
        // First, ensure the milestone exists
        const milestone = PayloadMapper.createMilestonesFromPayload(payload.milestone);
        await this.handleDatabaseOperation(
          milestone,
          this.milestoneOperations,
          milestone.id
        );
    
        // Then handle the junction table based on context
        switch(context) {
          case 'issue': {
            const issueMilestone = PayloadMapper.createIssueMilestoneFromPayload(payload);
            await this.handleDatabaseOperation(
              issueMilestone,
              this.issueMilestoneOperations,
              issueMilestone.issue_id
            );
            break;
          }
          
          case 'pull_request': {
            const prMilestone = PayloadMapper.createPullRequestMilestoneFromPayload(payload);
            await this.handleDatabaseOperation(
              prMilestone,
              this.pullRequestMilestoneOperations,
              prMilestone.pull_request_id
            );
            break;
          }
        }
      }

      private async processIssueCommentReaction(payload: any): Promise<void> {
        const reaction =
            PayloadMapper.createIssueCommentReactionFromPayload(payload);

        await this.handleDatabaseOperation(
            reaction,
            this.issueCommentReactionOperations,
            reaction.issuecomment_id,
        );
    }

    // This needs to check if reactions are present or not and pass to processIssueCommentReactions() if present
    private async processIssueCommentEvent(payload: any): Promise<void> {
        const comment = PayloadMapper.createIssueCommentFromPayload(payload);
        const issue  = PayloadMapper.createIssueFromPayload(payload);
        const owner = PayloadMapper.createOwnerFromPayload(payload.comment.user);
        const repo = PayloadMapper.createRepositoryFromPayload(payload, owner);
        const reaction =
            PayloadMapper.createIssueCommentReactionFromPayload(payload);

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

        await this.handleDatabaseOperation(
            reaction,
            this.issueCommentReactionOperations,
            reaction.issuecomment_id,
        );
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

    private async processDiscussionCommentReaction(payload: any) : Promise<void> {
        const reaction = PayloadMapper.createDiscussionCommentReactionFromPayload(payload);

        await this.handleDatabaseOperation(
            reaction,
            this.discussionCommentReactionOperations,
            reaction.discussioncomment_id,
        );
    }

    private async processDiscussionComments(payload: any): Promise<void> {
        const discussion_comment = PayloadMapper.createDiscussionCommentFromPayload(payload);
        const reaction = PayloadMapper.createDiscussionCommentReactionFromPayload(payload);

        await this.handleDatabaseOperation(
            discussion_comment,
            this.discussionCommentOperations,
            discussion_comment.id,
        );

        await this.handleDatabaseOperation(
            reaction,
            this.discussionCommentReactionOperations,
            reaction.discussioncomment_id,
        );
    }

    private async processDiscussionPolls(payload: any): Promise<void> {
        const discussion_poll = PayloadMapper.createDiscussionPollsFromPayload(payload);

        await this.handleDatabaseOperation(
            discussion_poll,
            this.discussionPollOperations,
            discussion_poll.id,
        );
    }

    private async processDiscussionPollOptions(payload: any): Promise<void> {
        const discussion_poll_options = PayloadMapper.createDiscussionPollOptionsFromPayload(payload);

        await this.handleDatabaseOperation(
            discussion_poll_options,
            this.discussionPollOptionsOperations,
            discussion_poll_options.id,
        );
    }

    private async processDiscussionEvent(payload: any): Promise<void> {
        const discussion = PayloadMapper.createDiscussionFromPayload(payload);
        const owner = PayloadMapper.createOwnerFromPayload(payload.discussion.user);
        const repo = PayloadMapper.createRepositoryFromPayload(payload, owner);
        const discussion_category = PayloadMapper.createDiscussionCategoriesFromPayload(payload);
        const discussion_comment = PayloadMapper.createDiscussionCommentFromPayload(payload);
        const reaction = PayloadMapper.createDiscussionCommentReactionFromPayload(payload);

        await this.handleDatabaseOperation(
            discussion,
            this.discussionOperations,
            discussion.id,
        );

        await this.handleDatabaseOperation(
            owner,
            this.ownerOperations,
            owner.id,
        );

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
            discussion_comment,
            this.discussionCommentOperations,
            discussion_comment.id,
        );

        await this.handleDatabaseOperation(
            reaction,
            this.discussionCommentReactionOperations,
            reaction.discussioncomment_id,
        );
    }
    discussionOperations(discussion: types.Discussion, discussionOperations: any, id: string) {
        throw new Error("Method not implemented.");
    }

    private async processRepoLabels(payload: any): Promise<void> {
        const repo_label = PayloadMapper.createRepoLabelsFromPayload(payload);

        await this.handleDatabaseOperation(
            repo_label,
            this.repoLabelOperations,
            repo_label.id,
        );
    }

    private async processIssueLabels(payload: any): Promise<void> {
        const issue_label = PayloadMapper.createIssueLabelFromPayload(payload);

        await this.handleDatabaseOperation(
            issue_label,
            this.issueLabelOperations,
            issue_label.issue_id,
        );
    }

    private async processDiscussionLabels(payload: any): Promise<void> {
        const discussion_label = PayloadMapper.createDiscussionLabelFromPayload(payload);

        await this.handleDatabaseOperation(
            discussion_label,
            this.discussionLabelOperations,
            discussion_label.discussion_id,
        );
    }

    private async processMilestoneLabels(payload: any): Promise<void> {
        const milestone_label = PayloadMapper.createMilestoneLabelFromPayload(payload);

        await this.handleDatabaseOperation(
            milestone_label,
            this.milestoneLabelOperations,
            milestone_label.milestone_id,
        );
    }

    private async processPullRequestLabels(payload: any): Promise<void> {
        const pullrequest_label = PayloadMapper.createPullRequestLabelFromPayload(payload);

        await this.handleDatabaseOperation(
            pullrequest_label,
            this.pullRequestLabelOperations,
            pullrequest_label.pull_request_id,
        );
    }

    private async processIssueMilestones(payload: any): Promise<void> {
        const issue_milestone = PayloadMapper.createIssueMilestoneFromPayload(payload);

        await this.handleDatabaseOperation(
            issue_milestone,
            this.issueMilestoneOperations,
            issue_milestone.issue_id,
        );
    }

    private async processPullRequestMilestones(payload: any): Promise<void> {
        const pullrequest_milestone = PayloadMapper.createPullRequestMilestoneFromPayload(payload);

        await this.handleDatabaseOperation(
            pullrequest_milestone,
            this.pullRequestMilestoneOperations,
            pullrequest_milestone.pull_request_id,
        );
    }

    private async processSubIssueList(payload: any): Promise<void> {
        const sub_issue_list = PayloadMapper.createSubIssueListFromPayload(payload);

        await this.handleDatabaseOperation(
            sub_issue_list,
            this.subIssueListOperations,
            sub_issue_list.parent_id,
        );
    }

    async processWebhook(eventType: string, payload: any): Promise<void> {
        console.log(`Processing ${eventType} webhook with action ${payload.action}...`);

        switch (eventType) {
            case WebhookEventType.Repository:
                await this.processRepositoryEvent(payload);
                break;
            case WebhookEventType.Issue:
                await this.processIssueEvent(payload);

                switch (payload.action) {
                    case WebhookAction.Labeled:
                    case WebhookAction.Unlabeled:
                        await this.processLabel(payload, "issue");
                        break;
                    
                    case WebhookAction.Milestoned:
                    case WebhookAction.Demilestoned:
                        await this.processMilestone(payload, "issue");
                        break;
                    
                    case WebhookAction.Assigned:
                    case WebhookAction.Unassigned:
                        await this.processAssignee(payload);
                        break;
                }
                break;
            case WebhookEventType.PullRequest:
                await this.processPullRequestEvent(payload);

                switch (payload.action) {
                    case WebhookAction.Labeled:
                    case WebhookAction.Unlabeled:
                        await this.processLabel(payload, "pull_request");
                        break;

                    case WebhookAction.Milestoned:
                    case WebhookAction.Demilestoned:
                        await this.processMilestone(payload, "pull_request");
                        break;

                    case WebhookAction.Assigned:
                    case WebhookAction.Unassigned:
                        await this.processAssignee(payload);
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
                }
                break;
            case WebhookEventType.DiscussionComment:
                await this.processDiscussionComments(payload);

                switch (payload.action) {
                    case WebhookAction.Labeled:
                    case WebhookAction.Unlabeled:
                        await this.processLabel(payload, "discussion_comment");
                        break;
                }

                break;
            case WebhookEventType.SubIssue:
                // processing function needs to change mostly
                await this.processSubIssueList(payload);
                break;
            default:
                console.log(`Unhandled event type: ${eventType}`);
        }
    }

}
