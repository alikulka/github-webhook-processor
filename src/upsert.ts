// this file contains all the SQL queries for all the tables in the DB

import type { PoolClient } from "pg";
import format from "pg-format";
import type * as types from "./types";

export class Upserts {
	constructor(private client: PoolClient) {}

	public async insertRepository(repo: types.Repository): Promise<void> {
		const query = `
      INSERT INTO repositories (
        id, node_id, name, full_name, owner, url, description,
        created_at, updated_at, pushed_at, watchers_count, forks_count,
        size, default_branch, open_issues_count, is_fork, is_private, has_issues,
        has_projects, has_wiki, has_pages, has_downloads, has_discussions,
        forking_allowed, is_archived, is_disabled, visibility
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19,
       $20, $21, $22, $23, $24, $25, $26, $27)
    `;

		const values = [
			repo.id,
			repo.node_id,
			repo.name,
			repo.full_name,
			repo.owner.id,
			repo.url,
			repo.description,
			repo.created_at,
			repo.updated_at,
			repo.pushed_at,
			repo.watchers_count,
			repo.forks_count,
			repo.size,
			repo.default_branch,
			repo.open_issues_count,
			repo.is_fork,
			repo.is_private,
			repo.has_issues,
			repo.has_projects,
			repo.has_wiki,
			repo.has_pages,
			repo.has_downloads,
			repo.has_discussions,
			repo.forking_allowed,
			repo.is_archived,
			repo.is_disabled,
			repo.visibility,
		];

		try {
			await this.client.query(query, values);
			console.log("Repo inserted successfully:", repo.id);
		} catch (error) {
			console.error("Error inserting repo:", error);
		}
		// await this.client.query(query, values);
	}

	public async updateRepository(repo: types.Repository): Promise<void> {
		const query = `
      UPDATE repositories SET
        node_id = $2,
        name = $3,
        full_name = $4,
        owner = $5,
        url = $6,
        description = $7,
        created_at = $8,
        updated_at = $9,
        pushed_at = $10,
        watchers_count = $11,
        forks_count = $12,
        size = $13,
        default_branch = $14,
        open_issues_count = $15,
        is_fork = $16,
        is_private = $17,
        has_issues = $18,
        has_projects = $19,
        has_wiki = $20,
        has_pages = $21,
        has_downloads = $22,
        has_discussions = $23,
        forking_allowed = $24,
        is_archived = $25,
        is_disabled = $26,
        visibility = $27
      WHERE id = $1
    `;

		const values = [
			repo.id,
			repo.node_id,
			repo.name,
			repo.full_name,
			repo.owner.id,
			repo.url,
			repo.description,
			repo.created_at,
			repo.updated_at,
			repo.pushed_at,
			repo.watchers_count,
			repo.forks_count,
			repo.size,
			repo.default_branch,
			repo.open_issues_count,
			repo.is_fork,
			repo.is_private,
			repo.has_issues,
			repo.has_projects,
			repo.has_wiki,
			repo.has_pages,
			repo.has_downloads,
			repo.has_discussions,
			repo.forking_allowed,
			repo.is_archived,
			repo.is_disabled,
			repo.visibility,
		];

		try {
			await this.client.query(query, values);
			console.log("Repo updated successfully:", repo.id);
		} catch (error) {
			console.error("Error upserting repo:", error);
		}
		await this.client.query(query, values);
	}

	public async upsertRepository(repo: types.Repository): Promise<void> {
		const query = `
      INSERT INTO repositories (
        id, node_id, name, full_name, owner, url, description,
        created_at, updated_at, pushed_at, watchers_count, forks_count,
        size, default_branch, open_issues_count, is_fork, is_private, has_issues,
        has_projects, has_wiki, has_pages, has_downloads, has_discussions,
        forking_allowed, is_archived, is_disabled, visibility
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19,
       $20, $21, $22, $23, $24, $25, $26, $27)
      ON CONFLICT (id) DO UPDATE SET
        node_id = EXCLUDED.node_id,
        name = EXCLUDED.name,
        full_name = EXCLUDED.full_name,
        owner = EXCLUDED.owner,
        url = EXCLUDED.url,
        description = EXCLUDED.description,
        created_at = EXCLUDED.created_at,
        updated_at = EXCLUDED.updated_at,
        pushed_at = EXCLUDED.pushed_at,
        watchers_count = EXCLUDED.watchers_count,
        forks_count = EXCLUDED.forks_count,
        size = EXCLUDED.size,
        default_branch = EXCLUDED.default_branch,
        open_issues_count = EXCLUDED.open_issues_count,
        is_fork = EXCLUDED.is_fork,
        is_private = EXCLUDED.is_private,
        has_issues = EXCLUDED.has_issues,
        has_projects = EXCLUDED.has_projects,
        has_wiki = EXCLUDED.has_wiki,
        has_pages = EXCLUDED.has_pages,
        has_downloads = EXCLUDED.has_downloads,
        has_discussions = EXCLUDED.has_discussions,
        forking_allowed = EXCLUDED.forking_allowed,
        is_archived = EXCLUDED.is_archived,
        is_disabled = EXCLUDED.is_disabled,
        visibility = EXCLUDED.visibility
    `;

		const values = [
			repo.id,
			repo.node_id,
			repo.name,
			repo.full_name,
			repo.owner.id,
			repo.url,
			repo.description,
			repo.created_at,
			repo.updated_at,
			repo.pushed_at,
			repo.watchers_count,
			repo.forks_count,
			repo.size,
			repo.default_branch,
			repo.open_issues_count,
			repo.is_fork,
			repo.is_private,
			repo.has_issues,
			repo.has_projects,
			repo.has_wiki,
			repo.has_pages,
			repo.has_downloads,
			repo.has_discussions,
			repo.forking_allowed,
			repo.is_archived,
			repo.is_disabled,
			repo.visibility,
		];

		try {
			await this.client.query(query, values);
			console.log("Repo upserted successfully:", repo.id);
		} catch (error) {
			console.error("Error upserting repo:", error);
		}
	}

	public async insertOwner(owner: types.Owner): Promise<void> {
		const query = `
      INSERT INTO owners (
        id, login, node_id, url, avatar_url, description, company, email, created_at,
        updated_at, is_verified, is_organization
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    `;

		const values = [
			owner.id,
			owner.login,
			owner.node_id,
			owner.url,
			owner.avatar_url,
			owner.description || null,
			owner.company || null,
			owner.email || null,
			owner.created_at,
			owner.updated_at,
			owner.is_verified || false,
			owner.is_organization,
		];

		try {
			await this.client.query(query, values);
			console.log("Owner inserted successfully:", owner.id);
		} catch (error) {
			console.error("Error inserting owner:", error);
		}
	}

	public async updateOwner(owner: types.Owner): Promise<void> {
		const query = `
      UPDATE owners SET
        login = $2,
        node_id = $3,
        url = $4,
        avatar_url = $5,
        description = $6,
        company = $7,
        email = $8,
        created_at = $9,
        updated_at = $10,
        is_verified = $11,
        is_organization = $12
      WHERE id = $1
    `;

		const values = [
			owner.id,
			owner.login,
			owner.node_id,
			owner.url,
			owner.avatar_url,
			owner.description || null,
			owner.company || null,
			owner.email || null,
			owner.created_at,
			owner.updated_at,
			owner.is_verified || false,
			owner.is_organization,
		];

		try {
			await this.client.query(query, values);
			console.log("Owner updated successfully:", owner.id);
		} catch (error) {
			console.error("Error upserting owner:", error);
		}
	}

	public async upsertOwner(owner: types.Owner): Promise<void> {
		const query = `
      INSERT INTO owners (
        id, login, node_id, url, avatar_url, description, company, email, created_at,
        updated_at, is_verified, is_organization
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      ON CONFLICT (id) DO UPDATE SET
        login = EXCLUDED.login,
        node_id = EXCLUDED.node_id,
        url = EXCLUDED.url,
        avatar_url = EXCLUDED.avatar_url,
        description = EXCLUDED.description,
        company = EXCLUDED.company,
        email = EXCLUDED.email,
        created_at = EXCLUDED.created_at,
        updated_at = EXCLUDED.updated_at,
        is_verified = EXCLUDED.is_verified,
        is_organization = EXCLUDED.is_organization
    `;

		const values = [
			owner.id,
			owner.login,
			owner.node_id,
			owner.url,
			owner.avatar_url,
			owner.description || null,
			owner.company || null,
			owner.email || null,
			owner.created_at,
			owner.updated_at,
			owner.is_verified || false,
			owner.is_organization,
		];

		try {
			await this.client.query(query, values);
			console.log("Owner upserted successfully:", owner.id);
		} catch (error) {
			console.error("Error upserting owner:", error);
		}
	}

	public async insertIssue(issue: types.Issue): Promise<void> {
		const query = `
      INSERT INTO issues (
        id, node_id, url, issue_number, state, title, body, created_by,
        locked, active_lock_reason, num_comments, closed_at, created_at, updated_at, closed_by,
        repository_id, author_association, total_reaction_count, sub_or_parent_issue
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
    `;

		const values = [
			issue.id,
			issue.node_id,
			issue.url,
			issue.issue_number,
			issue.state,
			issue.title,
			issue.body,
			issue.created_by.id,
			issue.locked,
			issue.active_lock_reason || null,
			issue.num_comments,
			issue.closed_at,
			issue.created_at,
			issue.updated_at,
			issue.closed_by?.id || null,
			issue.repository_id,
			issue.author_association,
			issue.total_reaction_count || 0,
			issue.sub_or_parent_issue || null,
		];

		try {
			await this.client.query(query, values);
			console.log("Issue inserted successfully:", issue.id);
		} catch (error) {
			console.error("Error inserting issue:", error);
		}
	}

	public async updateIssue(issue: types.Issue): Promise<void> {
		const query = `
      UPDATE issues SET
        node_id = $2,
        url = $3,
        issue_number = $4,
        state = $5,
        title = $6,
        body = $7,
        created_by = $8,
        locked = $9,
        active_lock_reason = $10,
        num_comments = $11,
        closed_at = $12,
        created_at = $13,
        updated_at = $14,
        closed_by = $15,
        repository_id = $16,
        author_association = $17,
        total_reaction_count = $18,
        sub_or_parent_issue = $19
      WHERE id = $1
    `;

		const values = [
			issue.id,
			issue.node_id,
			issue.url,
			issue.issue_number,
			issue.state,
			issue.title,
			issue.body,
			issue.created_by.id,
			issue.locked,
			issue.active_lock_reason || null,
			issue.num_comments,
			issue.closed_at,
			issue.created_at,
			issue.updated_at,
			issue.closed_by?.id || null,
			issue.repository_id,
			issue.author_association,
			issue.total_reaction_count || 0,
			issue.sub_or_parent_issue || null,
		];

		try {
			await this.client.query(query, values);
			console.log("Issue updated successfully:", issue.id);
		} catch (error) {
			console.error("Error updating issue:", error);
		}
	}

	public async upsertIssue(issue: types.Issue): Promise<void> {
		const query = `
      INSERT INTO issues (
        id, node_id, url, issue_number, state, title, body, created_by,
        locked, active_lock_reason, num_comments, closed_at, created_at, updated_at, closed_by,
        repository_id, author_association, total_reaction_count, sub_or_parent_issue
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
      ON CONFLICT (id) DO UPDATE SET
        id = excluded.id,
        node_id = excluded.node_id,
        url = excluded.url,
        issue_number = excluded.issue_number,
        state = excluded.state,
        title = excluded.title,
        body = excluded.body,
        created_by = excluded.created_by,
        locked = excluded.locked,
        active_lock_reason = excluded.active_lock_reason,
        num_comments = excluded.num_comments,
        closed_at = excluded.closed_at,
        created_at = excluded.created_at,
        updated_at = excluded.updated_at,
        closed_by = excluded.closed_by,
        repository_id = excluded.repository_id,
        author_association = excluded.author_association,
        total_reaction_count = excluded.total_reaction_count,
        sub_or_parent_issue = excluded.sub_or_parent_issue
    `;

		const values = [
			issue.id,
			issue.node_id,
			issue.url,
			issue.issue_number,
			issue.state,
			issue.title,
			issue.body,
			issue.created_by.id,
			issue.locked,
			issue.active_lock_reason || null,
			issue.num_comments,
			issue.closed_at,
			issue.created_at,
			issue.updated_at,
			issue.closed_by?.id || null,
			issue.repository_id,
			issue.author_association,
			issue.total_reaction_count || 0,
			issue.sub_or_parent_issue || null,
		];

		try {
			await this.client.query(query, values);
			console.log("Issue upserted successfully:", issue.id);
		} catch (error) {
			console.error("Error upserting issue:", error);
		}
	}

	public async insertPullRequest(pr: types.PullRequest): Promise<void> {
		const query = `
      INSERT INTO pull_requests (
        id, node_id, url, pull_request_number, state, state_reason, title, body, created_by,
        locked, active_lock_reason, num_comments, closed_at, created_at, updated_at, closed_by,
        repository_id, author_association, total_reaction_count, merged_at, diff_url, draft
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)
    `;

		const values = [
			pr.id,
			pr.node_id,
			pr.url,
			pr.pull_request_number,
			pr.state,
			pr.state_reason,
			pr.title,
			pr.body,
			pr.created_by.id,
			pr.locked,
			pr.active_lock_reason || null,
			pr.num_comments,
			pr.closed_at,
			pr.created_at,
			pr.updated_at,
			pr.closed_by?.id || null,
			pr.repository_id,
			pr.author_association,
			pr.total_reaction_count || 0,
			pr.merged_at,
			pr.diff_url,
			pr.draft,
		];

		try {
			this.client.query(query, values);
			console.log("Pull request inserted successfully:", pr.id);
		} catch (error) {
			console.error("Error inserting pull request:", error);
		}
	}

	public async updatePullRequest(pr: types.PullRequest): Promise<void> {
		const query = `
      UPDATE pull_requests SET
        node_id = $2,
        url = $3,
        pull_request_number = $4,
        state = $5,
        state_reason = $6,
        title = $7,
        body = $8,
        created_by = $9,
        locked = $10,
        active_lock_reason = $11,
        num_comments = $12,
        closed_at = $13,
        created_at = $14,
        updated_at = $15,
        closed_by = $16,
        repository_id = $17,
        author_association = $18,
        total_reaction_count = $19,
        merged_at = $20,
        diff_url = $21,
        draft = $22
      WHERE id = $1
    `;

		const values = [
			pr.id,
			pr.node_id,
			pr.url,
			pr.pull_request_number,
			pr.state,
			pr.state_reason,
			pr.title,
			pr.body,
			pr.created_by.id,
			pr.locked,
			pr.active_lock_reason || null,
			pr.num_comments,
			pr.closed_at,
			pr.created_at,
			pr.updated_at,
			pr.closed_by?.id || null,
			pr.repository_id,
			pr.author_association,
			pr.total_reaction_count || 0,
			pr.merged_at,
			pr.diff_url,
			pr.draft,
		];

		try {
			this.client.query(query, values);
			console.log("Pull request updated successfully:", pr.id);
		} catch (error) {
			console.error("Error updating pull request:", error);
		}
	}

	public async upsertPullRequest(pr: types.PullRequest): Promise<void> {
		const query = `
      INSERT INTO pull_requests (
        id, node_id, url, pull_request_number, state, state_reason, title, body, created_by,
        locked, active_lock_reason, num_comments, closed_at, created_at, updated_at, closed_by,
        repository_id, author_association, total_reaction_count, merged_at, diff_url, draft
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)
      ON CONFLICT (id) DO UPDATE SET
        id = excluded.id,
        node_id = excluded.node_id,
        url = excluded.url,
        pull_request_number = excluded.pull_request_number,
        state = excluded.state,
        state_reason = excluded.state_reason,
        title = excluded.title,
        body = excluded.body,
        created_by = excluded.created_by,
        locked = excluded.locked,
        active_lock_reason = excluded.active_lock_reason,
        num_comments = excluded.num_comments,
        closed_at = excluded.closed_at,
        created_at = excluded.created_at,
        updated_at = excluded.updated_at,
        closed_by = excluded.closed_by,
        repository_id = excluded.repository_id,
        author_association = excluded.author_association,
        total_reaction_count = excluded.total_reaction_count,
        merged_at = excluded.merged_at,
        diff_url = excluded.diff_url,
        draft = excluded.draft
    `;

		const values = [
			pr.id,
			pr.node_id,
			pr.url,
			pr.pull_request_number,
			pr.state,
			pr.state_reason,
			pr.title,
			pr.body,
			pr.created_by,
			pr.locked,
			pr.active_lock_reason || null,
			pr.num_comments,
			pr.closed_at,
			pr.created_at,
			pr.updated_at,
			pr.closed_by?.id || null,
			pr.repository_id,
			pr.author_association,
			pr.total_reaction_count || 0,
			pr.merged_at,
			pr.diff_url,
			pr.draft,
		];

		try {
			this.client.query(query, values);
			console.log("Pull request upserted successfully:", pr.id);
		} catch (error) {
			console.error("Error upserting pull request:", error);
		}
	}

	public async insertIssueComment(comment: types.IssueComment): Promise<void> {
		const query = `
      INSERT INTO issuecomments (
        id, node_id, url, body, created_by, created_at, updated_at, issue_id, author_association
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `;

		const values = [
			comment.id,
			comment.node_id,
			comment.url,
			comment.body,
			comment.created_by.id,
			comment.created_at,
			comment.updated_at,
			comment.issue_id,
			comment.author_association,
		];

		try {
			this.client.query(query, values);
			console.log("Issue comment inserted successfully:", comment.id);
		} catch (error) {
			console.error("Error inserting issue comment:", error);
		}
	}

	public async updateIssueComment(comment: types.IssueComment): Promise<void> {
		const query = `
      UPDATE issuecomments SET
        node_id = $2,
        url = $3,
        body = $4,
        created_by = $5,
        created_at = $6,
        updated_at = $7,
        issue_id = $8,
        author_association = $9
      WHERE id = $1
    `;

		const values = [
			comment.id,
			comment.node_id,
			comment.url,
			comment.body,
			comment.created_by.id,
			comment.created_at,
			comment.updated_at,
			comment.issue_id,
			comment.author_association,
		];

		try {
			this.client.query(query, values);
			console.log("Issue comment updated successfully:", comment.id);
		} catch (error) {
			console.error("Error updating issue comment:", error);
		}
	}

	public async upsertIssueComment(comment: types.IssueComment): Promise<void> {
		const query = `
      INSERT INTO issuecomments (
        id, node_id, url, body, created_by, created_at, updated_at, issue_id, author_association
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      ON CONFLICT (id) DO UPDATE SET
        id = excluded.id,
        node_id = excluded.node_id,
        url = excluded.url,
        body = excluded.body,
        created_by = excluded.created_by,
        created_at = excluded.created_at,
        updated_at = excluded.updated_at,
        issue_id = excluded.issue_id,
        author_association = excluded.author_association
    `;

		await this.client.query(query, [
			comment.id,
			comment.node_id,
			comment.url,
			comment.body,
			comment.created_by,
			comment.created_at,
			comment.updated_at,
			comment.issue_id,
			comment.author_association,
		]);
	}

	public async insertIssueCommentReaction(
		reaction: types.IssueCommentReaction,
	): Promise<void> {
		const query = `
      INSERT INTO issuecommentreactions (
        issuecomment_id, plusone, minusone, laugh, hooray, confused, heart, rocket, eyes
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `;

		const values = [
			reaction.issuecomment_id,
			reaction.plusone,
			reaction.minusone,
			reaction.laugh,
			reaction.hooray,
			reaction.confused,
			reaction.heart,
			reaction.rocket,
			reaction.eyes,
		];

		try {
			this.client.query(query, values);
			console.log(
				"Issue comment reaction inserted successfully:",
				reaction.issuecomment_id,
			);
		} catch (error) {
			console.error("Error inserting issue comment reaction:", error);
		}
	}

	public async updateIssueCommentReaction(
		reaction: types.IssueCommentReaction,
	): Promise<void> {
		const query = `
      UPDATE issuecommentreactions SET
        plusone = $2,
        minusone = $3,
        laugh = $4,
        hooray = $5,
        confused = $6,
        heart = $7,
        rocket = $8,
        eyes = $9
      WHERE issuecomment_id = $1
    `;

		const values = [
			reaction.issuecomment_id,
			reaction.plusone,
			reaction.minusone,
			reaction.laugh,
			reaction.hooray,
			reaction.confused,
			reaction.heart,
			reaction.rocket,
			reaction.eyes,
		];

		try {
			this.client.query(query, values);
			console.log(
				"Issue comment reaction updated successfully:",
				reaction.issuecomment_id,
			);
		} catch (error) {
			console.error("Error updating issue comment reaction:", error);
		}
	}

	public async upsertIssueCommentReaction(
		reaction: types.IssueCommentReaction,
	): Promise<void> {
		const query = `
      INSERT INTO issuecommentreactions (
        issuecomment_id, plusone, minusone, laugh, hooray, confused, heart, rocket, eyes
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      ON CONFLICT (issuecomment_id) DO UPDATE SET
        issuecomment_id = excluded.issuecomment_id,
        plusone = excluded.plusone,
        minusone = excluded.minusone,
        laugh = excluded.laugh,
        hooray = excluded.hooray,
        confused = excluded.confused,
        heart = excluded.heart,
        rocket = excluded.rocket,
        eyes = excluded.eyes
    `;

		await this.client.query(query, [
			reaction.issuecomment_id,
			reaction.plusone,
			reaction.minusone,
			reaction.laugh,
			reaction.hooray,
			reaction.confused,
			reaction.heart,
			reaction.rocket,
			reaction.eyes,
		]);
	}

	public async insertDiscussionCategories(
		category: types.DiscussionCategory,
	): Promise<void> {
		const query = `
      INSERT INTO discussioncategories (
        id, created_at, description, emoji, is_answerable, name, repository_id, slug, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `;

		const values = [
			category.id,
			category.created_at,
			category.description,
			category.emoji,
			category.is_answerable,
			category.name,
			category.repository_id,
			category.slug,
			category.updated_at,
		];

		try {
			this.client.query(query, values);
			console.log("Discussion category inserted successfully:", category.id);
		} catch (error) {
			console.error("Error inserting discussion category:", error);
		}
	}

	public async updateDiscussionCategories(
		category: types.DiscussionCategory,
	): Promise<void> {
		const query = `
      UPDATE discussioncategories SET
        created_at = $2,
        description = $3,
        emoji = $4,
        is_answerable = $5,
        name = $6,
        repository_id = $7,
        slug = $8,
        updated_at = $9
      WHERE id = $1
    `;

		const values = [
			category.id,
			category.created_at,
			category.description,
			category.emoji,
			category.is_answerable,
			category.name,
			category.repository_id,
			category.slug,
			category.updated_at,
		];

		try {
			this.client.query(query, values);
			console.log("Discussion category updated successfully:", category.id);
		} catch (error) {
			console.error("Error updating discussion category:", error);
		}
	}

	public async upsertDiscussionCategories(
		category: types.DiscussionCategory,
	): Promise<void> {
		const query = `
      INSERT INTO discussioncategories (
        id, created_at, description, emoji, is_answerable, name, repository_id, slug, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      ON CONFLICT (id) DO UPDATE SET
        id = excluded.id,
        created_at = excluded.created_at,
        description = excluded.description,
        emoji = excluded.emoji,
        is_answerable = excluded.is_answerable,
        name = excluded.name,
        repository_id = excluded.repository_id,
        slug = excluded.slug,
        updated_at = excluded.updated_at
    `;

		await this.client.query(query, [
			category.id,
			category.created_at,
			category.description,
			category.emoji,
			category.is_answerable,
			category.name,
			category.repository_id,
			category.slug,
			category.updated_at,
		]);
	}

	public async insertDiscussion(discussion: types.Discussion): Promise<void> {
		const query = `
		INSERT INTO discussions (
				active_lock_reason, answer, answer_chosen_at, answer_chosen_by, created_by, author_association, body, category_id,
				is_closed, closed_at, created_at, id, is_answered, last_edited_at, is_locked, discussion_number, published_at, total_reaction_count, repository_id,
				state_reason, title, updated_at, total_upvote_count, url
			) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)
		`;

		await this.client.query(query, [
			discussion.active_lock_reason,
			discussion.answer,
			discussion.answer_chosen_at,
			discussion.answer_chosen_by,
			discussion.created_by,
			discussion.author_association,
			discussion.body,
			discussion.category_id,
			discussion.is_closed,
			discussion.closed_at,
			discussion.created_at,
			discussion.id,
			discussion.is_answered,
			discussion.last_edited_at,
			discussion.is_locked,
			discussion.discussion_number,
			discussion.published_at,
			discussion.total_reaction_count,
			discussion.repository_id,
			discussion.state_reason,
			discussion.title,
			discussion.updated_at,
			discussion.total_upvote_count,
			discussion.url,
		]);
	}

	public async updateDiscussion(discussion: types.Discussion): Promise<void> {
		const query = `
        UPDATE discussions SET
          active_lock_reason = $1,
          answer = $2,
          answer_chosen_at = $3,
          answer_chosen_by = $4,
          created_by = $5,
          author_association = $6,
          body = $7,
          category_id = $8,
          is_closed = $9,
          closed_at = $10,
          created_at = $11,
          id = $12,
          is_answered = $13,
          last_edited_at = $14,
          is_locked = $15,
          discussion_number = $16,
          published_at = $17,
          total_reaction_count = $18,
          repository_id = $19,
          state_reason = $20,
          title = $21,
          updated_at = $22,
          total_upvote_count = $23,
          url = $24
        WHERE id = $12
    `;

		const values = [
			discussion.active_lock_reason,
			discussion.answer,
			discussion.answer_chosen_at,
			discussion.answer_chosen_by,
			discussion.created_by,
			discussion.author_association,
			discussion.body,
			discussion.category_id,
			discussion.is_closed,
			discussion.closed_at,
			discussion.created_at,
			discussion.id,
			discussion.is_answered,
			discussion.last_edited_at,
			discussion.is_locked,
			discussion.discussion_number,
			discussion.published_at,
			discussion.total_reaction_count,
			discussion.repository_id,
			discussion.state_reason,
			discussion.title,
			discussion.updated_at,
			discussion.total_upvote_count,
			discussion.url,
		];

		try {
			this.client.query(query, values);
			console.log("Discussion updated successfully:", discussion.id);
		} catch (error) {
			console.error("Error updating discussion:", error);
		}
	}

	public async upsertDiscussion(discussion: types.Discussion): Promise<void> {
		const query = `
      INSERT INTO discussions (
        active_lock_reason, answer, answer_chosen_at, answer_chosen_by, created_by, author_association, body, category_id,
        is_closed, closed_at, created_at, id, is_answered, last_edited_at, is_locked, discussion_number, published_at,
        total_reaction_count, repository_id, state_reason, title, updated_at, total_upvote_count, url
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19,
       $20, $21, $22, $23, $24)
      ON CONFLICT (id) DO UPDATE SET
        active_lock_reason = excluded.active_lock_reason,
        answer = excluded.answer,
        answer_chosen_at = excluded.answer_chosen_at,
        answer_chosen_by = excluded.answer_chosen_by,
        created_by = excluded.created_by,
        author_association = excluded.author_association,
        body = excluded.body,
        category_id = excluded.category_id,
        is_closed = excluded.is_closed,
        closed_at = excluded.closed_at,
        created_at = excluded.created_at,
        id = excluded.id,
        is_answered = excluded.is_answered,
        last_edited_at = excluded.last_edited_at,
        is_locked = excluded.is_locked,
        discussion_number = excluded.discussion_number,
        published_at = excluded.published_at,
        total_reaction_count = excluded.total_reaction_count,
        repository_id = excluded.repository_id,
        state_reason = excluded.state_reason,
        title = excluded.title,
        updated_at = excluded.updated_at,
        total_upvote_count = excluded.total_upvote_count,
        url = excluded.url
    `;

		await this.client.query(query, [
			discussion.active_lock_reason,
			discussion.answer,
			discussion.answer_chosen_at,
			discussion.answer_chosen_by,
			discussion.created_by,
			discussion.author_association,
			discussion.body,
			discussion.category_id,
			discussion.is_closed,
			discussion.closed_at,
			discussion.created_at,
			discussion.id,
			discussion.is_answered,
			discussion.last_edited_at,
			discussion.is_locked,
			discussion.discussion_number,
			discussion.published_at,
			discussion.total_reaction_count,
			discussion.repository_id,
			discussion.state_reason,
			discussion.title,
			discussion.updated_at,
			discussion.total_upvote_count,
			discussion.url,
		]);
	}

	public async insertDiscussionPoll(
		discussionPoll: types.DiscussionPoll,
	): Promise<void> {
		const query = `
      INSERT INTO discussionpolls (
        poll_id, discussion_id, question, total_votes
      ) VALUES ($1, $2, $3, $4)
    `;

		const values = [
			discussionPoll.poll_id,
			discussionPoll.discussion_id,
			discussionPoll.question,
			discussionPoll.total_votes,
		];

		try {
			this.client.query(query, values);
			console.log(
				"Discussion poll inserted successfully:",
				discussionPoll.poll_id,
			);
		} catch (error) {
			console.error("Error inserting discussion poll:", error);
		}
	}

	public async updateDiscussionPoll(
		discussionPoll: types.DiscussionPoll,
	): Promise<void> {
		const query = `
      UPDATE discussionpolls SET
        poll_id = $1,
        discussion_id = $2,
        question = $3,
        total_votes = $4
      WHERE poll_id = $1 AND discussion_id = $2
    `;

		const values = [
			discussionPoll.poll_id,
			discussionPoll.discussion_id,
			discussionPoll.question,
			discussionPoll.total_votes,
		];

		try {
			this.client.query(query, values);
			console.log(
				"Discussion poll updated successfully:",
				discussionPoll.poll_id,
			);
		} catch (error) {
			console.error("Error updating discussion poll:", error);
		}
	}

	public async upsertDiscussionPoll(
		discussionPoll: types.DiscussionPoll,
	): Promise<void> {
		const query = `
      INSERT INTO discussionpolls (
        poll_id, discussion_id, question, total_votes
      ) VALUES ($1, $2, $3, $4)
      ON CONFLICT (poll_id, discussion_id) DO UPDATE SET
        poll_id = excluded.poll_id,
        discussion_id = excluded.discussion_id,
        question = excluded.question,
        total_votes = excluded.total_votes
    `;

		await this.client.query(query, [
			discussionPoll.poll_id,
			discussionPoll.discussion_id,
			discussionPoll.question,
			discussionPoll.total_votes,
		]);
	}

	public async insertDiscussionPollOptions(
		discussionPollOptions: types.DiscussionPollOption,
	): Promise<void> {
		const query = `
      INSERT INTO discussionpolloptions (
        option_id, poll_id, option, votes
      ) VALUES ($1, $2, $3, $4)
    `;

		const values = [
			discussionPollOptions.option_id,
			discussionPollOptions.poll_id,
			discussionPollOptions.option,
			discussionPollOptions.votes,
		];

		try {
			this.client.query(query, values);
			console.log(
				"Discussion poll option inserted successfully:",
				discussionPollOptions.poll_id,
			);
		} catch (error) {
			console.error("Error inserting discussion poll option:", error);
		}
	}

	public async updateDiscussionPollOptions(
		discussionPollOptions: types.DiscussionPollOption,
	): Promise<void> {
		const query = `
      UPDATE discussionpolloptions SET
        option_id = $1,
        poll_id = $2,
        option = $3,
        votes = $4
      WHERE option_id = $1 AND poll_id = $2
    `;

		const values = [
			discussionPollOptions.option_id,
			discussionPollOptions.poll_id,
			discussionPollOptions.option,
			discussionPollOptions.votes,
		];

		try {
			this.client.query(query, values);
			console.log(
				"Discussion poll option updated successfully:",
				discussionPollOptions.poll_id,
			);
		} catch (error) {
			console.error("Error updating discussion poll option:", error);
		}
	}

	public async upsertDiscussionPollOptions(
		discussionPollOptions: types.DiscussionPollOption,
	): Promise<void> {
		const query = `
      INSERT INTO discussionpolloptions (
        option_id, poll_id, option, votes
      ) VALUES ($1, $2, $3, $4)
      ON CONFLICT (option_id, poll_id) DO UPDATE SET
        option_id = excluded.option_id,
        poll_id = excluded.poll_id,
        option = excluded.option,
        votes = excluded.votes
    `;

		await this.client.query(query, [
			discussionPollOptions.option_id,
			discussionPollOptions.poll_id,
			discussionPollOptions.option,
			discussionPollOptions.votes,
		]);
	}

	public async insertDiscussionComment(
		discussionComment: types.DiscussionComment,
	): Promise<void> {
		const query = `
      INSERT INTO discussioncomments (
        id, created_by, created_at, author_association, body, deleted_at, discussion_id, edited_by,
        is_answer, is_minimized, last_edited_at, minimized_reason, published_at, in_reply_to_id
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    `;

		const values = [
			discussionComment.id,
			discussionComment.created_by,
			discussionComment.created_at,
			discussionComment.author_association,
			discussionComment.body,
			discussionComment.deleted_at,
			discussionComment.discussion_id,
			discussionComment.edited_by,
			discussionComment.is_answer,
			discussionComment.is_minimized,
			discussionComment.last_edited_at,
			discussionComment.minimized_reason,
			discussionComment.published_at,
			discussionComment.in_reply_to_id,
		];

		try {
			this.client.query(query, values);
			console.log(
				"Discussion comment inserted successfully:",
				discussionComment.id,
			);
		} catch (error) {
			console.error("Error inserting discussion comment:", error);
		}
	}

	public async updateDiscussionComment(
		discussionComment: types.DiscussionComment,
	): Promise<void> {
		const query = `
      UPDATE discussioncomments SET
        id = $1,
        created_by = $2,
        created_at = $3,
        author_association = $4,
        body = $5,
        deleted_at = $6,
        discussion_id = $7,
        edited_by = $8,
        is_answer = $9,
        is_minimized = $10,
        last_edited_at = $11,
        minimized_reason = $12,
        published_at = $13,
        in_reply_to_id = $14
      WHERE id = $1
    `;

		const values = [
			discussionComment.id,
			discussionComment.created_by,
			discussionComment.created_at,
			discussionComment.author_association,
			discussionComment.body,
			discussionComment.deleted_at,
			discussionComment.discussion_id,
			discussionComment.edited_by,
			discussionComment.is_answer,
			discussionComment.is_minimized,
			discussionComment.last_edited_at,
			discussionComment.minimized_reason,
			discussionComment.published_at,
			discussionComment.in_reply_to_id,
		];

		try {
			this.client.query(query, values);
			console.log(
				"Discussion comment updated successfully:",
				discussionComment.id,
			);
		} catch (error) {
			console.error("Error updating discussion comment:", error);
		}
	}

	public async upsertDiscussionComment(
		discussionComment: types.DiscussionComment,
	): Promise<void> {
		const query = `
      INSERT INTO discussioncomments (
        id, created_by, created_at, author_association, body, deleted_at, discussion_id, edited_by,
        is_answer, is_minimized, last_edited_at, minimized_reason, published_at, in_reply_to_id
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      ON CONFLICT (id) DO UPDATE SET
        id = excluded.id,
        created_by = excluded.created_by,
        created_at = excluded.created_at,
        author_association = excluded.author_association,
        body = excluded.body,
        deleted_at = excluded.deleted_at,
        discussion_id = excluded.discussion_id,
        edited_by = excluded.edited_by,
        is_answer = excluded.is_answer,
        is_minimized = excluded.is_minimized,
        last_edited_at = excluded.last_edited_at,
        minimized_reason = excluded.minimized_reason,
        published_at = excluded.published_at,
        in_reply_to_id = excluded.in_reply_to_id
    `;

		await this.client.query(query, [
			discussionComment.id,
			discussionComment.created_by,
			discussionComment.created_at,
			discussionComment.author_association,
			discussionComment.body,
			discussionComment.deleted_at,
			discussionComment.discussion_id,
			discussionComment.edited_by,
			discussionComment.is_answer,
			discussionComment.is_minimized,
			discussionComment.last_edited_at,
			discussionComment.minimized_reason,
			discussionComment.published_at,
			discussionComment.in_reply_to_id,
		]);
	}

	public async insertDiscussionCommentReactions(
		discussionCommentReactions: types.DiscussionCommentReaction,
	): Promise<void> {
		const query = `
      INSERT INTO discussioncommentreactions (
        discussioncomment_id, plusone, minusone, laugh, hooray, confused, heart, rocket, eyes
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `;

		const values = [
			discussionCommentReactions.discussioncomment_id,
			discussionCommentReactions.plusone,
			discussionCommentReactions.minusone,
			discussionCommentReactions.laugh,
			discussionCommentReactions.hooray,
			discussionCommentReactions.confused,
			discussionCommentReactions.heart,
			discussionCommentReactions.rocket,
			discussionCommentReactions.eyes,
		];

		try {
			this.client.query(query, values);
			console.log(
				"Discussion comment reactions inserted successfully:",
				discussionCommentReactions.discussioncomment_id,
			);
		} catch (error) {
			console.error("Error inserting discussion comment reactions:", error);
		}
	}

	public async updateDiscussionCommentReactions(
		discussionCommentReactions: types.DiscussionCommentReaction,
	): Promise<void> {
		const query = `
      UPDATE discussioncommentreactions SET
        discussioncomment_id = $1,
        plusone = $2,
        minusone = $3,
        laugh = $4,
        hooray = $5,
        confused = $6,
        heart = $7,
        rocket = $8,
        eyes = $9
      WHERE discussioncomment_id = $1
    `;

		const values = [
			discussionCommentReactions.discussioncomment_id,
			discussionCommentReactions.plusone,
			discussionCommentReactions.minusone,
			discussionCommentReactions.laugh,
			discussionCommentReactions.hooray,
			discussionCommentReactions.confused,
			discussionCommentReactions.heart,
			discussionCommentReactions.rocket,
			discussionCommentReactions.eyes,
		];

		try {
			this.client.query(query, values);
			console.log(
				"Discussion comment reactions updated successfully:",
				discussionCommentReactions.discussioncomment_id,
			);
		} catch (error) {
			console.error("Error updating discussion comment reactions:", error);
		}
	}

	public async upsertDiscussionCommentReactions(
		discussionCommentReactions: types.DiscussionCommentReaction,
	): Promise<void> {
		const query = `
      INSERT INTO discussioncommentreactions (
        discussioncomment_id, plusone, minusone, laugh, hooray, confused, heart, rocket, eyes
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      ON CONFLICT (discussioncomment_id) DO UPDATE SET
        discussioncomment_id = excluded.discussioncomment_id,
        plusone = excluded.plusone,
        minusone = excluded.minusone,
        laugh = excluded.laugh,
        hooray = excluded.hooray,
        confused = excluded.confused,
        heart = excluded.heart,
        rocket = excluded.rocket,
        eyes = excluded.eyes
    `;

		await this.client.query(query, [
			discussionCommentReactions.discussioncomment_id,
			discussionCommentReactions.plusone,
			discussionCommentReactions.minusone,
			discussionCommentReactions.laugh,
			discussionCommentReactions.hooray,
			discussionCommentReactions.confused,
			discussionCommentReactions.heart,
			discussionCommentReactions.rocket,
			discussionCommentReactions.eyes,
		]);
	}

	public async insertMilestone(milestone: types.Milestone): Promise<void> {
		const query = `
      INSERT INTO milestones (
        id, node_id, url, milestone_number, state, title, description, created_by, open_issues, closed_issues, created_at, updated_at, closed_at, due_on
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    `;

		const values = [
			milestone.id,
			milestone.node_id,
			milestone.url,
			milestone.milestone_number,
			milestone.state,
			milestone.title,
			milestone.description,
			milestone.created_by,
			milestone.open_issues,
			milestone.closed_issues,
			milestone.created_at,
			milestone.updated_at,
			milestone.closed_at,
			milestone.due_on,
		];

		try {
			this.client.query(query, values);
			console.log("Milestone inserted successfully:", milestone.id);
		} catch (error) {
			console.error("Error inserting milestone:", error);
		}
	}

	public async updateMilestone(milestone: types.Milestone): Promise<void> {
		const query = `
      UPDATE milestones SET
        id = $1,
        node_id = $2,
        url = $3,
        milestone_number = $4,
        state = $5,
        title = $6,
        description = $7,
        created_by = $8,
        open_issues = $9,
        closed_issues = $10,
        created_at = $11,
        updated_at = $12,
        closed_at = $13,
        due_on = $14
      WHERE id = $1
    `;

		const values = [
			milestone.id,
			milestone.node_id,
			milestone.url,
			milestone.milestone_number,
			milestone.state,
			milestone.title,
			milestone.description,
			milestone.created_by,
			milestone.open_issues,
			milestone.closed_issues,
			milestone.created_at,
			milestone.updated_at,
			milestone.closed_at,
			milestone.due_on,
		];

		try {
			this.client.query(query, values);
			console.log("Milestone updated successfully:", milestone.id);
		} catch (error) {
			console.error("Error updating milestone:", error);
		}
	}

	public async upsertMilestone(milestone: types.Milestone): Promise<void> {
		const query = `
      INSERT INTO milestones (
        id, node_id, url, milestone_number, state, title, description, created_by, open_issues, closed_issues, created_at, updated_at, closed_at, due_on
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      ON CONFLICT (id) DO UPDATE SET
        id = excluded.id,
        node_id = excluded.node_id,
        url = excluded.url,
        milestone_number = excluded.milestone_number,
        state = excluded.state,
        title = excluded.title,
        description = excluded.description,
        created_by = excluded.created_by,
        open_issues = excluded.open_issues,
        closed_issues = excluded.closed_issues,
        created_at = excluded.created_at,
        updated_at = excluded.updated_at,
        closed_at = excluded.closed_at,
        due_on = excluded.due_on
    `;

		await this.client.query(query, [
			milestone.id,
			milestone.node_id,
			milestone.url,
			milestone.milestone_number,
			milestone.state,
			milestone.title,
			milestone.description,
			milestone.created_by,
			milestone.open_issues,
			milestone.closed_issues,
			milestone.created_at,
			milestone.updated_at,
			milestone.closed_at,
			milestone.due_on,
		]);
	}

	public async insertRepoLabels(repoLabels: types.RepoLabel): Promise<void> {
		const query = `
      INSERT INTO repo_labels (
        id, node_id, name, description, color, is_default, repository_id
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;

		const values = [
			repoLabels.id,
			repoLabels.node_id,
			repoLabels.name,
			repoLabels.description,
			repoLabels.color,
			repoLabels.is_default,
			repoLabels.repository_id,
		];

		try {
			this.client.query(query, values);
			console.log("Repo label inserted successfully:", repoLabels.id);
		} catch (error) {
			console.error("Error inserting repo label:", error);
		}
	}

	public async updateRepoLabels(repoLabels: types.RepoLabel): Promise<void> {
		const query = `
      UPDATE repo_labels SET
        node_id = $2,
        name = $3,
        description = $4,
        color = $5,
        is_default = $6,
		repository_id = $7
      WHERE id = $1
    `;

		const values = [
			repoLabels.id,
			repoLabels.node_id,
			repoLabels.name,
			repoLabels.description,
			repoLabels.color,
			repoLabels.is_default,
			repoLabels.repository_id,
		];

		try {
			this.client.query(query, values);
			console.log("Repo label updated successfully:", repoLabels.id);
		} catch (error) {
			console.error("Error updating repo label:", error);
		}
	}

	public async upsertRepoLabels(repoLabels: types.RepoLabel): Promise<void> {
		const query = `
      INSERT INTO repo_labels (
        id, node_id, name, description, color, is_default, repository_id
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      ON CONFLICT (id) DO UPDATE SET
        id = excluded.id,
        node_id = excluded.node_id,
        name = excluded.name,
        description = excluded.description,
        color = excluded.color,
        is_default = excluded.is_default,
		repository_id = excluded.repository_id
    `;

		await this.client.query(query, [
			repoLabels.id,
			repoLabels.node_id,
			repoLabels.name,
			repoLabels.description,
			repoLabels.color,
			repoLabels.is_default,
			repoLabels.repository_id,
		]);
	}

	public async insertIssueLabels(issueLabels: types.IssueLabel): Promise<void> {
		const query = `
      INSERT INTO issue_labels (
        issue_id, label_id
      ) VALUES ($1, $2)
    `;

		const values = [issueLabels.issue_id, issueLabels.label_id];

		try {
			this.client.query(query, values);
			console.log("Issue label inserted successfully:", issueLabels.issue_id);
		} catch (error) {
			console.error("Error inserting issue label:", error);
		}
	}

	public async updateIssueLabels(issueLabels: types.IssueLabel): Promise<void> {
		const query = `
      UPDATE issue_labels SET
        issue_id = $1,
        label_id = $2
      WHERE issue_id = $1 AND label_id = $2
    `;

		const values = [issueLabels.issue_id, issueLabels.label_id];

		try {
			this.client.query(query, values);
			console.log("Issue label updated successfully:", issueLabels.issue_id);
		} catch (error) {
			console.error("Error updating issue label:", error);
		}
	}

	public async upsertIssueLabels(issueLabels: types.IssueLabel): Promise<void> {
		const query = `
      INSERT INTO issue_labels (
        issue_id, label_id
      ) VALUES ($1, $2)
      ON CONFLICT (issue_id, label_id) DO NOTHING
    `;

		await this.client.query(query, [
			issueLabels.issue_id,
			issueLabels.label_id,
		]);
	}

	public async insertDiscussionLabels(
		discussionLabels: types.DiscussionLabel,
	): Promise<void> {
		const query = `
      INSERT INTO discussion_labels (
        discussion_id, label_id
      ) VALUES ($1, $2)
    `;

		const values = [discussionLabels.discussion_id, discussionLabels.label_id];

		try {
			this.client.query(query, values);
			console.log(
				"Discussion label inserted successfully:",
				discussionLabels.discussion_id,
			);
		} catch (error) {
			console.error("Error inserting discussion label:", error);
		}
	}

	public async updateDiscussionLabels(
		discussionLabels: types.DiscussionLabel,
	): Promise<void> {
		const query = `
      UPDATE discussion_labels SET
        discussion_id = $1,
        label_id = $2
      WHERE discussion_id = $1 AND label_id = $2
    `;

		const values = [discussionLabels.discussion_id, discussionLabels.label_id];

		try {
			this.client.query(query, values);
			console.log(
				"Discussion label updated successfully:",
				discussionLabels.discussion_id,
			);
		} catch (error) {
			console.error("Error updating discussion label:", error);
		}
	}

	public async upsertDiscussionLabels(
		discussionLabels: types.DiscussionLabel,
	): Promise<void> {
		const query = `
      INSERT INTO discussion_labels (
        discussion_id, label_id
      ) VALUES ($1, $2)
      ON CONFLICT (discussion_id, label_id) DO NOTHING
    `;

		await this.client.query(query, [
			discussionLabels.discussion_id,
			discussionLabels.label_id,
		]);
	}

	public async insertMilestoneLabels(
		milestoneLabels: types.MilestoneLabel,
	): Promise<void> {
		const query = `
      INSERT INTO milestone_labels (
        milestone_id, label_id
      ) VALUES ($1, $2)
    `;

		const values = [milestoneLabels.milestone_id, milestoneLabels.label_id];

		try {
			this.client.query(query, values);
			console.log("Milestone label inserted successfully:", milestoneLabels.milestone_id);
		} catch (error) {
			console.error("Error inserting milestone label:", error);
		}
	}

	public async updateMilestoneLabels(
		milestoneLabels: types.MilestoneLabel,
	): Promise<void> {
		const query = `
      UPDATE milestone_labels SET
        milestone_id = $1,
        label_id = $2
      WHERE milestone_id = $1 AND label_id = $2
    `;

		const values = [milestoneLabels.milestone_id, milestoneLabels.label_id];

		try {
			this.client.query(query, values);
			console.log(
				"Milestone label updated successfully:",
				milestoneLabels.milestone_id,
			);
		} catch (error) {
			console.error("Error updating milestone label:", error);
		}
	}

	public async upsertMilestoneLabels(
		milestoneLabels: types.MilestoneLabel,
	): Promise<void> {
		const query = `
      INSERT INTO milestone_labels (
        milestone_id, label_id
      ) VALUES ($1, $2)
      ON CONFLICT (milestone_id, label_id) DO NOTHING
    `;

		await this.client.query(query, [
			milestoneLabels.milestone_id,
			milestoneLabels.label_id,
		]);
	}

	public async insertPullRequestLabels(
		pullRequestLabels: types.PullRequestLabel,
	): Promise<void> {
		const query = `
      INSERT INTO pull_request_labels (
        pull_request_id, label_id
      ) VALUES ($1, $2)
    `;

		const values = [
			pullRequestLabels.pull_request_id,
			pullRequestLabels.label_id,
		];

		try {
			this.client.query(query, values);
			console.log(
				"Pull request label inserted successfully:",
				pullRequestLabels.pull_request_id,
			);
		} catch (error) {
			console.error("Error inserting pull request label:", error);
		}
	}

	public async updatePullRequestLabels(
		pullRequestLabels: types.PullRequestLabel,
	): Promise<void> {
		const query = `
      UPDATE pull_request_labels SET
        pull_request_id = $1,
        label_id = $2
      WHERE pull_request_id = $1 AND label_id = $2
    `;

		const values = [
			pullRequestLabels.pull_request_id,
			pullRequestLabels.label_id,
		];

		try {
			this.client.query(query, values);
			console.log(
				"Pull request label updated successfully:",
				pullRequestLabels.pull_request_id,
			);
		} catch (error) {
			console.error("Error updating pull request label:", error);
		}
	}

	public async upsertPullRequestLabels(
		pullRequestLabels: types.PullRequestLabel,
	): Promise<void> {
		const query = `
      INSERT INTO pull_request_labels (
        pull_request_id, label_id
      ) VALUES ($1, $2)
      ON CONFLICT (pull_request_id, label_id) DO NOTHING
    `;

		await this.client.query(query, [
			pullRequestLabels.pull_request_id,
			pullRequestLabels.label_id,
		]);
	}

	public async insertIssueAssignee(issueAssignee: types.IssueAssignee): Promise<void> {
		const query = `
	  INSERT INTO issue_assignees (
	    issue_id, assignee_id
	  ) VALUES ($1, $2)
	`;

		const values = [
	        issueAssignee.issue_id,
			issueAssignee.assignee_id,
		];

		try {
			this.client.query(query, values);
			console.log("Issue assignee inserted successfully:", issueAssignee.assignee_id);
		} catch (error) {
			console.error("Error inserting issue assignee:", error);
		}
	}

	public async updateIssueAssignee(issueAssignee: types.IssueAssignee): Promise<void> {
		const query = `
	  UPDATE issue_assignees SET
	    issue_id = $1,
	    assignee_id = $2
	  WHERE issue_id = $1 AND assignee_id = $2
	`;

		const values = [
	        issueAssignee.issue_id,
			issueAssignee.assignee_id,
		];

		try {
			this.client.query(query, values);
			console.log("Issue assignee updated successfully:", issueAssignee.issue_id);
		} catch (error) {
			console.error("Error updating issue assignee:", error);
		}
	}

	public async upsertIssueAssignee(issueAssignee: types.IssueAssignee): Promise<void> {
		const query = `
	  INSERT INTO issue_assignees (
	    issue_id, assignee_id
	  ) VALUES ($1, $2)
	  ON CONFLICT (issue_id, assignee_id) DO NOTHING
	`;

		await this.client.query(query, [
	        issueAssignee.issue_id,
			issueAssignee.assignee_id,
		]);
	}

	public async insertPullRequestAssignee(pullRequestAssignee: types.PullRequestAssignee): Promise<void> {
		const query = `
	  INSERT INTO pull_request_assignees (
	    pull_request_id, assignee_id
	  ) VALUES ($1, $2)
	`;

		const values = [
	        pullRequestAssignee.pullrequest_id,
			pullRequestAssignee.assignee_id,
		];

		try {
			this.client.query(query, values);
			console.log("Pull request assignee inserted successfully:", pullRequestAssignee.pullrequest_id);
		} catch (error) {
			console.error("Error inserting pull request assignee:", error);
		}
	}

	public async updatePullRequestAssignee(pullRequestAssignee: types.PullRequestAssignee): Promise<void> {
		const query = `
	  UPDATE pull_request_assignees SET
	    pull_request_id = $1,
	    assignee_id = $2
	  WHERE pull_request_id = $1 AND assignee_id = $2
	`;

		const values = [
	        pullRequestAssignee.pullrequest_id,
			pullRequestAssignee.assignee_id,
		];

		try {
			this.client.query(query, values);
			console.log("Pull request assignee updated successfully:", pullRequestAssignee.pullrequest_id);
		} catch (error) {
			console.error("Error updating pull request assignee:", error);
		}
	}

	public async upsertPullRequestAssignee(pullRequestAssignee: types.PullRequestAssignee): Promise<void> {
		const query = `
	  INSERT INTO pull_request_assignees (
	    pull_request_id, assignee_id
	  ) VALUES ($1, $2)
	  ON CONFLICT (pull_request_id, assignee_id) DO NOTHING
	`;

		await this.client.query(query, [
	        pullRequestAssignee.pullrequest_id,
			pullRequestAssignee.assignee_id,
		]);
	}

	public async insertIssueMilestone(
		issueMilestone: types.IssueMilestone,
	): Promise<void> {
		const query = `
      INSERT INTO issue_milestones (
        issue_id, milestone_id
      ) VALUES ($1, $2)
    `;

		const values = [issueMilestone.issue_id, issueMilestone.milestone_id];

		try {
			this.client.query(query, values);
			console.log(
				"Issue milestone inserted successfully:",
				issueMilestone.issue_id,
			);
		} catch (error) {
			console.error("Error inserting issue milestone:", error);
		}
	}

	public async updateIssueMilestone(
		issueMilestone: types.IssueMilestone,
	): Promise<void> {
		const query = `
      UPDATE issue_milestones SET
        issue_id = $1,
        milestone_id = $2
      WHERE issue_id = $1 AND milestone_id = $2
    `;

		const values = [issueMilestone.issue_id, issueMilestone.milestone_id];

		try {
			this.client.query(query, values);
			console.log(
				"Issue milestone updated successfully:",
				issueMilestone.issue_id,
			);
		} catch (error) {
			console.error("Error updating issue milestone:", error);
		}
	}

	public async upsertIssueMilestone(
		issueMilestone: types.IssueMilestone,
	): Promise<void> {
		const query = `
      INSERT INTO issue_milestones (
        issue_id, milestone_id
      ) VALUES ($1, $2)
      ON CONFLICT (issue_id, milestone_id) DO NOTHING
    `;

		await this.client.query(query, [
			issueMilestone.issue_id,
			issueMilestone.milestone_id,
		]);
	}

	public async insertPullRequestMilestone(
		pullRequestMilestone: types.PullRequestMilestone,
	): Promise<void> {
		const query = `
      INSERT INTO pull_request_milestones (
        pull_request_id, milestone_id
      ) VALUES ($1, $2)
    `;

		const values = [
			pullRequestMilestone.pull_request_id,
			pullRequestMilestone.milestone_id,
		];

		try {
			this.client.query(query, values);
			console.log(
				"Pull request milestone inserted successfully:",
				pullRequestMilestone.pull_request_id,
			);
		} catch (error) {
			console.error("Error inserting pull request milestone:", error);
		}
	}

	public async updatePullRequestMilestone(
		pullRequestMilestone: types.PullRequestMilestone,
	): Promise<void> {
		const query = `
      UPDATE pull_request_milestones SET
        pull_request_id = $1,
        milestone_id = $2
      WHERE pull_request_id = $1 AND milestone_id = $2
    `;

		const values = [
			pullRequestMilestone.pull_request_id,
			pullRequestMilestone.milestone_id,
		];

		try {
			this.client.query(query, values);
			console.log(
				"Pull request milestone updated successfully:",
				pullRequestMilestone.pull_request_id,
			);
		} catch (error) {
			console.error("Error updating pull request milestone:", error);
		}
	}

	public async upsertPullRequestMilestone(
		pullRequestMilestone: types.PullRequestMilestone,
	): Promise<void> {
		const query = `
      INSERT INTO pull_request_milestones (
        pull_request_id, milestone_id
      ) VALUES ($1, $2)
      ON CONFLICT (pull_request_id, milestone_id) DO NOTHING
    `;

		await this.client.query(query, [
			pullRequestMilestone.pull_request_id,
			pullRequestMilestone.milestone_id,
		]);
	}

	public async insertSubIssueList(subIssueList: types.SubIssueList): Promise<void> {
		const query = `
	  INSERT INTO sub_issue_list (
	    parent_id, sub_id
	  ) VALUES ($1, $2)
	`;

		const values = [
	    subIssueList.parent_id,
			subIssueList.sub_id,
		];

		try {
			this.client.query(query, values);
			console.log("Sub issue list inserted successfully:", subIssueList.sub_id);
		} catch (error) {
			console.error("Error inserting sub issue list:", error);
		}
	}

	public async updateSubIssueList(subIssueList: types.SubIssueList): Promise<void> {
		const query = `
	  UPDATE sub_issue_lists SET
	    parent_id = $1,
	    sub_id = $2
	  WHERE parent_id = $1 AND sub_id = $2
	`;

		const values = [
	        subIssueList.parent_id,
			subIssueList.sub_id,
		];

		try {
			this.client.query(query, values);
			console.log("Sub issue list updated successfully:", subIssueList.parent_id);
		} catch (error) {
			console.error("Error updating sub issue list:", error);
		}
	}

	public async upsertSubIssueList(subIssueList: types.SubIssueList): Promise<void> {
		const query = `
	  INSERT INTO sub_issue_lists (
	    parent_id, sub_id
	  ) VALUES ($1, $2)
	  ON CONFLICT (parent_id, sub_id) DO NOTHING
	`;

		await this.client.query(query, [
	        subIssueList.parent_id,
			subIssueList.sub_id,
		]);
	}
}
