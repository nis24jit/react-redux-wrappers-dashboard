export const periodChanged = (period) => {
    return {
        type: 'PERIOD_CHANGED',
        payload: period
    }
};

export const issuesReceived = (issues) => {
    return {
        type: 'ISSUES_RECEIVED',
        payload: issues
    }
}

export const issuesFetched = () => {
    return {
        type: 'ISSUES_FETCHED'
    }
}

export const issuesProcessed = (issues) => {
    return {
        type: 'ISSUES_PROCESSED',
        payload: issues
    }
}

export const userRetrieved = (user) => {
    return {
        type: 'USER_RETRIEVED',
        payload: user
    }
}