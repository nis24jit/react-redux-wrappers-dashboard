import { IssuesProcessor as processor } from '../shared/issues-processor';

var initialState = [
]

export const issues = (state = initialState, action) => {
    let newState = {};
    
    let data = action.payload;
    let period = action.period ? action.period : 30;

    switch (action.type) {
        case 'ISSUES_RECEIVED':
            data = processor.filterByDays(data, period);
            
            newState = {
                gridData: data.filter(issue => issue.pull_request ? false : true)
            }
            return newState;
        case 'ISSUES_PROCESSED':
            let allIssues = [];
            
            if (data instanceof Array && data.length > 0) {
                allIssues= processor.process(data, period);
            }

            data = processor.filterByDays(data, period);

            let closedIssues = data.filter(issue => issue.state == "closed" ? true : false)
            let datesClosed = [];
            
            for (let i = 0 ; i < closedIssues.length; i++){
                let newDate = new Date(closedIssues[i].closed_at).setHours(0, 0, 0, 0)
                datesClosed.push({date:newDate, value: 1})
            }

            let opendIssues = data.filter(issue => issue.state == "open" ? true : false);
            let datesOpen = [];
            for (let i = 0 ; i < opendIssues.length; i++){
                let newDate = new Date(opendIssues[i].created_at).setHours(0, 0, 0, 0)
                datesOpen.push({date:newDate, value: 1})
            }

            let activeIssues = datesClosed.concat(datesOpen)

            let issueTypes = processor.groupLabels(data);

            let typesDistribution = allIssues.typesDistribution;

            let seriesColors = [
                { label: "SEV: Low", value: "#FF9966", active: false },
                { label: "SEV: Medium", value: "#BB6ACB", active: false },
                { label: "SEV: High", value: "#52C3D3", active: false },
                { label: "Enhancement", value: "#22C85D", active: false },
                { label: "Feature", value: "#FF6358", active: false },
                { label: "Others", value: "#2BA7DA", active: false }
            ];

            let closeRate = allIssues.closeRate;

            let closeRateIssues = [{"target": 70, "current": Math.round(closeRate.average * 100)}];

            let visibleSeries=[];

            for (let item in typesDistribution) {
                visibleSeries.push(
                    {
                        markers: { visible: false },
                        categoryField: "date",
                        name: item,
                        aggregate: "count",
                        style: "smooth",
                        data: typesDistribution[item]
                    }
                );
            }

            newState = {
                gridData: data,
                closedIssues: allIssues.groupedIssues.closed,
                closeRateIssues,
                closeRate,
                openIssues : allIssues.groupedIssues.open,
                activeIssues: allIssues.active,
                issueTypes,
                typesSeries: visibleSeries,
                seriesColors: seriesColors,
                groupedIssues: allIssues.active
            };

            return newState;
        default:
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