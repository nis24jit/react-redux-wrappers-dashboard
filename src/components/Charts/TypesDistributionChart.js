import React, {Component} from 'react';
import * as $ from 'jquery'
import {Chart} from '@progress/kendo-charts-react-wrapper';

class TypesDistribution extends Component {
    constructor(props) {
        super(props);

        this.options = {
            seriesDefaults: {
                type: "line",
                overlay: false,
                labels: {
                    visible: false
                }
            },
            categoryAxis: {
                baseUnit: "weeks",
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
            },
            valueAxis: {
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

          this.seriesColors = [
                { label: "SEV: Low", value: "#FF9966", active: false },
                { label: "SEV: Medium", value: "#BB6ACB", active: false },
                { label: "SEV: High", value: "#52C3D3", active: false },
                { label: "Enhancement", value: "#22C85D", active: false },
                { label: "Feature", value: "#FF6358", active: false },
                { label: "Others", value: "#2BA7DA", active: false }
            ];
      
            this.typesSeries = [];
            this.chartTypeClick = this.chartTypeClick.bind(this)
    }

    chartTypeClick (event, item){
        let chartElement;
        $('.k-chart').each(function(e){
            chartElement = this;
        })
        $(event.target).parent().css('color', 'grey')
        let chart = $(chartElement).data('kendoChart')
        let series = chart.findSeriesByName(item.name);
        if($(event.target).parent().hasClass('comp-label')){
            if(series._options.visible === true){
                series.toggleVisibility(false);
                $(event.target).parent().css('color', 'grey')
                $(event.target).children().css('color', 'grey')
            }
            else{
                series.toggleVisibility(true);
                $(event.target).parent().css('color', item.color)
                $(event.target).children().css('color', item.color)          
            }
        }
    }

    render() {
        if(this.props.types.typesSeries !== undefined){
            this.typesSeries = this.props.types.typesSeries;
        }

        return (
            <div className="card">
                <h4 className="card-header">Types Distribution</h4>
                <div className="row card-block small">
                    {
                        this.typesSeries.map((item, index) => {
                           return (
                               <a key={index} className="col-xs-4 col-sm-3 col-md comp-label" style={{color:item.color}} onClick={ (event) => { this.chartTypeClick(event, item); } }>
                                  <strong>{item.data.length}</strong>
                                  <small>{item.name}</small>
                                </a>
                             );
                         })
                    }
                </div>
                <div className="card-block">
                     <Chart
                        series={this.props.types.typesSeries}
                        {...this.options}
                    />

                </div>
            </div>
        )
    }
}

export default TypesDistribution;