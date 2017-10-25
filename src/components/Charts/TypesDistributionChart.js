import React, {Component} from 'react';
import {Chart} from '@progress/kendo-charts-react-wrapper';

class TypesDistribution extends Component {
    constructor(props) {
        super(props);

        this.series = [{
            markers: { visible: false },
            color: "#ccc",
            categoryField: "date",
            field: "value"
        },
        {
            markers: { visible: false },
            color:"#aaa",
            categoryField: "date",
            field: "value"
        }];


        this.data = [{
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

        ];

        this.options = {
            seriesDefaults: {
                type: "line",
                overlay: false
            },
            categoryAxis: {
                majorTicks: {
                    visible: false
                },
                labels: {
                    step: 4,
                    skip: 2
                },
                majorGridLines: {
                    visible: false
                },
                line: {
                    visible: false
                }
            }, valueAxis: {
                line: {
                    visible: false
                },
                labels: {
                    step: 2,
                    skip: 2
                },
                majorGridLines: {
                    step: 2,
                    skip: 2
                },
                color: '#F0F2F2'
            }

        };
    }

    render() {
        return (
            /* eslint-disable */
            <Chart dataSource={new kendo.data.DataSource({data: this.props.types.typesDistribution})} series={this.props.types.typesSeries} {...this.options}  />
            /* eslint-enable */
        )
    }
}

export default TypesDistribution;