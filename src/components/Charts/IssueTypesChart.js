import React, {Component} from 'react';
import {Chart} from '@progress/kendo-charts-react-wrapper';

class IssueTypes extends Component {
    constructor(props) {
        super(props);
 
        this.options = {

            series: [{
                type: "bar",
                holeSize: "100",
                field: 'value',
                categoryField: 'type'
            }],
            legend: {
                position: "bottom",
                labels: {
                    font: '0.65em Roboto, Arial, sans-serif'
                }
            }
        };
    }

    render() {
        return (
            /* eslint-disable */
            <Chart dataSource={new kendo.data.DataSource({data: this.props.issues})} {...this.options} />
            /* eslint-enable */
        )
    }
}

export default IssueTypes;