import { IssuesProcessor as processor } from '../shared/issues-processor';

var initialState = [
]

export const issues = (state = initialState, action) => {
    let newState = {};
    let data = action.payload;
    //debugger;
    switch (action.type) {
        case 'ISSUES_RECEIVED':
        debugger;
            newState = {
                gridData: data.filter(issue => issue.pull_request ? false : true)
            }
            return newState;
        case 'ISSUES_PROCESSED':            
            let issueTypes = processor.groupLabels(data);

            let typesDistribution = processor.distribution(data);
            debugger;
            let seriesColors = [
                { label: "SEV: Low", value: "#FF9966", active: false },
                { label: "SEV: Medium", value: "#BB6ACB", active: false },
                { label: "SEV: High", value: "#52C3D3", active: false },
                { label: "Enhancement", value: "#22C85D", active: false },
                { label: "Feature", value: "#FF6358", active: false },
                { label: "Others", value: "#2BA7DA", active: false }
            ];
  
            let visibleSeries = [{
                markers: { visible: false },
                color: seriesColors[0].value,
                categoryField: "date",
                field: "value"
            },
            {
                markers: { visible: false },
                color: seriesColors[1].value,
                categoryField: "date",
                field: "value"
            }]

            newState = {
                gridData: data,
                issueTypes,
                typesSeries: visibleSeries,
                typesDistribution: [{
                    value: 10,
                    date: new Date(2017, 2, 1)
                }, {
                    value: 30,
                    date: new Date(2017, 3, 3)
                },  {
                    value: 20,
                    date: new Date(2017, 4, 4)
                },  {
                    value: 40,
                    date: new Date(2017, 5, 5)
                }
    
                ],
                seriesColors
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