export const IssueOpenedWebhook = {
	event: "issues",
	payload: {
		action: "opened",
		issue: {
			url: "https://api.github.com/repos/alikulka/demo-repo/issues/6",
			repository_url: "https://api.github.com/repos/alikulka/demo-repo",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/6/labels{/name}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/6/comments",
			events_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/6/events",
			html_url: "https://github.com/alikulka/demo-repo/issues/6",
			id: 2843189664,
			node_id: "I_kwDONrZruc6pd6Gg",
			number: 6,
			title: "this is an issue opened to test",
			user: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			labels: [],
			state: "OPEN",
			locked: false,
			assignee: null,
			assignees: [],
			milestone: null,
			comments: 0,
			created_at: "2025-02-10T17:47:05Z",
			updated_at: "2025-02-10T17:47:05Z",
			closed_at: null,
			author_association: "OWNER",
			sub_issues_summary: {
				total: 0,
				completed: 0,
				percent_completed: 0,
			},
			active_lock_reason: null,
			body: "this is a test issue",
			reactions: {
				url: "https://api.github.com/repos/alikulka/demo-repo/issues/6/reactions",
				total_count: 0,
				"+1": 0,
				"-1": 0,
				laugh: 0,
				hooray: 0,
				confused: 0,
				heart: 0,
				rocket: 0,
				eyes: 0,
			},
			timeline_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/6/timeline",
			performed_via_github_app: null,
			state_reason: null,
		},
		repository: {
			id: 917924793,
			node_id: "R_kgDONrZruQ",
			name: "demo-repo",
			full_name: "alikulka/demo-repo",
			private: false,
			owner: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			html_url: "https://github.com/alikulka/demo-repo",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/alikulka/demo-repo",
			forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
			keys_url: "https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
			hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
			issue_events_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
			events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
			assignees_url:
				"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
			tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
			blobs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/alikulka/demo-repo/languages",
			stargazers_url:
				"https://api.github.com/repos/alikulka/demo-repo/stargazers",
			contributors_url:
				"https://api.github.com/repos/alikulka/demo-repo/contributors",
			subscribers_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscribers",
			subscription_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscription",
			commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
			archive_url:
				"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/alikulka/demo-repo/downloads",
			issues_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
			releases_url:
				"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/alikulka/demo-repo/deployments",
			created_at: "2025-01-16T22:39:51Z",
			updated_at: "2025-01-16T22:39:53Z",
			pushed_at: "2025-01-16T22:39:52Z",
			git_url: "git://github.com/alikulka/demo-repo.git",
			ssh_url: "git@github.com:alikulka/demo-repo.git",
			clone_url: "https://github.com/alikulka/demo-repo.git",
			svn_url: "https://github.com/alikulka/demo-repo",
			homepage: null,
			size: 0,
			stargazers_count: 0,
			watchers_count: 0,
			language: null,
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 2,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 2,
			watchers: 0,
			default_branch: "main",
		},
		sender: {
			login: "alikulka",
			id: 191903916,
			node_id: "U_kgDOC3A4rA",
			avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/alikulka",
			html_url: "https://github.com/alikulka",
			followers_url: "https://api.github.com/users/alikulka/followers",
			following_url:
				"https://api.github.com/users/alikulka/following{/other_user}",
			gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
			starred_url:
				"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/alikulka/subscriptions",
			organizations_url: "https://api.github.com/users/alikulka/orgs",
			repos_url: "https://api.github.com/users/alikulka/repos",
			events_url: "https://api.github.com/users/alikulka/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/alikulka/received_events",
			type: "User",
			user_view_type: "public",
			site_admin: false,
		},
	},
};

export const IssueClosedWebhook = {
	event: "issues",
	payload: {
		action: "closed",
		issue: {
			url: "https://api.github.com/repos/alikulka/demo-repo/issues/6",
			repository_url: "https://api.github.com/repos/alikulka/demo-repo",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/6/labels{/name}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/6/comments",
			events_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/6/events",
			html_url: "https://github.com/alikulka/demo-repo/issues/6",
			id: 2843189664,
			node_id: "I_kwDONrZruc6pd6Gg",
			number: 6,
			title: "this is an issue opened to test",
			user: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			labels: [],
			state: "CLOSED",
			locked: false,
			assignee: null,
			assignees: [],
			milestone: null,
			comments: 0,
			created_at: "2025-02-10T17:47:05Z",
			updated_at: "2025-02-10T20:09:00Z",
			closed_at: "2025-02-10T20:09:00Z",
			author_association: "OWNER",
			sub_issues_summary: { total: 0, completed: 0, percent_completed: 0 },
			active_lock_reason: null,
			body: "this is a test issue",
			reactions: {
				url: "https://api.github.com/repos/alikulka/demo-repo/issues/6/reactions",
				total_count: 0,
				"+1": 0,
				"-1": 0,
				laugh: 0,
				hooray: 0,
				confused: 0,
				heart: 0,
				rocket: 0,
				eyes: 0,
			},
			timeline_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/6/timeline",
			performed_via_github_app: null,
			state_reason: "COMPLETED",
		},
		repository: {
			id: 917924793,
			node_id: "R_kgDONrZruQ",
			name: "demo-repo",
			full_name: "alikulka/demo-repo",
			private: false,
			owner: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			html_url: "https://github.com/alikulka/demo-repo",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/alikulka/demo-repo",
			forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
			keys_url: "https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
			hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
			issue_events_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
			events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
			assignees_url:
				"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
			tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
			blobs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/alikulka/demo-repo/languages",
			stargazers_url:
				"https://api.github.com/repos/alikulka/demo-repo/stargazers",
			contributors_url:
				"https://api.github.com/repos/alikulka/demo-repo/contributors",
			subscribers_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscribers",
			subscription_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscription",
			commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
			archive_url:
				"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/alikulka/demo-repo/downloads",
			issues_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
			releases_url:
				"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/alikulka/demo-repo/deployments",
			created_at: "2025-01-16T22:39:51Z",
			updated_at: "2025-01-16T22:39:53Z",
			pushed_at: "2025-01-16T22:39:52Z",
			git_url: "git://github.com/alikulka/demo-repo.git",
			ssh_url: "git@github.com:alikulka/demo-repo.git",
			clone_url: "https://github.com/alikulka/demo-repo.git",
			svn_url: "https://github.com/alikulka/demo-repo",
			homepage: null,
			size: 0,
			stargazers_count: 0,
			watchers_count: 0,
			language: null,
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 1,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 1,
			watchers: 0,
			default_branch: "main",
		},
		sender: {
			login: "alikulka",
			id: 191903916,
			node_id: "U_kgDOC3A4rA",
			avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/alikulka",
			html_url: "https://github.com/alikulka",
			followers_url: "https://api.github.com/users/alikulka/followers",
			following_url:
				"https://api.github.com/users/alikulka/following{/other_user}",
			gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
			starred_url:
				"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/alikulka/subscriptions",
			organizations_url: "https://api.github.com/users/alikulka/orgs",
			repos_url: "https://api.github.com/users/alikulka/repos",
			events_url: "https://api.github.com/users/alikulka/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/alikulka/received_events",
			type: "User",
			user_view_type: "public",
			site_admin: false,
		},
	},
};

export const PullRequestOpenedWebhook = {
	event: "pull_request",
	payload: {
		action: "opened",
		number: 7,
		pull_request: {
			url: "https://api.github.com/repos/alikulka/demo-repo/pulls/7",
			id: 2327311042,
			node_id: "PR_kwDONrZruc6Kt_LC",
			html_url: "https://github.com/alikulka/demo-repo/pull/7",
			diff_url: "https://github.com/alikulka/demo-repo/pull/7.diff",
			patch_url: "https://github.com/alikulka/demo-repo/pull/7.patch",
			issue_url: "https://api.github.com/repos/alikulka/demo-repo/issues/7",
			number: 7,
			state: "OPEN",
			locked: false,
			title: "Create pr-branch-test.txt",
			user: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			body: null,
			created_at: "2025-02-10T22:06:30Z",
			updated_at: "2025-02-10T22:06:30Z",
			closed_at: null,
			merged_at: null,
			merge_commit_sha: null,
			assignee: null,
			assignees: [],
			requested_reviewers: [],
			requested_teams: [],
			labels: [],
			milestone: null,
			draft: false,
			commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls/7/commits",
			review_comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls/7/comments",
			review_comment_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls/comments{/number}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/7/comments",
			statuses_url:
				"https://api.github.com/repos/alikulka/demo-repo/statuses/45a79501064a9c7dfaebe36ca2e2315de07864e3",
			head: {
				label: "alikulka:pr-test",
				ref: "pr-test",
				sha: "45a79501064a9c7dfaebe36ca2e2315de07864e3",
				user: {
					login: "alikulka",
					id: 191903916,
					node_id: "U_kgDOC3A4rA",
					avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
					gravatar_id: "",
					url: "https://api.github.com/users/alikulka",
					html_url: "https://github.com/alikulka",
					followers_url: "https://api.github.com/users/alikulka/followers",
					following_url:
						"https://api.github.com/users/alikulka/following{/other_user}",
					gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
					starred_url:
						"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
					subscriptions_url:
						"https://api.github.com/users/alikulka/subscriptions",
					organizations_url: "https://api.github.com/users/alikulka/orgs",
					repos_url: "https://api.github.com/users/alikulka/repos",
					events_url: "https://api.github.com/users/alikulka/events{/privacy}",
					received_events_url:
						"https://api.github.com/users/alikulka/received_events",
					type: "User",
					user_view_type: "public",
					site_admin: false,
				},
				repo: {
					id: 917924793,
					node_id: "R_kgDONrZruQ",
					name: "demo-repo",
					full_name: "alikulka/demo-repo",
					private: false,
					owner: {
						login: "alikulka",
						id: 191903916,
						node_id: "U_kgDOC3A4rA",
						avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
						gravatar_id: "",
						url: "https://api.github.com/users/alikulka",
						html_url: "https://github.com/alikulka",
						followers_url: "https://api.github.com/users/alikulka/followers",
						following_url:
							"https://api.github.com/users/alikulka/following{/other_user}",
						gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
						starred_url:
							"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
						subscriptions_url:
							"https://api.github.com/users/alikulka/subscriptions",
						organizations_url: "https://api.github.com/users/alikulka/orgs",
						repos_url: "https://api.github.com/users/alikulka/repos",
						events_url:
							"https://api.github.com/users/alikulka/events{/privacy}",
						received_events_url:
							"https://api.github.com/users/alikulka/received_events",
						type: "User",
						user_view_type: "public",
						site_admin: false,
					},
					html_url: "https://github.com/alikulka/demo-repo",
					description: null,
					fork: false,
					url: "https://api.github.com/repos/alikulka/demo-repo",
					forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
					keys_url:
						"https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
					collaborators_url:
						"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
					teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
					hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
					issue_events_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
					events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
					assignees_url:
						"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
					branches_url:
						"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
					tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
					blobs_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
					git_tags_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
					git_refs_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
					trees_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
					statuses_url:
						"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
					languages_url:
						"https://api.github.com/repos/alikulka/demo-repo/languages",
					stargazers_url:
						"https://api.github.com/repos/alikulka/demo-repo/stargazers",
					contributors_url:
						"https://api.github.com/repos/alikulka/demo-repo/contributors",
					subscribers_url:
						"https://api.github.com/repos/alikulka/demo-repo/subscribers",
					subscription_url:
						"https://api.github.com/repos/alikulka/demo-repo/subscription",
					commits_url:
						"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
					git_commits_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
					comments_url:
						"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
					issue_comment_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
					contents_url:
						"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
					compare_url:
						"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
					merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
					archive_url:
						"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
					downloads_url:
						"https://api.github.com/repos/alikulka/demo-repo/downloads",
					issues_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
					pulls_url:
						"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
					milestones_url:
						"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
					notifications_url:
						"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
					labels_url:
						"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
					releases_url:
						"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
					deployments_url:
						"https://api.github.com/repos/alikulka/demo-repo/deployments",
					created_at: "2025-01-16T22:39:51Z",
					updated_at: "2025-02-10T21:56:57Z",
					pushed_at: "2025-02-10T22:06:19Z",
					git_url: "git://github.com/alikulka/demo-repo.git",
					ssh_url: "git@github.com:alikulka/demo-repo.git",
					clone_url: "https://github.com/alikulka/demo-repo.git",
					svn_url: "https://github.com/alikulka/demo-repo",
					homepage: null,
					size: 0,
					stargazers_count: 0,
					watchers_count: 0,
					language: null,
					has_issues: true,
					has_projects: true,
					has_downloads: true,
					has_wiki: true,
					has_pages: false,
					has_discussions: false,
					forks_count: 0,
					mirror_url: null,
					archived: false,
					disabled: false,
					open_issues_count: 2,
					license: null,
					allow_forking: true,
					is_template: false,
					web_commit_signoff_required: false,
					topics: [],
					visibility: "public",
					forks: 0,
					open_issues: 2,
					watchers: 0,
					default_branch: "main",
					allow_squash_merge: true,
					allow_merge_commit: true,
					allow_rebase_merge: true,
					allow_auto_merge: false,
					delete_branch_on_merge: false,
					allow_update_branch: false,
					use_squash_pr_title_as_default: false,
					squash_merge_commit_message: "COMMIT_MESSAGES",
					squash_merge_commit_title: "COMMIT_OR_PR_TITLE",
					merge_commit_message: "PR_TITLE",
					merge_commit_title: "MERGE_MESSAGE",
				},
			},
			base: {
				label: "alikulka:main",
				ref: "main",
				sha: "36f1f6c2a9094c80101b111135ebaf6aec078d32",
				user: {
					login: "alikulka",
					id: 191903916,
					node_id: "U_kgDOC3A4rA",
					avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
					gravatar_id: "",
					url: "https://api.github.com/users/alikulka",
					html_url: "https://github.com/alikulka",
					followers_url: "https://api.github.com/users/alikulka/followers",
					following_url:
						"https://api.github.com/users/alikulka/following{/other_user}",
					gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
					starred_url:
						"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
					subscriptions_url:
						"https://api.github.com/users/alikulka/subscriptions",
					organizations_url: "https://api.github.com/users/alikulka/orgs",
					repos_url: "https://api.github.com/users/alikulka/repos",
					events_url: "https://api.github.com/users/alikulka/events{/privacy}",
					received_events_url:
						"https://api.github.com/users/alikulka/received_events",
					type: "User",
					user_view_type: "public",
					site_admin: false,
				},
				repo: {
					id: 917924793,
					node_id: "R_kgDONrZruQ",
					name: "demo-repo",
					full_name: "alikulka/demo-repo",
					private: false,
					owner: {
						login: "alikulka",
						id: 191903916,
						node_id: "U_kgDOC3A4rA",
						avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
						gravatar_id: "",
						url: "https://api.github.com/users/alikulka",
						html_url: "https://github.com/alikulka",
						followers_url: "https://api.github.com/users/alikulka/followers",
						following_url:
							"https://api.github.com/users/alikulka/following{/other_user}",
						gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
						starred_url:
							"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
						subscriptions_url:
							"https://api.github.com/users/alikulka/subscriptions",
						organizations_url: "https://api.github.com/users/alikulka/orgs",
						repos_url: "https://api.github.com/users/alikulka/repos",
						events_url:
							"https://api.github.com/users/alikulka/events{/privacy}",
						received_events_url:
							"https://api.github.com/users/alikulka/received_events",
						type: "User",
						user_view_type: "public",
						site_admin: false,
					},
					html_url: "https://github.com/alikulka/demo-repo",
					description: null,
					fork: false,
					url: "https://api.github.com/repos/alikulka/demo-repo",
					forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
					keys_url:
						"https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
					collaborators_url:
						"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
					teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
					hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
					issue_events_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
					events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
					assignees_url:
						"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
					branches_url:
						"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
					tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
					blobs_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
					git_tags_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
					git_refs_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
					trees_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
					statuses_url:
						"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
					languages_url:
						"https://api.github.com/repos/alikulka/demo-repo/languages",
					stargazers_url:
						"https://api.github.com/repos/alikulka/demo-repo/stargazers",
					contributors_url:
						"https://api.github.com/repos/alikulka/demo-repo/contributors",
					subscribers_url:
						"https://api.github.com/repos/alikulka/demo-repo/subscribers",
					subscription_url:
						"https://api.github.com/repos/alikulka/demo-repo/subscription",
					commits_url:
						"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
					git_commits_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
					comments_url:
						"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
					issue_comment_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
					contents_url:
						"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
					compare_url:
						"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
					merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
					archive_url:
						"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
					downloads_url:
						"https://api.github.com/repos/alikulka/demo-repo/downloads",
					issues_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
					pulls_url:
						"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
					milestones_url:
						"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
					notifications_url:
						"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
					labels_url:
						"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
					releases_url:
						"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
					deployments_url:
						"https://api.github.com/repos/alikulka/demo-repo/deployments",
					created_at: "2025-01-16T22:39:51Z",
					updated_at: "2025-02-10T21:56:57Z",
					pushed_at: "2025-02-10T22:06:19Z",
					git_url: "git://github.com/alikulka/demo-repo.git",
					ssh_url: "git@github.com:alikulka/demo-repo.git",
					clone_url: "https://github.com/alikulka/demo-repo.git",
					svn_url: "https://github.com/alikulka/demo-repo",
					homepage: null,
					size: 0,
					stargazers_count: 0,
					watchers_count: 0,
					language: null,
					has_issues: true,
					has_projects: true,
					has_downloads: true,
					has_wiki: true,
					has_pages: false,
					has_discussions: false,
					forks_count: 0,
					mirror_url: null,
					archived: false,
					disabled: false,
					open_issues_count: 2,
					license: null,
					allow_forking: true,
					is_template: false,
					web_commit_signoff_required: false,
					topics: [],
					visibility: "public",
					forks: 0,
					open_issues: 2,
					watchers: 0,
					default_branch: "main",
					allow_squash_merge: true,
					allow_merge_commit: true,
					allow_rebase_merge: true,
					allow_auto_merge: false,
					delete_branch_on_merge: false,
					allow_update_branch: false,
					use_squash_pr_title_as_default: false,
					squash_merge_commit_message: "COMMIT_MESSAGES",
					squash_merge_commit_title: "COMMIT_OR_PR_TITLE",
					merge_commit_message: "PR_TITLE",
					merge_commit_title: "MERGE_MESSAGE",
				},
			},
			_links: {
				self: {
					href: "https://api.github.com/repos/alikulka/demo-repo/pulls/7",
				},
				html: { href: "https://github.com/alikulka/demo-repo/pull/7" },
				issue: {
					href: "https://api.github.com/repos/alikulka/demo-repo/issues/7",
				},
				comments: {
					href: "https://api.github.com/repos/alikulka/demo-repo/issues/7/comments",
				},
				review_comments: {
					href: "https://api.github.com/repos/alikulka/demo-repo/pulls/7/comments",
				},
				review_comment: {
					href: "https://api.github.com/repos/alikulka/demo-repo/pulls/comments{/number}",
				},
				commits: {
					href: "https://api.github.com/repos/alikulka/demo-repo/pulls/7/commits",
				},
				statuses: {
					href: "https://api.github.com/repos/alikulka/demo-repo/statuses/45a79501064a9c7dfaebe36ca2e2315de07864e3",
				},
			},
			author_association: "OWNER",
			auto_merge: null,
			active_lock_reason: null,
			merged: false,
			mergeable: null,
			rebaseable: null,
			mergeable_state: "unknown",
			merged_by: null,
			comments: 0,
			review_comments: 0,
			maintainer_can_modify: false,
			commits: 1,
			additions: 1,
			deletions: 0,
			changed_files: 1,
		},
		repository: {
			id: 917924793,
			node_id: "R_kgDONrZruQ",
			name: "demo-repo",
			full_name: "alikulka/demo-repo",
			private: false,
			owner: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			html_url: "https://github.com/alikulka/demo-repo",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/alikulka/demo-repo",
			forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
			keys_url: "https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
			hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
			issue_events_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
			events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
			assignees_url:
				"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
			tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
			blobs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/alikulka/demo-repo/languages",
			stargazers_url:
				"https://api.github.com/repos/alikulka/demo-repo/stargazers",
			contributors_url:
				"https://api.github.com/repos/alikulka/demo-repo/contributors",
			subscribers_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscribers",
			subscription_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscription",
			commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
			archive_url:
				"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/alikulka/demo-repo/downloads",
			issues_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
			releases_url:
				"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/alikulka/demo-repo/deployments",
			created_at: "2025-01-16T22:39:51Z",
			updated_at: "2025-02-10T21:56:57Z",
			pushed_at: "2025-02-10T22:06:19Z",
			git_url: "git://github.com/alikulka/demo-repo.git",
			ssh_url: "git@github.com:alikulka/demo-repo.git",
			clone_url: "https://github.com/alikulka/demo-repo.git",
			svn_url: "https://github.com/alikulka/demo-repo",
			homepage: null,
			size: 0,
			stargazers_count: 0,
			watchers_count: 0,
			language: null,
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 2,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 2,
			watchers: 0,
			default_branch: "main",
		},
		sender: {
			login: "alikulka",
			id: 191903916,
			node_id: "U_kgDOC3A4rA",
			avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/alikulka",
			html_url: "https://github.com/alikulka",
			followers_url: "https://api.github.com/users/alikulka/followers",
			following_url:
				"https://api.github.com/users/alikulka/following{/other_user}",
			gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
			starred_url:
				"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/alikulka/subscriptions",
			organizations_url: "https://api.github.com/users/alikulka/orgs",
			repos_url: "https://api.github.com/users/alikulka/repos",
			events_url: "https://api.github.com/users/alikulka/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/alikulka/received_events",
			type: "User",
			user_view_type: "public",
			site_admin: false,
		},
	},
};

export const PullRequestClosedWebhook = {
	event: "pull_request",
	payload: {
		action: "closed",
		number: 7,
		pull_request: {
			url: "https://api.github.com/repos/alikulka/demo-repo/pulls/7",
			id: 2327311042,
			node_id: "PR_kwDONrZruc6Kt_LC",
			html_url: "https://github.com/alikulka/demo-repo/pull/7",
			diff_url: "https://github.com/alikulka/demo-repo/pull/7.diff",
			patch_url: "https://github.com/alikulka/demo-repo/pull/7.patch",
			issue_url: "https://api.github.com/repos/alikulka/demo-repo/issues/7",
			number: 7,
			state: "CLOSED",
			locked: false,
			title: "Create pr-branch-test.txt",
			user: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			body: null,
			created_at: "2025-02-10T22:06:30Z",
			updated_at: "2025-02-10T22:24:42Z",
			closed_at: "2025-02-10T22:24:42Z",
			merged_at: null,
			merge_commit_sha: "4496c0826bc6929812217eb5fbd61965dd325d42",
			assignee: null,
			assignees: [],
			requested_reviewers: [],
			requested_teams: [],
			labels: [],
			milestone: null,
			draft: false,
			commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls/7/commits",
			review_comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls/7/comments",
			review_comment_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls/comments{/number}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/7/comments",
			statuses_url:
				"https://api.github.com/repos/alikulka/demo-repo/statuses/45a79501064a9c7dfaebe36ca2e2315de07864e3",
			head: {
				label: "alikulka:pr-test",
				ref: "pr-test",
				sha: "45a79501064a9c7dfaebe36ca2e2315de07864e3",
				user: {
					login: "alikulka",
					id: 191903916,
					node_id: "U_kgDOC3A4rA",
					avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
					gravatar_id: "",
					url: "https://api.github.com/users/alikulka",
					html_url: "https://github.com/alikulka",
					followers_url: "https://api.github.com/users/alikulka/followers",
					following_url:
						"https://api.github.com/users/alikulka/following{/other_user}",
					gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
					starred_url:
						"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
					subscriptions_url:
						"https://api.github.com/users/alikulka/subscriptions",
					organizations_url: "https://api.github.com/users/alikulka/orgs",
					repos_url: "https://api.github.com/users/alikulka/repos",
					events_url: "https://api.github.com/users/alikulka/events{/privacy}",
					received_events_url:
						"https://api.github.com/users/alikulka/received_events",
					type: "User",
					user_view_type: "public",
					site_admin: false,
				},
				repo: {
					id: 917924793,
					node_id: "R_kgDONrZruQ",
					name: "demo-repo",
					full_name: "alikulka/demo-repo",
					private: false,
					owner: {
						login: "alikulka",
						id: 191903916,
						node_id: "U_kgDOC3A4rA",
						avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
						gravatar_id: "",
						url: "https://api.github.com/users/alikulka",
						html_url: "https://github.com/alikulka",
						followers_url: "https://api.github.com/users/alikulka/followers",
						following_url:
							"https://api.github.com/users/alikulka/following{/other_user}",
						gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
						starred_url:
							"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
						subscriptions_url:
							"https://api.github.com/users/alikulka/subscriptions",
						organizations_url: "https://api.github.com/users/alikulka/orgs",
						repos_url: "https://api.github.com/users/alikulka/repos",
						events_url:
							"https://api.github.com/users/alikulka/events{/privacy}",
						received_events_url:
							"https://api.github.com/users/alikulka/received_events",
						type: "User",
						user_view_type: "public",
						site_admin: false,
					},
					html_url: "https://github.com/alikulka/demo-repo",
					description: null,
					fork: false,
					url: "https://api.github.com/repos/alikulka/demo-repo",
					forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
					keys_url:
						"https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
					collaborators_url:
						"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
					teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
					hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
					issue_events_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
					events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
					assignees_url:
						"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
					branches_url:
						"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
					tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
					blobs_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
					git_tags_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
					git_refs_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
					trees_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
					statuses_url:
						"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
					languages_url:
						"https://api.github.com/repos/alikulka/demo-repo/languages",
					stargazers_url:
						"https://api.github.com/repos/alikulka/demo-repo/stargazers",
					contributors_url:
						"https://api.github.com/repos/alikulka/demo-repo/contributors",
					subscribers_url:
						"https://api.github.com/repos/alikulka/demo-repo/subscribers",
					subscription_url:
						"https://api.github.com/repos/alikulka/demo-repo/subscription",
					commits_url:
						"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
					git_commits_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
					comments_url:
						"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
					issue_comment_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
					contents_url:
						"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
					compare_url:
						"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
					merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
					archive_url:
						"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
					downloads_url:
						"https://api.github.com/repos/alikulka/demo-repo/downloads",
					issues_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
					pulls_url:
						"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
					milestones_url:
						"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
					notifications_url:
						"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
					labels_url:
						"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
					releases_url:
						"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
					deployments_url:
						"https://api.github.com/repos/alikulka/demo-repo/deployments",
					created_at: "2025-01-16T22:39:51Z",
					updated_at: "2025-02-10T21:56:57Z",
					pushed_at: "2025-02-10T22:06:19Z",
					git_url: "git://github.com/alikulka/demo-repo.git",
					ssh_url: "git@github.com:alikulka/demo-repo.git",
					clone_url: "https://github.com/alikulka/demo-repo.git",
					svn_url: "https://github.com/alikulka/demo-repo",
					homepage: null,
					size: 0,
					stargazers_count: 0,
					watchers_count: 0,
					language: null,
					has_issues: true,
					has_projects: true,
					has_downloads: true,
					has_wiki: true,
					has_pages: false,
					has_discussions: false,
					forks_count: 0,
					mirror_url: null,
					archived: false,
					disabled: false,
					open_issues_count: 1,
					license: null,
					allow_forking: true,
					is_template: false,
					web_commit_signoff_required: false,
					topics: [],
					visibility: "public",
					forks: 0,
					open_issues: 1,
					watchers: 0,
					default_branch: "main",
					allow_squash_merge: true,
					allow_merge_commit: true,
					allow_rebase_merge: true,
					allow_auto_merge: false,
					delete_branch_on_merge: false,
					allow_update_branch: false,
					use_squash_pr_title_as_default: false,
					squash_merge_commit_message: "COMMIT_MESSAGES",
					squash_merge_commit_title: "COMMIT_OR_PR_TITLE",
					merge_commit_message: "PR_TITLE",
					merge_commit_title: "MERGE_MESSAGE",
				},
			},
			base: {
				label: "alikulka:main",
				ref: "main",
				sha: "36f1f6c2a9094c80101b111135ebaf6aec078d32",
				user: {
					login: "alikulka",
					id: 191903916,
					node_id: "U_kgDOC3A4rA",
					avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
					gravatar_id: "",
					url: "https://api.github.com/users/alikulka",
					html_url: "https://github.com/alikulka",
					followers_url: "https://api.github.com/users/alikulka/followers",
					following_url:
						"https://api.github.com/users/alikulka/following{/other_user}",
					gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
					starred_url:
						"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
					subscriptions_url:
						"https://api.github.com/users/alikulka/subscriptions",
					organizations_url: "https://api.github.com/users/alikulka/orgs",
					repos_url: "https://api.github.com/users/alikulka/repos",
					events_url: "https://api.github.com/users/alikulka/events{/privacy}",
					received_events_url:
						"https://api.github.com/users/alikulka/received_events",
					type: "User",
					user_view_type: "public",
					site_admin: false,
				},
				repo: {
					id: 917924793,
					node_id: "R_kgDONrZruQ",
					name: "demo-repo",
					full_name: "alikulka/demo-repo",
					private: false,
					owner: {
						login: "alikulka",
						id: 191903916,
						node_id: "U_kgDOC3A4rA",
						avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
						gravatar_id: "",
						url: "https://api.github.com/users/alikulka",
						html_url: "https://github.com/alikulka",
						followers_url: "https://api.github.com/users/alikulka/followers",
						following_url:
							"https://api.github.com/users/alikulka/following{/other_user}",
						gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
						starred_url:
							"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
						subscriptions_url:
							"https://api.github.com/users/alikulka/subscriptions",
						organizations_url: "https://api.github.com/users/alikulka/orgs",
						repos_url: "https://api.github.com/users/alikulka/repos",
						events_url:
							"https://api.github.com/users/alikulka/events{/privacy}",
						received_events_url:
							"https://api.github.com/users/alikulka/received_events",
						type: "User",
						user_view_type: "public",
						site_admin: false,
					},
					html_url: "https://github.com/alikulka/demo-repo",
					description: null,
					fork: false,
					url: "https://api.github.com/repos/alikulka/demo-repo",
					forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
					keys_url:
						"https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
					collaborators_url:
						"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
					teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
					hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
					issue_events_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
					events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
					assignees_url:
						"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
					branches_url:
						"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
					tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
					blobs_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
					git_tags_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
					git_refs_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
					trees_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
					statuses_url:
						"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
					languages_url:
						"https://api.github.com/repos/alikulka/demo-repo/languages",
					stargazers_url:
						"https://api.github.com/repos/alikulka/demo-repo/stargazers",
					contributors_url:
						"https://api.github.com/repos/alikulka/demo-repo/contributors",
					subscribers_url:
						"https://api.github.com/repos/alikulka/demo-repo/subscribers",
					subscription_url:
						"https://api.github.com/repos/alikulka/demo-repo/subscription",
					commits_url:
						"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
					git_commits_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
					comments_url:
						"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
					issue_comment_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
					contents_url:
						"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
					compare_url:
						"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
					merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
					archive_url:
						"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
					downloads_url:
						"https://api.github.com/repos/alikulka/demo-repo/downloads",
					issues_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
					pulls_url:
						"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
					milestones_url:
						"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
					notifications_url:
						"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
					labels_url:
						"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
					releases_url:
						"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
					deployments_url:
						"https://api.github.com/repos/alikulka/demo-repo/deployments",
					created_at: "2025-01-16T22:39:51Z",
					updated_at: "2025-02-10T21:56:57Z",
					pushed_at: "2025-02-10T22:06:19Z",
					git_url: "git://github.com/alikulka/demo-repo.git",
					ssh_url: "git@github.com:alikulka/demo-repo.git",
					clone_url: "https://github.com/alikulka/demo-repo.git",
					svn_url: "https://github.com/alikulka/demo-repo",
					homepage: null,
					size: 0,
					stargazers_count: 0,
					watchers_count: 0,
					language: null,
					has_issues: true,
					has_projects: true,
					has_downloads: true,
					has_wiki: true,
					has_pages: false,
					has_discussions: false,
					forks_count: 0,
					mirror_url: null,
					archived: false,
					disabled: false,
					open_issues_count: 1,
					license: null,
					allow_forking: true,
					is_template: false,
					web_commit_signoff_required: false,
					topics: [],
					visibility: "public",
					forks: 0,
					open_issues: 1,
					watchers: 0,
					default_branch: "main",
					allow_squash_merge: true,
					allow_merge_commit: true,
					allow_rebase_merge: true,
					allow_auto_merge: false,
					delete_branch_on_merge: false,
					allow_update_branch: false,
					use_squash_pr_title_as_default: false,
					squash_merge_commit_message: "COMMIT_MESSAGES",
					squash_merge_commit_title: "COMMIT_OR_PR_TITLE",
					merge_commit_message: "PR_TITLE",
					merge_commit_title: "MERGE_MESSAGE",
				},
			},
			_links: {
				self: {
					href: "https://api.github.com/repos/alikulka/demo-repo/pulls/7",
				},
				html: { href: "https://github.com/alikulka/demo-repo/pull/7" },
				issue: {
					href: "https://api.github.com/repos/alikulka/demo-repo/issues/7",
				},
				comments: {
					href: "https://api.github.com/repos/alikulka/demo-repo/issues/7/comments",
				},
				review_comments: {
					href: "https://api.github.com/repos/alikulka/demo-repo/pulls/7/comments",
				},
				review_comment: {
					href: "https://api.github.com/repos/alikulka/demo-repo/pulls/comments{/number}",
				},
				commits: {
					href: "https://api.github.com/repos/alikulka/demo-repo/pulls/7/commits",
				},
				statuses: {
					href: "https://api.github.com/repos/alikulka/demo-repo/statuses/45a79501064a9c7dfaebe36ca2e2315de07864e3",
				},
			},
			author_association: "OWNER",
			auto_merge: null,
			active_lock_reason: null,
			merged: false,
			mergeable: true,
			rebaseable: false,
			mergeable_state: "clean",
			merged_by: null,
			comments: 0,
			review_comments: 0,
			maintainer_can_modify: false,
			commits: 1,
			additions: 1,
			deletions: 0,
			changed_files: 1,
		},
		repository: {
			id: 917924793,
			node_id: "R_kgDONrZruQ",
			name: "demo-repo",
			full_name: "alikulka/demo-repo",
			private: false,
			owner: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			html_url: "https://github.com/alikulka/demo-repo",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/alikulka/demo-repo",
			forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
			keys_url: "https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
			hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
			issue_events_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
			events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
			assignees_url:
				"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
			tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
			blobs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/alikulka/demo-repo/languages",
			stargazers_url:
				"https://api.github.com/repos/alikulka/demo-repo/stargazers",
			contributors_url:
				"https://api.github.com/repos/alikulka/demo-repo/contributors",
			subscribers_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscribers",
			subscription_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscription",
			commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
			archive_url:
				"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/alikulka/demo-repo/downloads",
			issues_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
			releases_url:
				"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/alikulka/demo-repo/deployments",
			created_at: "2025-01-16T22:39:51Z",
			updated_at: "2025-02-10T21:56:57Z",
			pushed_at: "2025-02-10T22:06:19Z",
			git_url: "git://github.com/alikulka/demo-repo.git",
			ssh_url: "git@github.com:alikulka/demo-repo.git",
			clone_url: "https://github.com/alikulka/demo-repo.git",
			svn_url: "https://github.com/alikulka/demo-repo",
			homepage: null,
			size: 0,
			stargazers_count: 0,
			watchers_count: 0,
			language: null,
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 1,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 1,
			watchers: 0,
			default_branch: "main",
		},
		sender: {
			login: "alikulka",
			id: 191903916,
			node_id: "U_kgDOC3A4rA",
			avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/alikulka",
			html_url: "https://github.com/alikulka",
			followers_url: "https://api.github.com/users/alikulka/followers",
			following_url:
				"https://api.github.com/users/alikulka/following{/other_user}",
			gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
			starred_url:
				"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/alikulka/subscriptions",
			organizations_url: "https://api.github.com/users/alikulka/orgs",
			repos_url: "https://api.github.com/users/alikulka/repos",
			events_url: "https://api.github.com/users/alikulka/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/alikulka/received_events",
			type: "User",
			user_view_type: "public",
			site_admin: false,
		},
	},
};

export const IssueLabeledWebhook = {
	event: "issues",
	payload: {
		action: "labeled",
		issue: {
			url: "https://api.github.com/repos/alikulka/demo-repo/issues/9",
			repository_url: "https://api.github.com/repos/alikulka/demo-repo",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/9/labels{/name}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/9/comments",
			events_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/9/events",
			html_url: "https://github.com/alikulka/demo-repo/issues/9",
			id: 2843908597,
			node_id: "I_kwDONrZruc6pgpn1",
			number: 9,
			title: "this is a labeled issue",
			user: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			labels: [
				{
					id: 8015232689,
					node_id: "LA_kwDONrZruc8AAAAB3b6-sQ",
					url: "https://api.github.com/repos/alikulka/demo-repo/labels/bug",
					name: "bug",
					color: "d73a4a",
					default: true,
					description: "Something isn't working",
				},
			],
			state: "OPEN",
			locked: false,
			assignee: null,
			assignees: [],
			milestone: null,
			comments: 0,
			created_at: "2025-02-10T22:58:12Z",
			updated_at: "2025-02-10T22:58:28Z",
			closed_at: null,
			author_association: "OWNER",
			sub_issues_summary: { total: 0, completed: 0, percent_completed: 0 },
			active_lock_reason: null,
			body: "this is a test issue that is labeled",
			reactions: {
				url: "https://api.github.com/repos/alikulka/demo-repo/issues/9/reactions",
				total_count: 0,
				"+1": 0,
				"-1": 0,
				laugh: 0,
				hooray: 0,
				confused: 0,
				heart: 0,
				rocket: 0,
				eyes: 0,
			},
			timeline_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/9/timeline",
			performed_via_github_app: null,
			state_reason: null,
		},
		label: {
			id: 8015232689,
			node_id: "LA_kwDONrZruc8AAAAB3b6-sQ",
			url: "https://api.github.com/repos/alikulka/demo-repo/labels/bug",
			name: "bug",
			color: "d73a4a",
			default: true,
			description: "Something isn't working",
		},
		repository: {
			id: 917924793,
			node_id: "R_kgDONrZruQ",
			name: "demo-repo",
			full_name: "alikulka/demo-repo",
			private: false,
			owner: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			html_url: "https://github.com/alikulka/demo-repo",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/alikulka/demo-repo",
			forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
			keys_url: "https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
			hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
			issue_events_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
			events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
			assignees_url:
				"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
			tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
			blobs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/alikulka/demo-repo/languages",
			stargazers_url:
				"https://api.github.com/repos/alikulka/demo-repo/stargazers",
			contributors_url:
				"https://api.github.com/repos/alikulka/demo-repo/contributors",
			subscribers_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscribers",
			subscription_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscription",
			commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
			archive_url:
				"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/alikulka/demo-repo/downloads",
			issues_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
			releases_url:
				"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/alikulka/demo-repo/deployments",
			created_at: "2025-01-16T22:39:51Z",
			updated_at: "2025-02-10T22:46:15Z",
			pushed_at: "2025-02-10T22:46:11Z",
			git_url: "git://github.com/alikulka/demo-repo.git",
			ssh_url: "git@github.com:alikulka/demo-repo.git",
			clone_url: "https://github.com/alikulka/demo-repo.git",
			svn_url: "https://github.com/alikulka/demo-repo",
			homepage: null,
			size: 3,
			stargazers_count: 0,
			watchers_count: 0,
			language: null,
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 2,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 2,
			watchers: 0,
			default_branch: "main",
		},
		sender: {
			login: "alikulka",
			id: 191903916,
			node_id: "U_kgDOC3A4rA",
			avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/alikulka",
			html_url: "https://github.com/alikulka",
			followers_url: "https://api.github.com/users/alikulka/followers",
			following_url:
				"https://api.github.com/users/alikulka/following{/other_user}",
			gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
			starred_url:
				"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/alikulka/subscriptions",
			organizations_url: "https://api.github.com/users/alikulka/orgs",
			repos_url: "https://api.github.com/users/alikulka/repos",
			events_url: "https://api.github.com/users/alikulka/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/alikulka/received_events",
			type: "User",
			user_view_type: "public",
			site_admin: false,
		},
	},
};

export const IssueCommentWebhook = {
	event: "issue_comment",
	payload: {
		action: "created",
		issue: {
			url: "https://api.github.com/repos/alikulka/demo-repo/issues/9",
			repository_url: "https://api.github.com/repos/alikulka/demo-repo",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/9/labels{/name}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/9/comments",
			events_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/9/events",
			html_url: "https://github.com/alikulka/demo-repo/issues/9",
			id: 2843908597,
			node_id: "I_kwDONrZruc6pgpn1",
			number: 9,
			title: "this is a labeled issue",
			user: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			labels: [
				{
					id: 8015232689,
					node_id: "LA_kwDONrZruc8AAAAB3b6-sQ",
					url: "https://api.github.com/repos/alikulka/demo-repo/labels/bug",
					name: "bug",
					color: "d73a4a",
					default: true,
					description: "Something isn't working",
				},
			],
			state: "OPEN",
			locked: false,
			assignee: null,
			assignees: [],
			milestone: null,
			comments: 1,
			created_at: "2025-02-10T22:58:12Z",
			updated_at: "2025-02-11T17:27:11Z",
			closed_at: null,
			author_association: "OWNER",
			sub_issues_summary: { total: 0, completed: 0, percent_completed: 0 },
			active_lock_reason: null,
			body: "this is a test issue that is labeled",
			reactions: {
				url: "https://api.github.com/repos/alikulka/demo-repo/issues/9/reactions",
				total_count: 0,
				"+1": 0,
				"-1": 0,
				laugh: 0,
				hooray: 0,
				confused: 0,
				heart: 0,
				rocket: 0,
				eyes: 0,
			},
			timeline_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/9/timeline",
			performed_via_github_app: null,
			state_reason: null,
		},
		comment: {
			url: "https://api.github.com/repos/alikulka/demo-repo/issues/comments/2651535540",
			html_url:
				"https://github.com/alikulka/demo-repo/issues/9#issuecomment-2651535540",
			issue_url: "https://api.github.com/repos/alikulka/demo-repo/issues/9",
			id: 2651535540,
			node_id: "IC_kwDONrZruc6eCzi0",
			user: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			created_at: "2025-02-11T17:27:10Z",
			updated_at: "2025-02-11T17:27:10Z",
			author_association: "OWNER",
			body: "this is a comment on the issue",
			reactions: {
				url: "https://api.github.com/repos/alikulka/demo-repo/issues/comments/2651535540/reactions",
				total_count: 0,
				"+1": 0,
				"-1": 0,
				laugh: 0,
				hooray: 0,
				confused: 0,
				heart: 0,
				rocket: 0,
				eyes: 0,
			},
			performed_via_github_app: null,
		},
		repository: {
			id: 917924793,
			node_id: "R_kgDONrZruQ",
			name: "demo-repo",
			full_name: "alikulka/demo-repo",
			private: false,
			owner: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			html_url: "https://github.com/alikulka/demo-repo",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/alikulka/demo-repo",
			forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
			keys_url: "https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
			hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
			issue_events_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
			events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
			assignees_url:
				"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
			tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
			blobs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/alikulka/demo-repo/languages",
			stargazers_url:
				"https://api.github.com/repos/alikulka/demo-repo/stargazers",
			contributors_url:
				"https://api.github.com/repos/alikulka/demo-repo/contributors",
			subscribers_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscribers",
			subscription_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscription",
			commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
			archive_url:
				"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/alikulka/demo-repo/downloads",
			issues_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
			releases_url:
				"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/alikulka/demo-repo/deployments",
			created_at: "2025-01-16T22:39:51Z",
			updated_at: "2025-02-10T22:46:15Z",
			pushed_at: "2025-02-10T22:46:11Z",
			git_url: "git://github.com/alikulka/demo-repo.git",
			ssh_url: "git@github.com:alikulka/demo-repo.git",
			clone_url: "https://github.com/alikulka/demo-repo.git",
			svn_url: "https://github.com/alikulka/demo-repo",
			homepage: null,
			size: 3,
			stargazers_count: 0,
			watchers_count: 0,
			language: null,
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 2,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 2,
			watchers: 0,
			default_branch: "main",
		},
		sender: {
			login: "alikulka",
			id: 191903916,
			node_id: "U_kgDOC3A4rA",
			avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/alikulka",
			html_url: "https://github.com/alikulka",
			followers_url: "https://api.github.com/users/alikulka/followers",
			following_url:
				"https://api.github.com/users/alikulka/following{/other_user}",
			gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
			starred_url:
				"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/alikulka/subscriptions",
			organizations_url: "https://api.github.com/users/alikulka/orgs",
			repos_url: "https://api.github.com/users/alikulka/repos",
			events_url: "https://api.github.com/users/alikulka/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/alikulka/received_events",
			type: "User",
			user_view_type: "public",
			site_admin: false,
		},
	},
};

export const DiscussionWebhook = {
	event: "discussion",
	payload: {
		action: "created",
		discussion: {
			repository_url: "https://api.github.com/repos/awslabs/aws-github-test",
			category: {
				id: 39523069,
				node_id: "DIC_kwDOImv4N84CWxL9",
				repository_id: 577501239,
				emoji: ":speech_balloon:",
				name: "General",
				description: "Chat about anything and everything here",
				created_at: "2023-05-26T12:35:41.000-07:00",
				updated_at: "2023-05-26T12:35:41.000-07:00",
				slug: "general",
				is_answerable: false,
			},
			answer_html_url: null,
			answer_chosen_at: null,
			answer_chosen_by: null,
			html_url: "https://github.com/awslabs/aws-github-test/discussions/52",
			id: 7947996,
			node_id: "D_kwDOImv4N84AeUbc",
			number: 52,
			title: "test discussion",
			user: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			labels: [],
			state: "OPEN",
			state_reason: null,
			locked: false,
			comments: 0,
			created_at: "2025-02-11T17:45:11Z",
			updated_at: "2025-02-11T17:45:11Z",
			author_association: "COLLABORATOR",
			active_lock_reason: null,
			body: "test discussion body 2",
			reactions: {
				url: "https://api.github.com/repos/awslabs/aws-github-test/discussions/52/reactions",
				total_count: 0,
				"+1": 0,
				"-1": 0,
				laugh: 0,
				hooray: 0,
				confused: 0,
				heart: 0,
				rocket: 0,
				eyes: 0,
			},
			timeline_url:
				"https://api.github.com/repos/awslabs/aws-github-test/discussions/52/timeline",
		},
		repository: {
			id: 577501239,
			node_id: "R_kgDOImv4Nw",
			name: "aws-github-test",
			full_name: "awslabs/aws-github-test",
			private: true,
			owner: {
				login: "awslabs",
				id: 3299148,
				node_id: "MDEyOk9yZ2FuaXphdGlvbjMyOTkxNDg=",
				avatar_url: "https://avatars.githubusercontent.com/u/3299148?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/awslabs",
				html_url: "https://github.com/awslabs",
				followers_url: "https://api.github.com/users/awslabs/followers",
				following_url:
					"https://api.github.com/users/awslabs/following{/other_user}",
				gists_url: "https://api.github.com/users/awslabs/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/awslabs/starred{/owner}{/repo}",
				subscriptions_url: "https://api.github.com/users/awslabs/subscriptions",
				organizations_url: "https://api.github.com/users/awslabs/orgs",
				repos_url: "https://api.github.com/users/awslabs/repos",
				events_url: "https://api.github.com/users/awslabs/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/awslabs/received_events",
				type: "Organization",
				user_view_type: "public",
				site_admin: false,
			},
			html_url: "https://github.com/awslabs/aws-github-test",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/awslabs/aws-github-test",
			forks_url: "https://api.github.com/repos/awslabs/aws-github-test/forks",
			keys_url:
				"https://api.github.com/repos/awslabs/aws-github-test/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/awslabs/aws-github-test/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/awslabs/aws-github-test/teams",
			hooks_url: "https://api.github.com/repos/awslabs/aws-github-test/hooks",
			issue_events_url:
				"https://api.github.com/repos/awslabs/aws-github-test/issues/events{/number}",
			events_url: "https://api.github.com/repos/awslabs/aws-github-test/events",
			assignees_url:
				"https://api.github.com/repos/awslabs/aws-github-test/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/awslabs/aws-github-test/branches{/branch}",
			tags_url: "https://api.github.com/repos/awslabs/aws-github-test/tags",
			blobs_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/awslabs/aws-github-test/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/awslabs/aws-github-test/languages",
			stargazers_url:
				"https://api.github.com/repos/awslabs/aws-github-test/stargazers",
			contributors_url:
				"https://api.github.com/repos/awslabs/aws-github-test/contributors",
			subscribers_url:
				"https://api.github.com/repos/awslabs/aws-github-test/subscribers",
			subscription_url:
				"https://api.github.com/repos/awslabs/aws-github-test/subscription",
			commits_url:
				"https://api.github.com/repos/awslabs/aws-github-test/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/awslabs/aws-github-test/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/awslabs/aws-github-test/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/awslabs/aws-github-test/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/awslabs/aws-github-test/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/awslabs/aws-github-test/merges",
			archive_url:
				"https://api.github.com/repos/awslabs/aws-github-test/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/awslabs/aws-github-test/downloads",
			issues_url:
				"https://api.github.com/repos/awslabs/aws-github-test/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/awslabs/aws-github-test/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/awslabs/aws-github-test/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/awslabs/aws-github-test/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/awslabs/aws-github-test/labels{/name}",
			releases_url:
				"https://api.github.com/repos/awslabs/aws-github-test/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/awslabs/aws-github-test/deployments",
			created_at: "2022-12-12T21:58:50Z",
			updated_at: "2023-08-29T19:40:54Z",
			pushed_at: "2024-12-07T00:06:23Z",
			git_url: "git://github.com/awslabs/aws-github-test.git",
			ssh_url: "git@github.com:awslabs/aws-github-test.git",
			clone_url: "https://github.com/awslabs/aws-github-test.git",
			svn_url: "https://github.com/awslabs/aws-github-test",
			homepage: null,
			size: 201,
			stargazers_count: 1,
			watchers_count: 1,
			language: null,
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: true,
			forks_count: 1,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: {
				key: "apache-2.0",
				name: "Apache License 2.0",
				spdx_id: "Apache-2.0",
				url: "https://api.github.com/licenses/apache-2.0",
				node_id: "MDc6TGljZW5zZTI=",
			},
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "private",
			forks: 1,
			open_issues: 0,
			watchers: 1,
			default_branch: "main",
			custom_properties: {},
		},
		organization: {
			login: "awslabs",
			id: 3299148,
			node_id: "MDEyOk9yZ2FuaXphdGlvbjMyOTkxNDg=",
			url: "https://api.github.com/orgs/awslabs",
			repos_url: "https://api.github.com/orgs/awslabs/repos",
			events_url: "https://api.github.com/orgs/awslabs/events",
			hooks_url: "https://api.github.com/orgs/awslabs/hooks",
			issues_url: "https://api.github.com/orgs/awslabs/issues",
			members_url: "https://api.github.com/orgs/awslabs/members{/member}",
			public_members_url:
				"https://api.github.com/orgs/awslabs/public_members{/member}",
			avatar_url: "https://avatars.githubusercontent.com/u/3299148?v=4",
			description: "AWS Labs",
		},
		enterprise: {
			id: 1290,
			slug: "amazon",
			name: "Amazon",
			node_id: "MDEwOkVudGVycHJpc2UxMjkw",
			avatar_url: "https://avatars.githubusercontent.com/b/1290?v=4",
			description: "",
			website_url: "https://www.amazon.com/",
			html_url: "https://github.com/enterprises/amazon",
			created_at: "2019-11-13T18:05:41Z",
			updated_at: "2024-09-30T21:02:30Z",
		},
		sender: {
			login: "alikulka",
			id: 191903916,
			node_id: "U_kgDOC3A4rA",
			avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/alikulka",
			html_url: "https://github.com/alikulka",
			followers_url: "https://api.github.com/users/alikulka/followers",
			following_url:
				"https://api.github.com/users/alikulka/following{/other_user}",
			gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
			starred_url:
				"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/alikulka/subscriptions",
			organizations_url: "https://api.github.com/users/alikulka/orgs",
			repos_url: "https://api.github.com/users/alikulka/repos",
			events_url: "https://api.github.com/users/alikulka/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/alikulka/received_events",
			type: "User",
			user_view_type: "public",
			site_admin: false,
		},
	},
};

export const DiscussionCommentWebhook = {
	event: "discussion_comment",
	payload: {
		action: "created",
		comment: {
			id: 12151032,
			node_id: "DC_kwDOImv4N84AuWj4",
			html_url:
				"https://github.com/awslabs/aws-github-test/discussions/52#discussioncomment-12151032",
			parent_id: null,
			child_comment_count: 0,
			repository_url: "awslabs/aws-github-test",
			discussion_id: 7947996,
			author_association: "COLLABORATOR",
			user: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			created_at: "2025-02-11T19:49:39Z",
			updated_at: "2025-02-11T19:49:39Z",
			body: "comment on the discussion",
			reactions: {
				url: "https://api.github.com/repos/awslabs/aws-github-test/discussions/comments/12151032/reactions",
				total_count: 0,
				"+1": 0,
				"-1": 0,
				laugh: 0,
				hooray: 0,
				confused: 0,
				heart: 0,
				rocket: 0,
				eyes: 0,
			},
		},
		discussion: {
			repository_url: "https://api.github.com/repos/awslabs/aws-github-test",
			category: {
				id: 39523069,
				node_id: "DIC_kwDOImv4N84CWxL9",
				repository_id: 577501239,
				emoji: ":speech_balloon:",
				name: "General",
				description: "Chat about anything and everything here",
				created_at: "2023-05-26T12:35:41.000-07:00",
				updated_at: "2023-05-26T12:35:41.000-07:00",
				slug: "general",
				is_answerable: false,
			},
			answer_html_url: null,
			answer_chosen_at: null,
			answer_chosen_by: null,
			html_url: "https://github.com/awslabs/aws-github-test/discussions/52",
			id: 7947996,
			node_id: "D_kwDOImv4N84AeUbc",
			number: 52,
			title: "test discussion",
			user: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			labels: [],
			state: "OPEN",
			state_reason: null,
			locked: false,
			comments: 1,
			created_at: "2025-02-11T17:45:11Z",
			updated_at: "2025-02-11T19:49:40Z",
			author_association: "COLLABORATOR",
			active_lock_reason: null,
			body: "test discussion body 2",
			reactions: {
				url: "https://api.github.com/repos/awslabs/aws-github-test/discussions/52/reactions",
				total_count: 0,
				"+1": 0,
				"-1": 0,
				laugh: 0,
				hooray: 0,
				confused: 0,
				heart: 0,
				rocket: 0,
				eyes: 0,
			},
			timeline_url:
				"https://api.github.com/repos/awslabs/aws-github-test/discussions/52/timeline",
		},
		repository: {
			id: 577501239,
			node_id: "R_kgDOImv4Nw",
			name: "aws-github-test",
			full_name: "awslabs/aws-github-test",
			private: true,
			owner: {
				login: "awslabs",
				id: 3299148,
				node_id: "MDEyOk9yZ2FuaXphdGlvbjMyOTkxNDg=",
				avatar_url: "https://avatars.githubusercontent.com/u/3299148?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/awslabs",
				html_url: "https://github.com/awslabs",
				followers_url: "https://api.github.com/users/awslabs/followers",
				following_url:
					"https://api.github.com/users/awslabs/following{/other_user}",
				gists_url: "https://api.github.com/users/awslabs/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/awslabs/starred{/owner}{/repo}",
				subscriptions_url: "https://api.github.com/users/awslabs/subscriptions",
				organizations_url: "https://api.github.com/users/awslabs/orgs",
				repos_url: "https://api.github.com/users/awslabs/repos",
				events_url: "https://api.github.com/users/awslabs/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/awslabs/received_events",
				type: "Organization",
				user_view_type: "public",
				site_admin: false,
			},
			html_url: "https://github.com/awslabs/aws-github-test",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/awslabs/aws-github-test",
			forks_url: "https://api.github.com/repos/awslabs/aws-github-test/forks",
			keys_url:
				"https://api.github.com/repos/awslabs/aws-github-test/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/awslabs/aws-github-test/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/awslabs/aws-github-test/teams",
			hooks_url: "https://api.github.com/repos/awslabs/aws-github-test/hooks",
			issue_events_url:
				"https://api.github.com/repos/awslabs/aws-github-test/issues/events{/number}",
			events_url: "https://api.github.com/repos/awslabs/aws-github-test/events",
			assignees_url:
				"https://api.github.com/repos/awslabs/aws-github-test/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/awslabs/aws-github-test/branches{/branch}",
			tags_url: "https://api.github.com/repos/awslabs/aws-github-test/tags",
			blobs_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/awslabs/aws-github-test/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/awslabs/aws-github-test/languages",
			stargazers_url:
				"https://api.github.com/repos/awslabs/aws-github-test/stargazers",
			contributors_url:
				"https://api.github.com/repos/awslabs/aws-github-test/contributors",
			subscribers_url:
				"https://api.github.com/repos/awslabs/aws-github-test/subscribers",
			subscription_url:
				"https://api.github.com/repos/awslabs/aws-github-test/subscription",
			commits_url:
				"https://api.github.com/repos/awslabs/aws-github-test/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/awslabs/aws-github-test/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/awslabs/aws-github-test/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/awslabs/aws-github-test/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/awslabs/aws-github-test/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/awslabs/aws-github-test/merges",
			archive_url:
				"https://api.github.com/repos/awslabs/aws-github-test/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/awslabs/aws-github-test/downloads",
			issues_url:
				"https://api.github.com/repos/awslabs/aws-github-test/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/awslabs/aws-github-test/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/awslabs/aws-github-test/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/awslabs/aws-github-test/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/awslabs/aws-github-test/labels{/name}",
			releases_url:
				"https://api.github.com/repos/awslabs/aws-github-test/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/awslabs/aws-github-test/deployments",
			created_at: "2022-12-12T21:58:50Z",
			updated_at: "2023-08-29T19:40:54Z",
			pushed_at: "2024-12-07T00:06:23Z",
			git_url: "git://github.com/awslabs/aws-github-test.git",
			ssh_url: "git@github.com:awslabs/aws-github-test.git",
			clone_url: "https://github.com/awslabs/aws-github-test.git",
			svn_url: "https://github.com/awslabs/aws-github-test",
			homepage: null,
			size: 201,
			stargazers_count: 1,
			watchers_count: 1,
			language: null,
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: true,
			forks_count: 1,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: {
				key: "apache-2.0",
				name: "Apache License 2.0",
				spdx_id: "Apache-2.0",
				url: "https://api.github.com/licenses/apache-2.0",
				node_id: "MDc6TGljZW5zZTI=",
			},
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "private",
			forks: 1,
			open_issues: 0,
			watchers: 1,
			default_branch: "main",
			custom_properties: {},
		},
		organization: {
			login: "awslabs",
			id: 3299148,
			node_id: "MDEyOk9yZ2FuaXphdGlvbjMyOTkxNDg=",
			url: "https://api.github.com/orgs/awslabs",
			repos_url: "https://api.github.com/orgs/awslabs/repos",
			events_url: "https://api.github.com/orgs/awslabs/events",
			hooks_url: "https://api.github.com/orgs/awslabs/hooks",
			issues_url: "https://api.github.com/orgs/awslabs/issues",
			members_url: "https://api.github.com/orgs/awslabs/members{/member}",
			public_members_url:
				"https://api.github.com/orgs/awslabs/public_members{/member}",
			avatar_url: "https://avatars.githubusercontent.com/u/3299148?v=4",
			description: "AWS Labs",
		},
		enterprise: {
			id: 1290,
			slug: "amazon",
			name: "Amazon",
			node_id: "MDEwOkVudGVycHJpc2UxMjkw",
			avatar_url: "https://avatars.githubusercontent.com/b/1290?v=4",
			description: "",
			website_url: "https://www.amazon.com/",
			html_url: "https://github.com/enterprises/amazon",
			created_at: "2019-11-13T18:05:41Z",
			updated_at: "2024-09-30T21:02:30Z",
		},
		sender: {
			login: "alikulka",
			id: 191903916,
			node_id: "U_kgDOC3A4rA",
			avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/alikulka",
			html_url: "https://github.com/alikulka",
			followers_url: "https://api.github.com/users/alikulka/followers",
			following_url:
				"https://api.github.com/users/alikulka/following{/other_user}",
			gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
			starred_url:
				"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/alikulka/subscriptions",
			organizations_url: "https://api.github.com/users/alikulka/orgs",
			repos_url: "https://api.github.com/users/alikulka/repos",
			events_url: "https://api.github.com/users/alikulka/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/alikulka/received_events",
			type: "User",
			user_view_type: "public",
			site_admin: false,
		},
	},
};

export const DiscussionAnsweredWebhook = {
	event: "discussion",
	payload: {
		action: "answered",
		discussion: {
			repository_url: "https://api.github.com/repos/awslabs/aws-github-test",
			category: {
				id: 39523070,
				node_id: "DIC_kwDOImv4N84CWxL-",
				repository_id: 577501239,
				emoji: ":pray:",
				name: "Q&A",
				description: "Ask the community for help",
				created_at: "2023-05-26T12:35:41.000-07:00",
				updated_at: "2023-05-26T12:35:41.000-07:00",
				slug: "q-a",
				is_answerable: true,
			},
			answer_html_url:
				"https://github.com/awslabs/aws-github-test/discussions/47#discussioncomment-7647542",
			answer_chosen_at: "2025-02-11T14:09:34.000-08:00",
			answer_chosen_by: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			html_url: "https://github.com/awslabs/aws-github-test/discussions/47",
			id: 5881924,
			node_id: "D_kwDOImv4N84AWcBE",
			number: 47,
			title: "05",
			user: {
				login: "khushail",
				id: 117320115,
				node_id: "U_kgDOBv4psw",
				avatar_url: "https://avatars.githubusercontent.com/u/117320115?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/khushail",
				html_url: "https://github.com/khushail",
				followers_url: "https://api.github.com/users/khushail/followers",
				following_url:
					"https://api.github.com/users/khushail/following{/other_user}",
				gists_url: "https://api.github.com/users/khushail/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/khushail/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/khushail/subscriptions",
				organizations_url: "https://api.github.com/users/khushail/orgs",
				repos_url: "https://api.github.com/users/khushail/repos",
				events_url: "https://api.github.com/users/khushail/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/khushail/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			labels: [],
			state: "OPEN",
			state_reason: "REOPENED",
			locked: false,
			comments: 1,
			created_at: "2023-11-23T01:18:16Z",
			updated_at: "2025-02-11T22:09:34Z",
			author_association: "CONTRIBUTOR",
			active_lock_reason: null,
			body: "05",
			reactions: {
				url: "https://api.github.com/repos/awslabs/aws-github-test/discussions/47/reactions",
				total_count: 0,
				"+1": 0,
				"-1": 0,
				laugh: 0,
				hooray: 0,
				confused: 0,
				heart: 0,
				rocket: 0,
				eyes: 0,
			},
			timeline_url:
				"https://api.github.com/repos/awslabs/aws-github-test/discussions/47/timeline",
		},
		answer: {
			id: 7647542,
			node_id: "DC_kwDOImv4N84AdLE2",
			html_url:
				"https://github.com/awslabs/aws-github-test/discussions/47#discussioncomment-7647542",
			parent_id: null,
			child_comment_count: 0,
			repository_url: "awslabs/aws-github-test",
			discussion_id: 5881924,
			author_association: "NONE",
			user: {
				login: "github-actions[bot]",
				id: 41898282,
				node_id: "MDM6Qm90NDE4OTgyODI=",
				avatar_url: "https://avatars.githubusercontent.com/in/15368?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/github-actions%5Bbot%5D",
				html_url: "https://github.com/apps/github-actions",
				followers_url:
					"https://api.github.com/users/github-actions%5Bbot%5D/followers",
				following_url:
					"https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
				gists_url:
					"https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
				organizations_url:
					"https://api.github.com/users/github-actions%5Bbot%5D/orgs",
				repos_url: "https://api.github.com/users/github-actions%5Bbot%5D/repos",
				events_url:
					"https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/github-actions%5Bbot%5D/received_events",
				type: "Bot",
				user_view_type: "public",
				site_admin: false,
			},
			created_at: "2023-11-23T01:21:06Z",
			updated_at: "2023-11-23T01:21:06Z",
			body: "Hello! Reopening this discussion to make it searchable. ",
			reactions: {
				url: "https://api.github.com/repos/awslabs/aws-github-test/discussions/comments/7647542/reactions",
				total_count: 0,
				"+1": 0,
				"-1": 0,
				laugh: 0,
				hooray: 0,
				confused: 0,
				heart: 0,
				rocket: 0,
				eyes: 0,
			},
		},
		repository: {
			id: 577501239,
			node_id: "R_kgDOImv4Nw",
			name: "aws-github-test",
			full_name: "awslabs/aws-github-test",
			private: true,
			owner: {
				login: "awslabs",
				id: 3299148,
				node_id: "MDEyOk9yZ2FuaXphdGlvbjMyOTkxNDg=",
				avatar_url: "https://avatars.githubusercontent.com/u/3299148?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/awslabs",
				html_url: "https://github.com/awslabs",
				followers_url: "https://api.github.com/users/awslabs/followers",
				following_url:
					"https://api.github.com/users/awslabs/following{/other_user}",
				gists_url: "https://api.github.com/users/awslabs/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/awslabs/starred{/owner}{/repo}",
				subscriptions_url: "https://api.github.com/users/awslabs/subscriptions",
				organizations_url: "https://api.github.com/users/awslabs/orgs",
				repos_url: "https://api.github.com/users/awslabs/repos",
				events_url: "https://api.github.com/users/awslabs/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/awslabs/received_events",
				type: "Organization",
				user_view_type: "public",
				site_admin: false,
			},
			html_url: "https://github.com/awslabs/aws-github-test",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/awslabs/aws-github-test",
			forks_url: "https://api.github.com/repos/awslabs/aws-github-test/forks",
			keys_url:
				"https://api.github.com/repos/awslabs/aws-github-test/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/awslabs/aws-github-test/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/awslabs/aws-github-test/teams",
			hooks_url: "https://api.github.com/repos/awslabs/aws-github-test/hooks",
			issue_events_url:
				"https://api.github.com/repos/awslabs/aws-github-test/issues/events{/number}",
			events_url: "https://api.github.com/repos/awslabs/aws-github-test/events",
			assignees_url:
				"https://api.github.com/repos/awslabs/aws-github-test/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/awslabs/aws-github-test/branches{/branch}",
			tags_url: "https://api.github.com/repos/awslabs/aws-github-test/tags",
			blobs_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/awslabs/aws-github-test/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/awslabs/aws-github-test/languages",
			stargazers_url:
				"https://api.github.com/repos/awslabs/aws-github-test/stargazers",
			contributors_url:
				"https://api.github.com/repos/awslabs/aws-github-test/contributors",
			subscribers_url:
				"https://api.github.com/repos/awslabs/aws-github-test/subscribers",
			subscription_url:
				"https://api.github.com/repos/awslabs/aws-github-test/subscription",
			commits_url:
				"https://api.github.com/repos/awslabs/aws-github-test/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/awslabs/aws-github-test/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/awslabs/aws-github-test/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/awslabs/aws-github-test/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/awslabs/aws-github-test/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/awslabs/aws-github-test/merges",
			archive_url:
				"https://api.github.com/repos/awslabs/aws-github-test/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/awslabs/aws-github-test/downloads",
			issues_url:
				"https://api.github.com/repos/awslabs/aws-github-test/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/awslabs/aws-github-test/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/awslabs/aws-github-test/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/awslabs/aws-github-test/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/awslabs/aws-github-test/labels{/name}",
			releases_url:
				"https://api.github.com/repos/awslabs/aws-github-test/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/awslabs/aws-github-test/deployments",
			created_at: "2022-12-12T21:58:50Z",
			updated_at: "2023-08-29T19:40:54Z",
			pushed_at: "2024-12-07T00:06:23Z",
			git_url: "git://github.com/awslabs/aws-github-test.git",
			ssh_url: "git@github.com:awslabs/aws-github-test.git",
			clone_url: "https://github.com/awslabs/aws-github-test.git",
			svn_url: "https://github.com/awslabs/aws-github-test",
			homepage: null,
			size: 201,
			stargazers_count: 1,
			watchers_count: 1,
			language: null,
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: true,
			forks_count: 1,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: {
				key: "apache-2.0",
				name: "Apache License 2.0",
				spdx_id: "Apache-2.0",
				url: "https://api.github.com/licenses/apache-2.0",
				node_id: "MDc6TGljZW5zZTI=",
			},
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "private",
			forks: 1,
			open_issues: 0,
			watchers: 1,
			default_branch: "main",
			custom_properties: {},
		},
		organization: {
			login: "awslabs",
			id: 3299148,
			node_id: "MDEyOk9yZ2FuaXphdGlvbjMyOTkxNDg=",
			url: "https://api.github.com/orgs/awslabs",
			repos_url: "https://api.github.com/orgs/awslabs/repos",
			events_url: "https://api.github.com/orgs/awslabs/events",
			hooks_url: "https://api.github.com/orgs/awslabs/hooks",
			issues_url: "https://api.github.com/orgs/awslabs/issues",
			members_url: "https://api.github.com/orgs/awslabs/members{/member}",
			public_members_url:
				"https://api.github.com/orgs/awslabs/public_members{/member}",
			avatar_url: "https://avatars.githubusercontent.com/u/3299148?v=4",
			description: "AWS Labs",
		},
		enterprise: {
			id: 1290,
			slug: "amazon",
			name: "Amazon",
			node_id: "MDEwOkVudGVycHJpc2UxMjkw",
			avatar_url: "https://avatars.githubusercontent.com/b/1290?v=4",
			description: "",
			website_url: "https://www.amazon.com/",
			html_url: "https://github.com/enterprises/amazon",
			created_at: "2019-11-13T18:05:41Z",
			updated_at: "2024-09-30T21:02:30Z",
		},
		sender: {
			login: "alikulka",
			id: 191903916,
			node_id: "U_kgDOC3A4rA",
			avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/alikulka",
			html_url: "https://github.com/alikulka",
			followers_url: "https://api.github.com/users/alikulka/followers",
			following_url:
				"https://api.github.com/users/alikulka/following{/other_user}",
			gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
			starred_url:
				"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/alikulka/subscriptions",
			organizations_url: "https://api.github.com/users/alikulka/orgs",
			repos_url: "https://api.github.com/users/alikulka/repos",
			events_url: "https://api.github.com/users/alikulka/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/alikulka/received_events",
			type: "User",
			user_view_type: "public",
			site_admin: false,
		},
	},
};

export const PullRequestLabeledWebhook = {
	event: "pull_request",
	payload: {
		action: "labeled",
		number: 8,
		pull_request: {
			url: "https://api.github.com/repos/alikulka/demo-repo/pulls/8",
			id: 2327393577,
			node_id: "PR_kwDONrZruc6KuTUp",
			html_url: "https://github.com/alikulka/demo-repo/pull/8",
			diff_url: "https://github.com/alikulka/demo-repo/pull/8.diff",
			patch_url: "https://github.com/alikulka/demo-repo/pull/8.patch",
			issue_url: "https://api.github.com/repos/alikulka/demo-repo/issues/8",
			number: 8,
			state: "CLOSED",
			locked: false,
			title: "Create pr-branch-test.txt",
			user: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			body: null,
			created_at: "2025-02-10T22:46:04Z",
			updated_at: "2025-02-11T18:35:15Z",
			closed_at: "2025-02-10T22:46:11Z",
			merged_at: "2025-02-10T22:46:11Z",
			merge_commit_sha: "4c4c99bee5e73e27bee64a90fc3e6475012aebe1",
			assignee: null,
			assignees: [],
			requested_reviewers: [],
			requested_teams: [],
			labels: [
				{
					id: 8015232691,
					node_id: "LA_kwDONrZruc8AAAAB3b6-sw",
					url: "https://api.github.com/repos/alikulka/demo-repo/labels/documentation",
					name: "documentation",
					color: "0075ca",
					default: true,
					description: "Improvements or additions to documentation",
				},
			],
			milestone: null,
			draft: false,
			commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls/8/commits",
			review_comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls/8/comments",
			review_comment_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls/comments{/number}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/8/comments",
			statuses_url:
				"https://api.github.com/repos/alikulka/demo-repo/statuses/45a79501064a9c7dfaebe36ca2e2315de07864e3",
			head: {
				label: "alikulka:pr-test",
				ref: "pr-test",
				sha: "45a79501064a9c7dfaebe36ca2e2315de07864e3",
				user: {
					login: "alikulka",
					id: 191903916,
					node_id: "U_kgDOC3A4rA",
					avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
					gravatar_id: "",
					url: "https://api.github.com/users/alikulka",
					html_url: "https://github.com/alikulka",
					followers_url: "https://api.github.com/users/alikulka/followers",
					following_url:
						"https://api.github.com/users/alikulka/following{/other_user}",
					gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
					starred_url:
						"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
					subscriptions_url:
						"https://api.github.com/users/alikulka/subscriptions",
					organizations_url: "https://api.github.com/users/alikulka/orgs",
					repos_url: "https://api.github.com/users/alikulka/repos",
					events_url: "https://api.github.com/users/alikulka/events{/privacy}",
					received_events_url:
						"https://api.github.com/users/alikulka/received_events",
					type: "User",
					user_view_type: "public",
					site_admin: false,
				},
				repo: {
					id: 917924793,
					node_id: "R_kgDONrZruQ",
					name: "demo-repo",
					full_name: "alikulka/demo-repo",
					private: false,
					owner: {
						login: "alikulka",
						id: 191903916,
						node_id: "U_kgDOC3A4rA",
						avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
						gravatar_id: "",
						url: "https://api.github.com/users/alikulka",
						html_url: "https://github.com/alikulka",
						followers_url: "https://api.github.com/users/alikulka/followers",
						following_url:
							"https://api.github.com/users/alikulka/following{/other_user}",
						gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
						starred_url:
							"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
						subscriptions_url:
							"https://api.github.com/users/alikulka/subscriptions",
						organizations_url: "https://api.github.com/users/alikulka/orgs",
						repos_url: "https://api.github.com/users/alikulka/repos",
						events_url:
							"https://api.github.com/users/alikulka/events{/privacy}",
						received_events_url:
							"https://api.github.com/users/alikulka/received_events",
						type: "User",
						user_view_type: "public",
						site_admin: false,
					},
					html_url: "https://github.com/alikulka/demo-repo",
					description: null,
					fork: false,
					url: "https://api.github.com/repos/alikulka/demo-repo",
					forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
					keys_url:
						"https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
					collaborators_url:
						"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
					teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
					hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
					issue_events_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
					events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
					assignees_url:
						"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
					branches_url:
						"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
					tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
					blobs_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
					git_tags_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
					git_refs_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
					trees_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
					statuses_url:
						"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
					languages_url:
						"https://api.github.com/repos/alikulka/demo-repo/languages",
					stargazers_url:
						"https://api.github.com/repos/alikulka/demo-repo/stargazers",
					contributors_url:
						"https://api.github.com/repos/alikulka/demo-repo/contributors",
					subscribers_url:
						"https://api.github.com/repos/alikulka/demo-repo/subscribers",
					subscription_url:
						"https://api.github.com/repos/alikulka/demo-repo/subscription",
					commits_url:
						"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
					git_commits_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
					comments_url:
						"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
					issue_comment_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
					contents_url:
						"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
					compare_url:
						"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
					merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
					archive_url:
						"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
					downloads_url:
						"https://api.github.com/repos/alikulka/demo-repo/downloads",
					issues_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
					pulls_url:
						"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
					milestones_url:
						"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
					notifications_url:
						"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
					labels_url:
						"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
					releases_url:
						"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
					deployments_url:
						"https://api.github.com/repos/alikulka/demo-repo/deployments",
					created_at: "2025-01-16T22:39:51Z",
					updated_at: "2025-02-10T22:46:15Z",
					pushed_at: "2025-02-10T22:46:11Z",
					git_url: "git://github.com/alikulka/demo-repo.git",
					ssh_url: "git@github.com:alikulka/demo-repo.git",
					clone_url: "https://github.com/alikulka/demo-repo.git",
					svn_url: "https://github.com/alikulka/demo-repo",
					homepage: null,
					size: 3,
					stargazers_count: 0,
					watchers_count: 0,
					language: null,
					has_issues: true,
					has_projects: true,
					has_downloads: true,
					has_wiki: true,
					has_pages: false,
					has_discussions: false,
					forks_count: 0,
					mirror_url: null,
					archived: false,
					disabled: false,
					open_issues_count: 2,
					license: null,
					allow_forking: true,
					is_template: false,
					web_commit_signoff_required: false,
					topics: [],
					visibility: "public",
					forks: 0,
					open_issues: 2,
					watchers: 0,
					default_branch: "main",
					allow_squash_merge: true,
					allow_merge_commit: true,
					allow_rebase_merge: true,
					allow_auto_merge: false,
					delete_branch_on_merge: false,
					allow_update_branch: false,
					use_squash_pr_title_as_default: false,
					squash_merge_commit_message: "COMMIT_MESSAGES",
					squash_merge_commit_title: "COMMIT_OR_PR_TITLE",
					merge_commit_message: "PR_TITLE",
					merge_commit_title: "MERGE_MESSAGE",
				},
			},
			base: {
				label: "alikulka:main",
				ref: "main",
				sha: "36f1f6c2a9094c80101b111135ebaf6aec078d32",
				user: {
					login: "alikulka",
					id: 191903916,
					node_id: "U_kgDOC3A4rA",
					avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
					gravatar_id: "",
					url: "https://api.github.com/users/alikulka",
					html_url: "https://github.com/alikulka",
					followers_url: "https://api.github.com/users/alikulka/followers",
					following_url:
						"https://api.github.com/users/alikulka/following{/other_user}",
					gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
					starred_url:
						"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
					subscriptions_url:
						"https://api.github.com/users/alikulka/subscriptions",
					organizations_url: "https://api.github.com/users/alikulka/orgs",
					repos_url: "https://api.github.com/users/alikulka/repos",
					events_url: "https://api.github.com/users/alikulka/events{/privacy}",
					received_events_url:
						"https://api.github.com/users/alikulka/received_events",
					type: "User",
					user_view_type: "public",
					site_admin: false,
				},
				repo: {
					id: 917924793,
					node_id: "R_kgDONrZruQ",
					name: "demo-repo",
					full_name: "alikulka/demo-repo",
					private: false,
					owner: {
						login: "alikulka",
						id: 191903916,
						node_id: "U_kgDOC3A4rA",
						avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
						gravatar_id: "",
						url: "https://api.github.com/users/alikulka",
						html_url: "https://github.com/alikulka",
						followers_url: "https://api.github.com/users/alikulka/followers",
						following_url:
							"https://api.github.com/users/alikulka/following{/other_user}",
						gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
						starred_url:
							"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
						subscriptions_url:
							"https://api.github.com/users/alikulka/subscriptions",
						organizations_url: "https://api.github.com/users/alikulka/orgs",
						repos_url: "https://api.github.com/users/alikulka/repos",
						events_url:
							"https://api.github.com/users/alikulka/events{/privacy}",
						received_events_url:
							"https://api.github.com/users/alikulka/received_events",
						type: "User",
						user_view_type: "public",
						site_admin: false,
					},
					html_url: "https://github.com/alikulka/demo-repo",
					description: null,
					fork: false,
					url: "https://api.github.com/repos/alikulka/demo-repo",
					forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
					keys_url:
						"https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
					collaborators_url:
						"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
					teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
					hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
					issue_events_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
					events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
					assignees_url:
						"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
					branches_url:
						"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
					tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
					blobs_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
					git_tags_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
					git_refs_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
					trees_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
					statuses_url:
						"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
					languages_url:
						"https://api.github.com/repos/alikulka/demo-repo/languages",
					stargazers_url:
						"https://api.github.com/repos/alikulka/demo-repo/stargazers",
					contributors_url:
						"https://api.github.com/repos/alikulka/demo-repo/contributors",
					subscribers_url:
						"https://api.github.com/repos/alikulka/demo-repo/subscribers",
					subscription_url:
						"https://api.github.com/repos/alikulka/demo-repo/subscription",
					commits_url:
						"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
					git_commits_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
					comments_url:
						"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
					issue_comment_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
					contents_url:
						"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
					compare_url:
						"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
					merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
					archive_url:
						"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
					downloads_url:
						"https://api.github.com/repos/alikulka/demo-repo/downloads",
					issues_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
					pulls_url:
						"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
					milestones_url:
						"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
					notifications_url:
						"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
					labels_url:
						"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
					releases_url:
						"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
					deployments_url:
						"https://api.github.com/repos/alikulka/demo-repo/deployments",
					created_at: "2025-01-16T22:39:51Z",
					updated_at: "2025-02-10T22:46:15Z",
					pushed_at: "2025-02-10T22:46:11Z",
					git_url: "git://github.com/alikulka/demo-repo.git",
					ssh_url: "git@github.com:alikulka/demo-repo.git",
					clone_url: "https://github.com/alikulka/demo-repo.git",
					svn_url: "https://github.com/alikulka/demo-repo",
					homepage: null,
					size: 3,
					stargazers_count: 0,
					watchers_count: 0,
					language: null,
					has_issues: true,
					has_projects: true,
					has_downloads: true,
					has_wiki: true,
					has_pages: false,
					has_discussions: false,
					forks_count: 0,
					mirror_url: null,
					archived: false,
					disabled: false,
					open_issues_count: 2,
					license: null,
					allow_forking: true,
					is_template: false,
					web_commit_signoff_required: false,
					topics: [],
					visibility: "public",
					forks: 0,
					open_issues: 2,
					watchers: 0,
					default_branch: "main",
					allow_squash_merge: true,
					allow_merge_commit: true,
					allow_rebase_merge: true,
					allow_auto_merge: false,
					delete_branch_on_merge: false,
					allow_update_branch: false,
					use_squash_pr_title_as_default: false,
					squash_merge_commit_message: "COMMIT_MESSAGES",
					squash_merge_commit_title: "COMMIT_OR_PR_TITLE",
					merge_commit_message: "PR_TITLE",
					merge_commit_title: "MERGE_MESSAGE",
				},
			},
			_links: {
				self: {
					href: "https://api.github.com/repos/alikulka/demo-repo/pulls/8",
				},
				html: { href: "https://github.com/alikulka/demo-repo/pull/8" },
				issue: {
					href: "https://api.github.com/repos/alikulka/demo-repo/issues/8",
				},
				comments: {
					href: "https://api.github.com/repos/alikulka/demo-repo/issues/8/comments",
				},
				review_comments: {
					href: "https://api.github.com/repos/alikulka/demo-repo/pulls/8/comments",
				},
				review_comment: {
					href: "https://api.github.com/repos/alikulka/demo-repo/pulls/comments{/number}",
				},
				commits: {
					href: "https://api.github.com/repos/alikulka/demo-repo/pulls/8/commits",
				},
				statuses: {
					href: "https://api.github.com/repos/alikulka/demo-repo/statuses/45a79501064a9c7dfaebe36ca2e2315de07864e3",
				},
			},
			author_association: "OWNER",
			auto_merge: null,
			active_lock_reason: null,
			merged: true,
			mergeable: null,
			rebaseable: null,
			mergeable_state: "unknown",
			merged_by: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			comments: 0,
			review_comments: 0,
			maintainer_can_modify: false,
			commits: 1,
			additions: 1,
			deletions: 0,
			changed_files: 1,
		},
		label: {
			id: 8015232691,
			node_id: "LA_kwDONrZruc8AAAAB3b6-sw",
			url: "https://api.github.com/repos/alikulka/demo-repo/labels/documentation",
			name: "documentation",
			color: "0075ca",
			default: true,
			description: "Improvements or additions to documentation",
		},
		repository: {
			id: 917924793,
			node_id: "R_kgDONrZruQ",
			name: "demo-repo",
			full_name: "alikulka/demo-repo",
			private: false,
			owner: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			html_url: "https://github.com/alikulka/demo-repo",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/alikulka/demo-repo",
			forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
			keys_url: "https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
			hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
			issue_events_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
			events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
			assignees_url:
				"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
			tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
			blobs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/alikulka/demo-repo/languages",
			stargazers_url:
				"https://api.github.com/repos/alikulka/demo-repo/stargazers",
			contributors_url:
				"https://api.github.com/repos/alikulka/demo-repo/contributors",
			subscribers_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscribers",
			subscription_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscription",
			commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
			archive_url:
				"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/alikulka/demo-repo/downloads",
			issues_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
			releases_url:
				"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/alikulka/demo-repo/deployments",
			created_at: "2025-01-16T22:39:51Z",
			updated_at: "2025-02-10T22:46:15Z",
			pushed_at: "2025-02-10T22:46:11Z",
			git_url: "git://github.com/alikulka/demo-repo.git",
			ssh_url: "git@github.com:alikulka/demo-repo.git",
			clone_url: "https://github.com/alikulka/demo-repo.git",
			svn_url: "https://github.com/alikulka/demo-repo",
			homepage: null,
			size: 3,
			stargazers_count: 0,
			watchers_count: 0,
			language: null,
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 2,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 2,
			watchers: 0,
			default_branch: "main",
		},
		sender: {
			login: "alikulka",
			id: 191903916,
			node_id: "U_kgDOC3A4rA",
			avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/alikulka",
			html_url: "https://github.com/alikulka",
			followers_url: "https://api.github.com/users/alikulka/followers",
			following_url:
				"https://api.github.com/users/alikulka/following{/other_user}",
			gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
			starred_url:
				"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/alikulka/subscriptions",
			organizations_url: "https://api.github.com/users/alikulka/orgs",
			repos_url: "https://api.github.com/users/alikulka/repos",
			events_url: "https://api.github.com/users/alikulka/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/alikulka/received_events",
			type: "User",
			user_view_type: "public",
			site_admin: false,
		},
	},
};

export const IssueMilestonedWebhook = {
	event: "issues",
	payload: {
		action: "milestoned",
		issue: {
			url: "https://api.github.com/repos/alikulka/demo-repo/issues/10",
			repository_url: "https://api.github.com/repos/alikulka/demo-repo",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/10/labels{/name}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/10/comments",
			events_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/10/events",
			html_url: "https://github.com/alikulka/demo-repo/issues/10",
			id: 2846525103,
			node_id: "I_kwDONrZruc6pqoav",
			number: 10,
			title: "Milestone Test Issue",
			user: {
				login: "lehmanmj",
				id: 192139820,
				node_id: "U_kgDOC3PSLA",
				avatar_url: "https://avatars.githubusercontent.com/u/192139820?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/lehmanmj",
				html_url: "https://github.com/lehmanmj",
				followers_url: "https://api.github.com/users/lehmanmj/followers",
				following_url:
					"https://api.github.com/users/lehmanmj/following{/other_user}",
				gists_url: "https://api.github.com/users/lehmanmj/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/lehmanmj/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/lehmanmj/subscriptions",
				organizations_url: "https://api.github.com/users/lehmanmj/orgs",
				repos_url: "https://api.github.com/users/lehmanmj/repos",
				events_url: "https://api.github.com/users/lehmanmj/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/lehmanmj/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			labels: [],
			state: "OPEN",
			locked: false,
			assignee: null,
			assignees: [],
			milestone: {
				url: "https://api.github.com/repos/alikulka/demo-repo/milestones/1",
				html_url: "https://github.com/alikulka/demo-repo/milestone/1",
				labels_url:
					"https://api.github.com/repos/alikulka/demo-repo/milestones/1/labels",
				id: 12301219,
				node_id: "MI_kwDONrZruc4Au7Oj",
				number: 1,
				title: "Test Milestone",
				description:
					"This is a test milestone. We just want to capture the webhook for it. ",
				creator: {
					login: "lehmanmj",
					id: 192139820,
					node_id: "U_kgDOC3PSLA",
					avatar_url: "https://avatars.githubusercontent.com/u/192139820?v=4",
					gravatar_id: "",
					url: "https://api.github.com/users/lehmanmj",
					html_url: "https://github.com/lehmanmj",
					followers_url: "https://api.github.com/users/lehmanmj/followers",
					following_url:
						"https://api.github.com/users/lehmanmj/following{/other_user}",
					gists_url: "https://api.github.com/users/lehmanmj/gists{/gist_id}",
					starred_url:
						"https://api.github.com/users/lehmanmj/starred{/owner}{/repo}",
					subscriptions_url:
						"https://api.github.com/users/lehmanmj/subscriptions",
					organizations_url: "https://api.github.com/users/lehmanmj/orgs",
					repos_url: "https://api.github.com/users/lehmanmj/repos",
					events_url: "https://api.github.com/users/lehmanmj/events{/privacy}",
					received_events_url:
						"https://api.github.com/users/lehmanmj/received_events",
					type: "User",
					user_view_type: "public",
					site_admin: false,
				},
				open_issues: 1,
				closed_issues: 0,
				state: "OPEN",
				created_at: "2025-02-11T21:16:51Z",
				updated_at: "2025-02-11T21:17:30Z",
				due_on: "2026-03-01T08:00:00Z",
				closed_at: null,
			},
			comments: 0,
			created_at: "2025-02-11T21:14:44Z",
			updated_at: "2025-02-11T21:17:30Z",
			closed_at: null,
			author_association: "COLLABORATOR",
			sub_issues_summary: { total: 0, completed: 0, percent_completed: 0 },
			active_lock_reason: null,
			body: "I'm making a test issue to see if we can catch a milestone webhook",
			reactions: {
				url: "https://api.github.com/repos/alikulka/demo-repo/issues/10/reactions",
				total_count: 0,
				"+1": 0,
				"-1": 0,
				laugh: 0,
				hooray: 0,
				confused: 0,
				heart: 0,
				rocket: 0,
				eyes: 0,
			},
			timeline_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/10/timeline",
			performed_via_github_app: null,
			state_reason: null,
		},
		milestone: {
			url: "https://api.github.com/repos/alikulka/demo-repo/milestones/1",
			html_url: "https://github.com/alikulka/demo-repo/milestone/1",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/milestones/1/labels",
			id: 12301219,
			node_id: "MI_kwDONrZruc4Au7Oj",
			number: 1,
			title: "Test Milestone",
			description:
				"This is a test milestone. We just want to capture the webhook for it. ",
			creator: {
				login: "lehmanmj",
				id: 192139820,
				node_id: "U_kgDOC3PSLA",
				avatar_url: "https://avatars.githubusercontent.com/u/192139820?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/lehmanmj",
				html_url: "https://github.com/lehmanmj",
				followers_url: "https://api.github.com/users/lehmanmj/followers",
				following_url:
					"https://api.github.com/users/lehmanmj/following{/other_user}",
				gists_url: "https://api.github.com/users/lehmanmj/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/lehmanmj/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/lehmanmj/subscriptions",
				organizations_url: "https://api.github.com/users/lehmanmj/orgs",
				repos_url: "https://api.github.com/users/lehmanmj/repos",
				events_url: "https://api.github.com/users/lehmanmj/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/lehmanmj/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			open_issues: 1,
			closed_issues: 0,
			state: "OPEN",
			created_at: "2025-02-11T21:16:51Z",
			updated_at: "2025-02-11T21:17:30Z",
			due_on: "2026-03-01T08:00:00Z",
			closed_at: null,
		},
		repository: {
			id: 917924793,
			node_id: "R_kgDONrZruQ",
			name: "demo-repo",
			full_name: "alikulka/demo-repo",
			private: false,
			owner: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			html_url: "https://github.com/alikulka/demo-repo",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/alikulka/demo-repo",
			forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
			keys_url: "https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
			hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
			issue_events_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
			events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
			assignees_url:
				"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
			tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
			blobs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/alikulka/demo-repo/languages",
			stargazers_url:
				"https://api.github.com/repos/alikulka/demo-repo/stargazers",
			contributors_url:
				"https://api.github.com/repos/alikulka/demo-repo/contributors",
			subscribers_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscribers",
			subscription_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscription",
			commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
			archive_url:
				"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/alikulka/demo-repo/downloads",
			issues_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
			releases_url:
				"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/alikulka/demo-repo/deployments",
			created_at: "2025-01-16T22:39:51Z",
			updated_at: "2025-02-10T22:46:15Z",
			pushed_at: "2025-02-10T22:46:11Z",
			git_url: "git://github.com/alikulka/demo-repo.git",
			ssh_url: "git@github.com:alikulka/demo-repo.git",
			clone_url: "https://github.com/alikulka/demo-repo.git",
			svn_url: "https://github.com/alikulka/demo-repo",
			homepage: null,
			size: 3,
			stargazers_count: 0,
			watchers_count: 0,
			language: null,
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 3,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 3,
			watchers: 0,
			default_branch: "main",
		},
		sender: {
			login: "lehmanmj",
			id: 192139820,
			node_id: "U_kgDOC3PSLA",
			avatar_url: "https://avatars.githubusercontent.com/u/192139820?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/lehmanmj",
			html_url: "https://github.com/lehmanmj",
			followers_url: "https://api.github.com/users/lehmanmj/followers",
			following_url:
				"https://api.github.com/users/lehmanmj/following{/other_user}",
			gists_url: "https://api.github.com/users/lehmanmj/gists{/gist_id}",
			starred_url:
				"https://api.github.com/users/lehmanmj/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/lehmanmj/subscriptions",
			organizations_url: "https://api.github.com/users/lehmanmj/orgs",
			repos_url: "https://api.github.com/users/lehmanmj/repos",
			events_url: "https://api.github.com/users/lehmanmj/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/lehmanmj/received_events",
			type: "User",
			user_view_type: "public",
			site_admin: false,
		},
	},
};

export const IssueAssignedWebhook = {
	event: "issues",
	payload: {
		action: "assigned",
		issue: {
			url: "https://api.github.com/repos/alikulka/demo-repo/issues/10",
			repository_url: "https://api.github.com/repos/alikulka/demo-repo",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/10/labels{/name}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/10/comments",
			events_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/10/events",
			html_url: "https://github.com/alikulka/demo-repo/issues/10",
			id: 2846525103,
			node_id: "I_kwDONrZruc6pqoav",
			number: 10,
			title: "Milestone Test Issue",
			user: {
				login: "lehmanmj",
				id: 192139820,
				node_id: "U_kgDOC3PSLA",
				avatar_url: "https://avatars.githubusercontent.com/u/192139820?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/lehmanmj",
				html_url: "https://github.com/lehmanmj",
				followers_url: "https://api.github.com/users/lehmanmj/followers",
				following_url:
					"https://api.github.com/users/lehmanmj/following{/other_user}",
				gists_url: "https://api.github.com/users/lehmanmj/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/lehmanmj/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/lehmanmj/subscriptions",
				organizations_url: "https://api.github.com/users/lehmanmj/orgs",
				repos_url: "https://api.github.com/users/lehmanmj/repos",
				events_url: "https://api.github.com/users/lehmanmj/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/lehmanmj/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			labels: [],
			state: "OPEN",
			locked: false,
			assignee: {
				login: "lehmanmj",
				id: 192139820,
				node_id: "U_kgDOC3PSLA",
				avatar_url: "https://avatars.githubusercontent.com/u/192139820?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/lehmanmj",
				html_url: "https://github.com/lehmanmj",
				followers_url: "https://api.github.com/users/lehmanmj/followers",
				following_url:
					"https://api.github.com/users/lehmanmj/following{/other_user}",
				gists_url: "https://api.github.com/users/lehmanmj/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/lehmanmj/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/lehmanmj/subscriptions",
				organizations_url: "https://api.github.com/users/lehmanmj/orgs",
				repos_url: "https://api.github.com/users/lehmanmj/repos",
				events_url: "https://api.github.com/users/lehmanmj/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/lehmanmj/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			assignees: [
				{
					login: "lehmanmj",
					id: 192139820,
					node_id: "U_kgDOC3PSLA",
					avatar_url: "https://avatars.githubusercontent.com/u/192139820?v=4",
					gravatar_id: "",
					url: "https://api.github.com/users/lehmanmj",
					html_url: "https://github.com/lehmanmj",
					followers_url: "https://api.github.com/users/lehmanmj/followers",
					following_url:
						"https://api.github.com/users/lehmanmj/following{/other_user}",
					gists_url: "https://api.github.com/users/lehmanmj/gists{/gist_id}",
					starred_url:
						"https://api.github.com/users/lehmanmj/starred{/owner}{/repo}",
					subscriptions_url:
						"https://api.github.com/users/lehmanmj/subscriptions",
					organizations_url: "https://api.github.com/users/lehmanmj/orgs",
					repos_url: "https://api.github.com/users/lehmanmj/repos",
					events_url: "https://api.github.com/users/lehmanmj/events{/privacy}",
					received_events_url:
						"https://api.github.com/users/lehmanmj/received_events",
					type: "User",
					user_view_type: "public",
					site_admin: false,
				},
			],
			milestone: {
				url: "https://api.github.com/repos/alikulka/demo-repo/milestones/1",
				html_url: "https://github.com/alikulka/demo-repo/milestone/1",
				labels_url:
					"https://api.github.com/repos/alikulka/demo-repo/milestones/1/labels",
				id: 12301219,
				node_id: "MI_kwDONrZruc4Au7Oj",
				number: 1,
				title: "Test Milestone",
				description:
					"This is a test milestone. We just want to capture the webhook for it. ",
				creator: {
					login: "lehmanmj",
					id: 192139820,
					node_id: "U_kgDOC3PSLA",
					avatar_url: "https://avatars.githubusercontent.com/u/192139820?v=4",
					gravatar_id: "",
					url: "https://api.github.com/users/lehmanmj",
					html_url: "https://github.com/lehmanmj",
					followers_url: "https://api.github.com/users/lehmanmj/followers",
					following_url:
						"https://api.github.com/users/lehmanmj/following{/other_user}",
					gists_url: "https://api.github.com/users/lehmanmj/gists{/gist_id}",
					starred_url:
						"https://api.github.com/users/lehmanmj/starred{/owner}{/repo}",
					subscriptions_url:
						"https://api.github.com/users/lehmanmj/subscriptions",
					organizations_url: "https://api.github.com/users/lehmanmj/orgs",
					repos_url: "https://api.github.com/users/lehmanmj/repos",
					events_url: "https://api.github.com/users/lehmanmj/events{/privacy}",
					received_events_url:
						"https://api.github.com/users/lehmanmj/received_events",
					type: "User",
					user_view_type: "public",
					site_admin: false,
				},
				open_issues: 1,
				closed_issues: 0,
				state: "OPEN",
				created_at: "2025-02-11T21:16:51Z",
				updated_at: "2025-02-11T21:17:30Z",
				due_on: "2026-03-01T08:00:00Z",
				closed_at: null,
			},
			comments: 0,
			created_at: "2025-02-11T21:14:44Z",
			updated_at: "2025-02-12T19:00:37Z",
			closed_at: null,
			author_association: "COLLABORATOR",
			sub_issues_summary: { total: 0, completed: 0, percent_completed: 0 },
			active_lock_reason: null,
			body: "I'm making a test issue to see if we can catch a milestone webhook",
			reactions: {
				url: "https://api.github.com/repos/alikulka/demo-repo/issues/10/reactions",
				total_count: 0,
				"+1": 0,
				"-1": 0,
				laugh: 0,
				hooray: 0,
				confused: 0,
				heart: 0,
				rocket: 0,
				eyes: 0,
			},
			timeline_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/10/timeline",
			performed_via_github_app: null,
			state_reason: null,
		},
		assignee: {
			login: "lehmanmj",
			id: 192139820,
			node_id: "U_kgDOC3PSLA",
			avatar_url: "https://avatars.githubusercontent.com/u/192139820?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/lehmanmj",
			html_url: "https://github.com/lehmanmj",
			followers_url: "https://api.github.com/users/lehmanmj/followers",
			following_url:
				"https://api.github.com/users/lehmanmj/following{/other_user}",
			gists_url: "https://api.github.com/users/lehmanmj/gists{/gist_id}",
			starred_url:
				"https://api.github.com/users/lehmanmj/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/lehmanmj/subscriptions",
			organizations_url: "https://api.github.com/users/lehmanmj/orgs",
			repos_url: "https://api.github.com/users/lehmanmj/repos",
			events_url: "https://api.github.com/users/lehmanmj/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/lehmanmj/received_events",
			type: "User",
			user_view_type: "public",
			site_admin: false,
		},
		repository: {
			id: 917924793,
			node_id: "R_kgDONrZruQ",
			name: "demo-repo",
			full_name: "alikulka/demo-repo",
			private: false,
			owner: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			html_url: "https://github.com/alikulka/demo-repo",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/alikulka/demo-repo",
			forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
			keys_url: "https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
			hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
			issue_events_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
			events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
			assignees_url:
				"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
			tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
			blobs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/alikulka/demo-repo/languages",
			stargazers_url:
				"https://api.github.com/repos/alikulka/demo-repo/stargazers",
			contributors_url:
				"https://api.github.com/repos/alikulka/demo-repo/contributors",
			subscribers_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscribers",
			subscription_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscription",
			commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
			archive_url:
				"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/alikulka/demo-repo/downloads",
			issues_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
			releases_url:
				"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/alikulka/demo-repo/deployments",
			created_at: "2025-01-16T22:39:51Z",
			updated_at: "2025-02-10T22:46:15Z",
			pushed_at: "2025-02-10T22:46:11Z",
			git_url: "git://github.com/alikulka/demo-repo.git",
			ssh_url: "git@github.com:alikulka/demo-repo.git",
			clone_url: "https://github.com/alikulka/demo-repo.git",
			svn_url: "https://github.com/alikulka/demo-repo",
			homepage: null,
			size: 3,
			stargazers_count: 0,
			watchers_count: 0,
			language: null,
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 3,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 3,
			watchers: 0,
			default_branch: "main",
		},
		sender: {
			login: "lehmanmj",
			id: 192139820,
			node_id: "U_kgDOC3PSLA",
			avatar_url: "https://avatars.githubusercontent.com/u/192139820?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/lehmanmj",
			html_url: "https://github.com/lehmanmj",
			followers_url: "https://api.github.com/users/lehmanmj/followers",
			following_url:
				"https://api.github.com/users/lehmanmj/following{/other_user}",
			gists_url: "https://api.github.com/users/lehmanmj/gists{/gist_id}",
			starred_url:
				"https://api.github.com/users/lehmanmj/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/lehmanmj/subscriptions",
			organizations_url: "https://api.github.com/users/lehmanmj/orgs",
			repos_url: "https://api.github.com/users/lehmanmj/repos",
			events_url: "https://api.github.com/users/lehmanmj/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/lehmanmj/received_events",
			type: "User",
			user_view_type: "public",
			site_admin: false,
		},
	},
};

export const PullRequestAssignedWebhook = {
	event: "pull_request",
	payload: {
		action: "assigned",
		number: 11,
		pull_request: {
			url: "https://api.github.com/repos/alikulka/demo-repo/pulls/11",
			id: 2332091905,
			node_id: "PR_kwDONrZruc6LAOYB",
			html_url: "https://github.com/alikulka/demo-repo/pull/11",
			diff_url: "https://github.com/alikulka/demo-repo/pull/11.diff",
			patch_url: "https://github.com/alikulka/demo-repo/pull/11.patch",
			issue_url: "https://api.github.com/repos/alikulka/demo-repo/issues/11",
			number: 11,
			state: "OPEN",
			locked: false,
			title: "PR Assign Test",
			user: {
				login: "lehmanmj",
				id: 192139820,
				node_id: "U_kgDOC3PSLA",
				avatar_url: "https://avatars.githubusercontent.com/u/192139820?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/lehmanmj",
				html_url: "https://github.com/lehmanmj",
				followers_url: "https://api.github.com/users/lehmanmj/followers",
				following_url:
					"https://api.github.com/users/lehmanmj/following{/other_user}",
				gists_url: "https://api.github.com/users/lehmanmj/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/lehmanmj/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/lehmanmj/subscriptions",
				organizations_url: "https://api.github.com/users/lehmanmj/orgs",
				repos_url: "https://api.github.com/users/lehmanmj/repos",
				events_url: "https://api.github.com/users/lehmanmj/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/lehmanmj/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			body: "I'm trying to catch a webhook for assigning a PR.",
			created_at: "2025-02-12T19:04:30Z",
			updated_at: "2025-02-12T19:04:43Z",
			closed_at: null,
			merged_at: null,
			merge_commit_sha: "4ee8d3fa63c669e0c3da0daedaa2b73da2031b29",
			assignee: {
				login: "lehmanmj",
				id: 192139820,
				node_id: "U_kgDOC3PSLA",
				avatar_url: "https://avatars.githubusercontent.com/u/192139820?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/lehmanmj",
				html_url: "https://github.com/lehmanmj",
				followers_url: "https://api.github.com/users/lehmanmj/followers",
				following_url:
					"https://api.github.com/users/lehmanmj/following{/other_user}",
				gists_url: "https://api.github.com/users/lehmanmj/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/lehmanmj/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/lehmanmj/subscriptions",
				organizations_url: "https://api.github.com/users/lehmanmj/orgs",
				repos_url: "https://api.github.com/users/lehmanmj/repos",
				events_url: "https://api.github.com/users/lehmanmj/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/lehmanmj/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			assignees: [
				{
					login: "lehmanmj",
					id: 192139820,
					node_id: "U_kgDOC3PSLA",
					avatar_url: "https://avatars.githubusercontent.com/u/192139820?v=4",
					gravatar_id: "",
					url: "https://api.github.com/users/lehmanmj",
					html_url: "https://github.com/lehmanmj",
					followers_url: "https://api.github.com/users/lehmanmj/followers",
					following_url:
						"https://api.github.com/users/lehmanmj/following{/other_user}",
					gists_url: "https://api.github.com/users/lehmanmj/gists{/gist_id}",
					starred_url:
						"https://api.github.com/users/lehmanmj/starred{/owner}{/repo}",
					subscriptions_url:
						"https://api.github.com/users/lehmanmj/subscriptions",
					organizations_url: "https://api.github.com/users/lehmanmj/orgs",
					repos_url: "https://api.github.com/users/lehmanmj/repos",
					events_url: "https://api.github.com/users/lehmanmj/events{/privacy}",
					received_events_url:
						"https://api.github.com/users/lehmanmj/received_events",
					type: "User",
					user_view_type: "public",
					site_admin: false,
				},
			],
			requested_reviewers: [],
			requested_teams: [],
			labels: [],
			milestone: null,
			draft: false,
			commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls/11/commits",
			review_comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls/11/comments",
			review_comment_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls/comments{/number}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/11/comments",
			statuses_url:
				"https://api.github.com/repos/alikulka/demo-repo/statuses/45f9d088ac9af9e7a5f14a521d68dfdc032f5888",
			head: {
				label: "alikulka:pr-assignee-test",
				ref: "pr-assignee-test",
				sha: "45f9d088ac9af9e7a5f14a521d68dfdc032f5888",
				user: {
					login: "alikulka",
					id: 191903916,
					node_id: "U_kgDOC3A4rA",
					avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
					gravatar_id: "",
					url: "https://api.github.com/users/alikulka",
					html_url: "https://github.com/alikulka",
					followers_url: "https://api.github.com/users/alikulka/followers",
					following_url:
						"https://api.github.com/users/alikulka/following{/other_user}",
					gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
					starred_url:
						"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
					subscriptions_url:
						"https://api.github.com/users/alikulka/subscriptions",
					organizations_url: "https://api.github.com/users/alikulka/orgs",
					repos_url: "https://api.github.com/users/alikulka/repos",
					events_url: "https://api.github.com/users/alikulka/events{/privacy}",
					received_events_url:
						"https://api.github.com/users/alikulka/received_events",
					type: "User",
					user_view_type: "public",
					site_admin: false,
				},
				repo: {
					id: 917924793,
					node_id: "R_kgDONrZruQ",
					name: "demo-repo",
					full_name: "alikulka/demo-repo",
					private: false,
					owner: {
						login: "alikulka",
						id: 191903916,
						node_id: "U_kgDOC3A4rA",
						avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
						gravatar_id: "",
						url: "https://api.github.com/users/alikulka",
						html_url: "https://github.com/alikulka",
						followers_url: "https://api.github.com/users/alikulka/followers",
						following_url:
							"https://api.github.com/users/alikulka/following{/other_user}",
						gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
						starred_url:
							"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
						subscriptions_url:
							"https://api.github.com/users/alikulka/subscriptions",
						organizations_url: "https://api.github.com/users/alikulka/orgs",
						repos_url: "https://api.github.com/users/alikulka/repos",
						events_url:
							"https://api.github.com/users/alikulka/events{/privacy}",
						received_events_url:
							"https://api.github.com/users/alikulka/received_events",
						type: "User",
						user_view_type: "public",
						site_admin: false,
					},
					html_url: "https://github.com/alikulka/demo-repo",
					description: null,
					fork: false,
					url: "https://api.github.com/repos/alikulka/demo-repo",
					forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
					keys_url:
						"https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
					collaborators_url:
						"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
					teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
					hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
					issue_events_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
					events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
					assignees_url:
						"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
					branches_url:
						"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
					tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
					blobs_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
					git_tags_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
					git_refs_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
					trees_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
					statuses_url:
						"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
					languages_url:
						"https://api.github.com/repos/alikulka/demo-repo/languages",
					stargazers_url:
						"https://api.github.com/repos/alikulka/demo-repo/stargazers",
					contributors_url:
						"https://api.github.com/repos/alikulka/demo-repo/contributors",
					subscribers_url:
						"https://api.github.com/repos/alikulka/demo-repo/subscribers",
					subscription_url:
						"https://api.github.com/repos/alikulka/demo-repo/subscription",
					commits_url:
						"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
					git_commits_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
					comments_url:
						"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
					issue_comment_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
					contents_url:
						"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
					compare_url:
						"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
					merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
					archive_url:
						"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
					downloads_url:
						"https://api.github.com/repos/alikulka/demo-repo/downloads",
					issues_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
					pulls_url:
						"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
					milestones_url:
						"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
					notifications_url:
						"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
					labels_url:
						"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
					releases_url:
						"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
					deployments_url:
						"https://api.github.com/repos/alikulka/demo-repo/deployments",
					created_at: "2025-01-16T22:39:51Z",
					updated_at: "2025-02-10T22:46:15Z",
					pushed_at: "2025-02-12T19:03:57Z",
					git_url: "git://github.com/alikulka/demo-repo.git",
					ssh_url: "git@github.com:alikulka/demo-repo.git",
					clone_url: "https://github.com/alikulka/demo-repo.git",
					svn_url: "https://github.com/alikulka/demo-repo",
					homepage: null,
					size: 3,
					stargazers_count: 0,
					watchers_count: 0,
					language: null,
					has_issues: true,
					has_projects: true,
					has_downloads: true,
					has_wiki: true,
					has_pages: false,
					has_discussions: false,
					forks_count: 0,
					mirror_url: null,
					archived: false,
					disabled: false,
					open_issues_count: 4,
					license: null,
					allow_forking: true,
					is_template: false,
					web_commit_signoff_required: false,
					topics: [],
					visibility: "public",
					forks: 0,
					open_issues: 4,
					watchers: 0,
					default_branch: "main",
					allow_squash_merge: true,
					allow_merge_commit: true,
					allow_rebase_merge: true,
					allow_auto_merge: false,
					delete_branch_on_merge: false,
					allow_update_branch: false,
					use_squash_pr_title_as_default: false,
					squash_merge_commit_message: "COMMIT_MESSAGES",
					squash_merge_commit_title: "COMMIT_OR_PR_TITLE",
					merge_commit_message: "PR_TITLE",
					merge_commit_title: "MERGE_MESSAGE",
				},
			},
			base: {
				label: "alikulka:main",
				ref: "main",
				sha: "4c4c99bee5e73e27bee64a90fc3e6475012aebe1",
				user: {
					login: "alikulka",
					id: 191903916,
					node_id: "U_kgDOC3A4rA",
					avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
					gravatar_id: "",
					url: "https://api.github.com/users/alikulka",
					html_url: "https://github.com/alikulka",
					followers_url: "https://api.github.com/users/alikulka/followers",
					following_url:
						"https://api.github.com/users/alikulka/following{/other_user}",
					gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
					starred_url:
						"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
					subscriptions_url:
						"https://api.github.com/users/alikulka/subscriptions",
					organizations_url: "https://api.github.com/users/alikulka/orgs",
					repos_url: "https://api.github.com/users/alikulka/repos",
					events_url: "https://api.github.com/users/alikulka/events{/privacy}",
					received_events_url:
						"https://api.github.com/users/alikulka/received_events",
					type: "User",
					user_view_type: "public",
					site_admin: false,
				},
				repo: {
					id: 917924793,
					node_id: "R_kgDONrZruQ",
					name: "demo-repo",
					full_name: "alikulka/demo-repo",
					private: false,
					owner: {
						login: "alikulka",
						id: 191903916,
						node_id: "U_kgDOC3A4rA",
						avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
						gravatar_id: "",
						url: "https://api.github.com/users/alikulka",
						html_url: "https://github.com/alikulka",
						followers_url: "https://api.github.com/users/alikulka/followers",
						following_url:
							"https://api.github.com/users/alikulka/following{/other_user}",
						gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
						starred_url:
							"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
						subscriptions_url:
							"https://api.github.com/users/alikulka/subscriptions",
						organizations_url: "https://api.github.com/users/alikulka/orgs",
						repos_url: "https://api.github.com/users/alikulka/repos",
						events_url:
							"https://api.github.com/users/alikulka/events{/privacy}",
						received_events_url:
							"https://api.github.com/users/alikulka/received_events",
						type: "User",
						user_view_type: "public",
						site_admin: false,
					},
					html_url: "https://github.com/alikulka/demo-repo",
					description: null,
					fork: false,
					url: "https://api.github.com/repos/alikulka/demo-repo",
					forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
					keys_url:
						"https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
					collaborators_url:
						"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
					teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
					hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
					issue_events_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
					events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
					assignees_url:
						"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
					branches_url:
						"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
					tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
					blobs_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
					git_tags_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
					git_refs_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
					trees_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
					statuses_url:
						"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
					languages_url:
						"https://api.github.com/repos/alikulka/demo-repo/languages",
					stargazers_url:
						"https://api.github.com/repos/alikulka/demo-repo/stargazers",
					contributors_url:
						"https://api.github.com/repos/alikulka/demo-repo/contributors",
					subscribers_url:
						"https://api.github.com/repos/alikulka/demo-repo/subscribers",
					subscription_url:
						"https://api.github.com/repos/alikulka/demo-repo/subscription",
					commits_url:
						"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
					git_commits_url:
						"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
					comments_url:
						"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
					issue_comment_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
					contents_url:
						"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
					compare_url:
						"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
					merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
					archive_url:
						"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
					downloads_url:
						"https://api.github.com/repos/alikulka/demo-repo/downloads",
					issues_url:
						"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
					pulls_url:
						"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
					milestones_url:
						"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
					notifications_url:
						"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
					labels_url:
						"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
					releases_url:
						"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
					deployments_url:
						"https://api.github.com/repos/alikulka/demo-repo/deployments",
					created_at: "2025-01-16T22:39:51Z",
					updated_at: "2025-02-10T22:46:15Z",
					pushed_at: "2025-02-12T19:03:57Z",
					git_url: "git://github.com/alikulka/demo-repo.git",
					ssh_url: "git@github.com:alikulka/demo-repo.git",
					clone_url: "https://github.com/alikulka/demo-repo.git",
					svn_url: "https://github.com/alikulka/demo-repo",
					homepage: null,
					size: 3,
					stargazers_count: 0,
					watchers_count: 0,
					language: null,
					has_issues: true,
					has_projects: true,
					has_downloads: true,
					has_wiki: true,
					has_pages: false,
					has_discussions: false,
					forks_count: 0,
					mirror_url: null,
					archived: false,
					disabled: false,
					open_issues_count: 4,
					license: null,
					allow_forking: true,
					is_template: false,
					web_commit_signoff_required: false,
					topics: [],
					visibility: "public",
					forks: 0,
					open_issues: 4,
					watchers: 0,
					default_branch: "main",
					allow_squash_merge: true,
					allow_merge_commit: true,
					allow_rebase_merge: true,
					allow_auto_merge: false,
					delete_branch_on_merge: false,
					allow_update_branch: false,
					use_squash_pr_title_as_default: false,
					squash_merge_commit_message: "COMMIT_MESSAGES",
					squash_merge_commit_title: "COMMIT_OR_PR_TITLE",
					merge_commit_message: "PR_TITLE",
					merge_commit_title: "MERGE_MESSAGE",
				},
			},
			_links: {
				self: {
					href: "https://api.github.com/repos/alikulka/demo-repo/pulls/11",
				},
				html: { href: "https://github.com/alikulka/demo-repo/pull/11" },
				issue: {
					href: "https://api.github.com/repos/alikulka/demo-repo/issues/11",
				},
				comments: {
					href: "https://api.github.com/repos/alikulka/demo-repo/issues/11/comments",
				},
				review_comments: {
					href: "https://api.github.com/repos/alikulka/demo-repo/pulls/11/comments",
				},
				review_comment: {
					href: "https://api.github.com/repos/alikulka/demo-repo/pulls/comments{/number}",
				},
				commits: {
					href: "https://api.github.com/repos/alikulka/demo-repo/pulls/11/commits",
				},
				statuses: {
					href: "https://api.github.com/repos/alikulka/demo-repo/statuses/45f9d088ac9af9e7a5f14a521d68dfdc032f5888",
				},
			},
			author_association: "COLLABORATOR",
			auto_merge: null,
			active_lock_reason: null,
			merged: false,
			mergeable: true,
			rebaseable: true,
			mergeable_state: "clean",
			merged_by: null,
			comments: 0,
			review_comments: 0,
			maintainer_can_modify: false,
			commits: 1,
			additions: 3,
			deletions: 1,
			changed_files: 1,
		},
		assignee: {
			login: "lehmanmj",
			id: 192139820,
			node_id: "U_kgDOC3PSLA",
			avatar_url: "https://avatars.githubusercontent.com/u/192139820?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/lehmanmj",
			html_url: "https://github.com/lehmanmj",
			followers_url: "https://api.github.com/users/lehmanmj/followers",
			following_url:
				"https://api.github.com/users/lehmanmj/following{/other_user}",
			gists_url: "https://api.github.com/users/lehmanmj/gists{/gist_id}",
			starred_url:
				"https://api.github.com/users/lehmanmj/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/lehmanmj/subscriptions",
			organizations_url: "https://api.github.com/users/lehmanmj/orgs",
			repos_url: "https://api.github.com/users/lehmanmj/repos",
			events_url: "https://api.github.com/users/lehmanmj/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/lehmanmj/received_events",
			type: "User",
			user_view_type: "public",
			site_admin: false,
		},
		repository: {
			id: 917924793,
			node_id: "R_kgDONrZruQ",
			name: "demo-repo",
			full_name: "alikulka/demo-repo",
			private: false,
			owner: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			html_url: "https://github.com/alikulka/demo-repo",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/alikulka/demo-repo",
			forks_url: "https://api.github.com/repos/alikulka/demo-repo/forks",
			keys_url: "https://api.github.com/repos/alikulka/demo-repo/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/alikulka/demo-repo/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/alikulka/demo-repo/teams",
			hooks_url: "https://api.github.com/repos/alikulka/demo-repo/hooks",
			issue_events_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/events{/number}",
			events_url: "https://api.github.com/repos/alikulka/demo-repo/events",
			assignees_url:
				"https://api.github.com/repos/alikulka/demo-repo/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/alikulka/demo-repo/branches{/branch}",
			tags_url: "https://api.github.com/repos/alikulka/demo-repo/tags",
			blobs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/alikulka/demo-repo/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/alikulka/demo-repo/languages",
			stargazers_url:
				"https://api.github.com/repos/alikulka/demo-repo/stargazers",
			contributors_url:
				"https://api.github.com/repos/alikulka/demo-repo/contributors",
			subscribers_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscribers",
			subscription_url:
				"https://api.github.com/repos/alikulka/demo-repo/subscription",
			commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/alikulka/demo-repo/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/alikulka/demo-repo/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/alikulka/demo-repo/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/alikulka/demo-repo/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/alikulka/demo-repo/merges",
			archive_url:
				"https://api.github.com/repos/alikulka/demo-repo/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/alikulka/demo-repo/downloads",
			issues_url:
				"https://api.github.com/repos/alikulka/demo-repo/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/alikulka/demo-repo/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/alikulka/demo-repo/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/alikulka/demo-repo/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/alikulka/demo-repo/labels{/name}",
			releases_url:
				"https://api.github.com/repos/alikulka/demo-repo/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/alikulka/demo-repo/deployments",
			created_at: "2025-01-16T22:39:51Z",
			updated_at: "2025-02-10T22:46:15Z",
			pushed_at: "2025-02-12T19:03:57Z",
			git_url: "git://github.com/alikulka/demo-repo.git",
			ssh_url: "git@github.com:alikulka/demo-repo.git",
			clone_url: "https://github.com/alikulka/demo-repo.git",
			svn_url: "https://github.com/alikulka/demo-repo",
			homepage: null,
			size: 3,
			stargazers_count: 0,
			watchers_count: 0,
			language: null,
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 4,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 4,
			watchers: 0,
			default_branch: "main",
		},
		sender: {
			login: "lehmanmj",
			id: 192139820,
			node_id: "U_kgDOC3PSLA",
			avatar_url: "https://avatars.githubusercontent.com/u/192139820?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/lehmanmj",
			html_url: "https://github.com/lehmanmj",
			followers_url: "https://api.github.com/users/lehmanmj/followers",
			following_url:
				"https://api.github.com/users/lehmanmj/following{/other_user}",
			gists_url: "https://api.github.com/users/lehmanmj/gists{/gist_id}",
			starred_url:
				"https://api.github.com/users/lehmanmj/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/lehmanmj/subscriptions",
			organizations_url: "https://api.github.com/users/lehmanmj/orgs",
			repos_url: "https://api.github.com/users/lehmanmj/repos",
			events_url: "https://api.github.com/users/lehmanmj/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/lehmanmj/received_events",
			type: "User",
			user_view_type: "public",
			site_admin: false,
		},
	},
};

export const DiscussionLabeledWebhook = {
	event: "discussion",
	payload: {
		action: "labeled",
		discussion: {
			repository_url: "https://api.github.com/repos/awslabs/aws-github-test",
			category: {
				id: 39523069,
				node_id: "DIC_kwDOImv4N84CWxL9",
				repository_id: 577501239,
				emoji: ":speech_balloon:",
				name: "General",
				description: "Chat about anything and everything here",
				created_at: "2023-05-26T12:35:41.000-07:00",
				updated_at: "2023-05-26T12:35:41.000-07:00",
				slug: "general",
				is_answerable: false,
			},
			answer_html_url: null,
			answer_chosen_at: null,
			answer_chosen_by: null,
			html_url: "https://github.com/awslabs/aws-github-test/discussions/52",
			id: 7947996,
			node_id: "D_kwDOImv4N84AeUbc",
			number: 52,
			title: "test discussion",
			user: {
				login: "alikulka",
				id: 191903916,
				node_id: "U_kgDOC3A4rA",
				avatar_url: "https://avatars.githubusercontent.com/u/191903916?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/alikulka",
				html_url: "https://github.com/alikulka",
				followers_url: "https://api.github.com/users/alikulka/followers",
				following_url:
					"https://api.github.com/users/alikulka/following{/other_user}",
				gists_url: "https://api.github.com/users/alikulka/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/alikulka/starred{/owner}{/repo}",
				subscriptions_url:
					"https://api.github.com/users/alikulka/subscriptions",
				organizations_url: "https://api.github.com/users/alikulka/orgs",
				repos_url: "https://api.github.com/users/alikulka/repos",
				events_url: "https://api.github.com/users/alikulka/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/alikulka/received_events",
				type: "User",
				user_view_type: "public",
				site_admin: false,
			},
			labels: [
				{
					id: 4903203950,
					node_id: "LA_kwDOImv4N88AAAABJED0bg",
					url: "https://api.github.com/repos/awslabs/aws-github-test/labels/question",
					name: "question",
					color: "d876e3",
					default: true,
					description: "Further information is requested",
				},
			],
			state: "open",
			state_reason: null,
			locked: false,
			comments: 2,
			created_at: "2025-02-11T17:45:11Z",
			updated_at: "2025-02-11T22:08:15Z",
			author_association: "COLLABORATOR",
			active_lock_reason: null,
			body: "test discussion body 2",
			reactions: {
				url: "https://api.github.com/repos/awslabs/aws-github-test/discussions/52/reactions",
				total_count: 0,
				"+1": 0,
				"-1": 0,
				laugh: 0,
				hooray: 0,
				confused: 0,
				heart: 0,
				rocket: 0,
				eyes: 0,
			},
			timeline_url:
				"https://api.github.com/repos/awslabs/aws-github-test/discussions/52/timeline",
		},
		label: {
			id: 4903203950,
			node_id: "LA_kwDOImv4N88AAAABJED0bg",
			url: "https://api.github.com/repos/awslabs/aws-github-test/labels/question",
			name: "question",
			color: "d876e3",
			default: true,
			description: "Further information is requested",
		},
		repository: {
			id: 577501239,
			node_id: "R_kgDOImv4Nw",
			name: "aws-github-test",
			full_name: "awslabs/aws-github-test",
			private: true,
			owner: {
				login: "awslabs",
				id: 3299148,
				node_id: "MDEyOk9yZ2FuaXphdGlvbjMyOTkxNDg=",
				avatar_url: "https://avatars.githubusercontent.com/u/3299148?v=4",
				gravatar_id: "",
				url: "https://api.github.com/users/awslabs",
				html_url: "https://github.com/awslabs",
				followers_url: "https://api.github.com/users/awslabs/followers",
				following_url:
					"https://api.github.com/users/awslabs/following{/other_user}",
				gists_url: "https://api.github.com/users/awslabs/gists{/gist_id}",
				starred_url:
					"https://api.github.com/users/awslabs/starred{/owner}{/repo}",
				subscriptions_url: "https://api.github.com/users/awslabs/subscriptions",
				organizations_url: "https://api.github.com/users/awslabs/orgs",
				repos_url: "https://api.github.com/users/awslabs/repos",
				events_url: "https://api.github.com/users/awslabs/events{/privacy}",
				received_events_url:
					"https://api.github.com/users/awslabs/received_events",
				type: "Organization",
				user_view_type: "public",
				site_admin: false,
			},
			html_url: "https://github.com/awslabs/aws-github-test",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/awslabs/aws-github-test",
			forks_url: "https://api.github.com/repos/awslabs/aws-github-test/forks",
			keys_url:
				"https://api.github.com/repos/awslabs/aws-github-test/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/awslabs/aws-github-test/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/awslabs/aws-github-test/teams",
			hooks_url: "https://api.github.com/repos/awslabs/aws-github-test/hooks",
			issue_events_url:
				"https://api.github.com/repos/awslabs/aws-github-test/issues/events{/number}",
			events_url: "https://api.github.com/repos/awslabs/aws-github-test/events",
			assignees_url:
				"https://api.github.com/repos/awslabs/aws-github-test/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/awslabs/aws-github-test/branches{/branch}",
			tags_url: "https://api.github.com/repos/awslabs/aws-github-test/tags",
			blobs_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/awslabs/aws-github-test/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/awslabs/aws-github-test/languages",
			stargazers_url:
				"https://api.github.com/repos/awslabs/aws-github-test/stargazers",
			contributors_url:
				"https://api.github.com/repos/awslabs/aws-github-test/contributors",
			subscribers_url:
				"https://api.github.com/repos/awslabs/aws-github-test/subscribers",
			subscription_url:
				"https://api.github.com/repos/awslabs/aws-github-test/subscription",
			commits_url:
				"https://api.github.com/repos/awslabs/aws-github-test/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/awslabs/aws-github-test/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/awslabs/aws-github-test/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/awslabs/aws-github-test/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/awslabs/aws-github-test/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/awslabs/aws-github-test/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/awslabs/aws-github-test/merges",
			archive_url:
				"https://api.github.com/repos/awslabs/aws-github-test/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/awslabs/aws-github-test/downloads",
			issues_url:
				"https://api.github.com/repos/awslabs/aws-github-test/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/awslabs/aws-github-test/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/awslabs/aws-github-test/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/awslabs/aws-github-test/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/awslabs/aws-github-test/labels{/name}",
			releases_url:
				"https://api.github.com/repos/awslabs/aws-github-test/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/awslabs/aws-github-test/deployments",
			created_at: "2022-12-12T21:58:50Z",
			updated_at: "2023-08-29T19:40:54Z",
			pushed_at: "2024-12-07T00:06:23Z",
			git_url: "git://github.com/awslabs/aws-github-test.git",
			ssh_url: "git@github.com:awslabs/aws-github-test.git",
			clone_url: "https://github.com/awslabs/aws-github-test.git",
			svn_url: "https://github.com/awslabs/aws-github-test",
			homepage: null,
			size: 201,
			stargazers_count: 1,
			watchers_count: 1,
			language: null,
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: true,
			forks_count: 1,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: {
				key: "apache-2.0",
				name: "Apache License 2.0",
				spdx_id: "Apache-2.0",
				url: "https://api.github.com/licenses/apache-2.0",
				node_id: "MDc6TGljZW5zZTI=",
			},
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "private",
			forks: 1,
			open_issues: 0,
			watchers: 1,
			default_branch: "main",
			custom_properties: {},
		},
		organization: {
			login: "awslabs",
			id: 3299148,
			node_id: "MDEyOk9yZ2FuaXphdGlvbjMyOTkxNDg=",
			url: "https://api.github.com/orgs/awslabs",
			repos_url: "https://api.github.com/orgs/awslabs/repos",
			events_url: "https://api.github.com/orgs/awslabs/events",
			hooks_url: "https://api.github.com/orgs/awslabs/hooks",
			issues_url: "https://api.github.com/orgs/awslabs/issues",
			members_url: "https://api.github.com/orgs/awslabs/members{/member}",
			public_members_url:
				"https://api.github.com/orgs/awslabs/public_members{/member}",
			avatar_url: "https://avatars.githubusercontent.com/u/3299148?v=4",
			description: "AWS Labs",
		},
		enterprise: {
			id: 1290,
			slug: "amazon",
			name: "Amazon",
			node_id: "MDEwOkVudGVycHJpc2UxMjkw",
			avatar_url: "https://avatars.githubusercontent.com/b/1290?v=4",
			description: "",
			website_url: "https://www.amazon.com/",
			html_url: "https://github.com/enterprises/amazon",
			created_at: "2019-11-13T18:05:41Z",
			updated_at: "2024-09-30T21:02:30Z",
		},
		sender: {
			login: "lehmanmj",
			id: 192139820,
			node_id: "U_kgDOC3PSLA",
			avatar_url: "https://avatars.githubusercontent.com/u/192139820?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/lehmanmj",
			html_url: "https://github.com/lehmanmj",
			followers_url: "https://api.github.com/users/lehmanmj/followers",
			following_url:
				"https://api.github.com/users/lehmanmj/following{/other_user}",
			gists_url: "https://api.github.com/users/lehmanmj/gists{/gist_id}",
			starred_url:
				"https://api.github.com/users/lehmanmj/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/lehmanmj/subscriptions",
			organizations_url: "https://api.github.com/users/lehmanmj/orgs",
			repos_url: "https://api.github.com/users/lehmanmj/repos",
			events_url: "https://api.github.com/users/lehmanmj/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/lehmanmj/received_events",
			type: "User",
			user_view_type: "public",
			site_admin: false,
		},
	},
};
