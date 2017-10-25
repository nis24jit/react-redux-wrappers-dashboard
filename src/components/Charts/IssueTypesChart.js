import React, {Component} from 'react';
import {Chart} from '@progress/kendo-charts-react-wrapper';

class IssueTypes extends Component {


    constructor(props) {
        super(props);

        this.options = {
            theme: "material",
            series: [{
                type: "donut",
                holeSize: 100,
                field: 'value',
                categoryField: 'type',
                overlay: false
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
            <div className="issue-types">
                <h4 className="card-header">Issue Types</h4>
                <div className="card-block">
                    <Chart dataSource={new kendo.data.DataSource({ data: this.props.issues })} {...this.options} />

                     <div className="comp-label chart-label">
                        <strong>30</strong>
                        <small>label</small>
                    </div>
                </div>
            </div>
        /* eslint-enable */
        )
    }
}

export default IssueTypes;