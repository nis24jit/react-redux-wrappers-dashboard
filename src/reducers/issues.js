import { IssuesProcessor as processor } from '../shared/issues-processor';

var initialState = [
]

export const issues = (state = initialState, action) => {
    let newState = {};
    let data = action.payload;

    switch (action.type) {
        case 'ISSUES_RECEIVED':
            newState = {
                gridData: data.filter(issue => issue.pull_request ? false : true)
            }
            return newState;
        case 'ISSUES_PROCESSED':
            let closedIssues = data.filter(issue => issue.state == "closed" ? true : false)
            let datesClosed = [];
            for (let i = 0 ; i < closedIssues.length; i++){
                let newDate = new Date(closedIssues[i].closed_at).setHours(0, 0, 0, 0)
                datesClosed.push({date:newDate, value: 1})
            }

            let opendIssues = data.filter(issue => issue.state == "open" ? true : false)
            let datesOpen = [];
            for (let i = 0 ; i < opendIssues.length; i++){
                let newDate = new Date(opendIssues[i].created_at).setHours(0, 0, 0, 0)
                datesOpen.push({date:newDate, value: 1})
            }


            let activeIssues = datesClosed.concat(datesOpen)


            let issueTypes = processor.groupLabels(data);

            let typesDistribution = processor.distribution(data);

            let seriesColors = [
                { label: "SEV: Low", value: "#FF9966", active: false },
                { label: "SEV: Medium", value: "#BB6ACB", active: false },
                { label: "SEV: High", value: "#52C3D3", active: false },
                { label: "Enhancement", value: "#22C85D", active: false },
                { label: "Feature", value: "#FF6358", active: false },
                { label: "Others", value: "#2BA7DA", active: false }
            ];

            const newSeries = {
                color: seriesColors[0].value,
                markers: { visible: false },
                data: { label: "SEV: Low", value: '#FF9966', active: false }
            };

            // let visibleSeries = [{
            //     markers: { visible: false },
            //     color: seriesColors[0].value,
            //     categoryField: "date",
            //     field: "value1"
            // },
            // {
            //     markers: { visible: false },
            //     color: seriesColors[1].value,
            //     categoryField: "date",
            //     field: "value2"
            // }]

            let visibleSeries=[];

            for (let item in typesDistribution) {
                visibleSeries.push(
                    {
                        markers: { visible: false },
                        categoryField: "date",
                        name: item,
                        data: typesDistribution[item]
                    }
                );
            }


            // visibleSeries.push(
            //     {
            //         markers: { visible: false },
            //         categoryField: "date",
            //         name: "Enhancement",
            //         data: typesDistribution["Enhancement"]
            //     }
            // );

            // visibleSeries.push(
            //     {
            //         markers: { visible: false },
            //         categoryField: "date",
            //         name: "Feature",
            //         data: typesDistribution["Feature"]
            //     }
            // );
            // visibleSeries.push(
            //     {
            //         markers: { visible: false },
            //         categoryField: "date",
            //         name: "Others",
            //         data: typesDistribution["Others"]
            //     }
            // );

            debugger;
            newState = {
                gridData: data,
                closedIssues : datesClosed,
                openIssues : datesOpen,
                activeIssues: activeIssues,
                issueTypes,
                typesSeries: visibleSeries,
                seriesColors: seriesColors
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