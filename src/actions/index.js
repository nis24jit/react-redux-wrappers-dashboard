export const periodChanged = (period) => {
    return {
        type: 'PERIOD_CHANGED',
        payload: period
    }
};

export const issuesReceived = (issues, period) => {
    return {
        type: 'ISSUES_RECEIVED',
        payload: issues,
        period
    }
}

export const issuesFetched = () => {
    return {
        type: 'ISSUES_FETCHED'
    }
}

export const issuesProcessed = (issues, period) => {
    return {
        type: 'ISSUES_PROCESSED',
        payload: issues,
        period
    }
}