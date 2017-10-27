import React, {Component} from 'react';
import {Chart} from '@progress/kendo-charts-react-wrapper';

class IssueTypes extends Component {
    constructor(props) {
        super(props);

        this.onHover = this.onHover.bind(this);

        this.options = {
            theme: 'material',
            series: [{
                type: 'donut',
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
            },
            seriesHover: this.onHover
        };
    }

    componentWillReceiveProps(nextProps) {
        var data = nextProps.issues;

        data.forEach(series =>  {
            if (series.type === 'SEV: LOW') {
                this.setDonutLegend({
                    value: series.value,
                    category: series.type,
                    point: {
                        options: {
                            color: this.hoverColor
                        }
                    }
                });
            }
        });
    }

    render() {
        return (
            <div className="card issue-types">
                <h4 className="card-header">Issue Types</h4>
                <div className="card-block">
                    <Chart dataSource={this.props.issues} {...this.options}></Chart>

                    <div className="comp-label chart-label" style={{ color: this.hoverColor }}>
                        <strong>{this.state?this.state.donutPercent:this.donutPercent}</strong>
                        <small>{this.state?this.state.donutLabel:this.donutLabel}</small>
                    </div>
                </div>
            </div>
        );
    }

    onHover(event) {

        this.setDonutLegend(event);
    };

    setDonutLegend(series) {
        this.hoverColor = series.point.options.color;
        this.donutPercent = Math.round(series.value * 100 || 0) + '%';
        this.donutLabel = series.category;
        
        this.setState({
            hoverColor: series.point.options.color,
            donutPercent: Math.round(series.value * 100 || 0) + '%',
            donutLabel: series.category,
        });
    }
}

export default IssueTypes;