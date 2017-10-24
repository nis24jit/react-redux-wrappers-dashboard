var initialState = [
]

export const issues = (state = initialState, action) => {
    if (action.type === 'ISSUES_RECEIVED') {
        let issues = action.payload;
        let newState = issues.filter(issue => issue.pull_request ? false : true);
        return newState;
    } else if (action.type === 'ISSUES_PROCESSED') {
        let data = action.payload;

        let labels = aggregate(flatten(data.map(item => item.labels)), 'name');
        let low = (labels['SEV: Low'] / data.length);
        let medium = labels['SEV: Medium'] / data.length;
        let high = labels['SEV: High'] / data.length;
        let enhancement = labels['Enhancement'] / data.length;
        let feature = labels['Feature'] / data.length;
        let other = 1 - low - medium - high - enhancement - feature;

        let result = [
            { type: 'SEV: LOW', value: parseFloat(low.toFixed(2)) },
            { type: 'SEV: MEDIUM', value: parseFloat(medium.toFixed(2)) },
            { type: 'SEV: HIGH', value: parseFloat(high.toFixed(2)) },
            { type: 'ENHANCEMENT', value: parseFloat(enhancement.toFixed(2)) },
            { type: 'FEATURE', value: parseFloat(feature.toFixed(2)) },
            { type: 'OTHER', value: parseFloat(other.toFixed(2)) }
          ];

        let newState = result;
        return newState;
    } else {
        return state;
    }
};

const flatten = (data) => {
    return data.reduce((agg, curr) => agg.concat(curr));
}

const aggregate = (data, field) => {
    return data.reduce((agg, curr) => {
        agg[curr[field]] = (agg[curr[field]] || 0) + 1;
        return agg;
    }, {});
}