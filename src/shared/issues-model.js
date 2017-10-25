"use strict";

export class IssuesModel {
    constructor(
        active = [],
        open = 0,
        closed = 0,
        groupedIssues = {
            open: [],
            closed: []
        },
        issueTypes = [],
        typesDistribution = {
            Enhancement: [],
            Others: [],
            'SEV: Low': [],
            'SEV: Medium': [],
            'SEV: High': [],
            Feature: []
        },
        closeRate = {
            lowest: {
                close_rate: 0,
                created_at: new Date().toISOString()
            },
            highest: {
                close_rate: 0,
                created_at: new Date().toISOString()
            },
            average: 0
        }) { }
}

export class Label {
    name;
    color;
}

export class User {
    id;
    name;
    avatarUrl;
    avatarUrlThumb;
}
export class Milestone {
    title;
}
export class Issue {
    id;
    title;
    body;
    author;
    assignees;
    milestone;
    state;
    date;
    dateClosed;
    count;
    created_at;
    labels;
    assignee;
}