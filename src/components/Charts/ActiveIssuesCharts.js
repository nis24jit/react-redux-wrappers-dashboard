import React, {Component} from 'react';
import {Chart} from '@progress/kendo-charts-react-wrapper';

class ActiveIssues extends Component {
    constructor(props) {
        super(props);
        this.activeIssuesOptions = {
           chartArea: {
            height: 80
           },
           series: [{
                type: "column",
                gap: 0.5,
                overlay: false,
                stack:true,
                color: "rgb(136, 136, 136)",
                field: "count",
                categoryField: "date",
                aggregate :"count"
            }],
            categoryAxis: [{
                type:"date",
                baseUnit: "days",
                labels:{
                    step: 4,
                    skip: 2,
                    font: '10px sans-serif'
                },
                majorGridLines: {
                    visible: false
                },
                line: {
                    visible: false
                },
            }],
            valueAxis: {
                visible: false,
                majorGridLines: {
                    visible: false
                },
            }
        }

        this.closedIssuesOptions = {
           chartArea: {
            height: 80
           },
           series: [{
                type: "column",
                gap: 0.5,
                overlay: false,
                stack:true,
                color: "#27c46d",
                field: "count",
                categoryField: "date",
                aggregate :"count"
            }],
            categoryAxis: [{
                type:"date",
                baseUnit: "days",
                labels:{
                    step: 4,
                    skip: 2,
                    font: '10px sans-serif'
                },
                majorGridLines: {
                    visible: false
                },
                line: {
                    visible: false
                },
            }],
            valueAxis: {
                visible: false,
                majorGridLines: {
                    visible: false
                },
            }
        }

        this.openIssuesOptions = {
           chartArea: {
            height: 80
           },
           series: [{
                type: "column",
                gap: 0.5,
                overlay: false,
                stack:true,
                color: "#CF3268",
                field: "count",
                categoryField: "date",
                aggregate :"count"
            }],
            categoryAxis: [{
                type:"date",
                baseUnit: "days",
                labels:{
                    step: 4,
                    skip: 2,
                    font: '10px sans-serif'
                },
                majorGridLines: {
                    visible: false
                },
                line: {
                    visible: false
                },
            }],
            valueAxis: {
                visible: false,
                majorGridLines: {
                    visible: false
                },
            }
        }

        this.closeRateOptions = {
            chartArea: {
                margin: -20,
                height: 20
              }, 
              series: [{
                type: "bullet",
                  target: {
                      color: "#fff"
                  },
                  currentField: "current",
                  targetField: "target",
                  color: "#cc3458"
                  
              }], 
              valueAxis: [{
                  plotBands: [{
                      from: 0, 
                      to: 100, 
                      color: '#35C473'
                  }],
                  visible: false,
                  majorGridLines: {
                      visible: false
                  }
              }]
        }

        this.allIssuesOptions = {
            seriesDefaults: {
                type: "column",
                stack: true,
                gap: 0.06,
                overlay: false
            },
            series: [{
                opacity: 0.3,
                border: {
                    color: '#35C473', 
                    opacity: 0.3
                },
                color: "#35C473",
                field: "count",
                categoryField: "date",
                aggregate: "count"
            },{
                opacity: 0.3,
                border: {
                    color: '#CC3458', 
                    opacity: 0.3
                },
                color: "#CC3458",
                field: "count",
                categoryField: "date",
                aggregate: "count"
            }],
            categoryAxis: {
                baseUnit: "days",
                majorTicks: {
                    visible: false
                },
                line: {
                    visible: false
                },
                majorGridLines: {
                    visible: false
                },
                labels: {
                    rotation: "auto",
                    margin: {
                        top: 8
                    }
                }
            },
            valueAxis: {
                line: {
                    visible: false
                },
                labels: {
                    step: 2, 
                    skip: 2, 
                    margin: { 
                        right: 4 
                    },
                    majorGridLines: {
                        step: 2, 
                        skip: 2, 
                        color: '#F0F2F2'
                    }
                }
            }
        }
    }

    render() {
        
        let countActive = ""
        let countClosed = ""
        let countOpen = ""
        let closeRate = ""

        let groupedIssues = "";

        if(this.props.activeIssues != undefined){
            countActive = this.props.activeIssues.length
        }
        if(this.props.closedIssues != undefined){
            countClosed = this.props.closedIssues.length
        }
        if(this.props.openIssues != undefined){
            countOpen = this.props.openIssues.length
        }
        if(this.props.closeRate != undefined){
           closeRate = this.props.closeRate;
        }
        
        if (this.props.groupedIssues != undefined) {
            groupedIssues = this.props.groupedIssues;
        }

        return (
            /* eslint-disable */
            <div className="card">
            <h3 className="card-header">Active Issues</h3>
            <div className="card-block">
                <div className="row">

                    <div className="col-sm-12 col-md-6 col-lg active-issues">
                        <span className="comp-label">
                          <strong>{countActive}</strong>
                            <small>Active issues</small>
                        </span>
                        <Chart dataSource={this.props.activeIssues} {...this.activeIssuesOptions} ></Chart>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg text-success closed-issues">
                        <span className="comp-label">
                            <strong>{countClosed}</strong>
                            <small>Closed issues</small>
                        </span>
                        <Chart dataSource={this.props.closedIssues} {...this.closedIssuesOptions} ></Chart>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg text-danger open-issues">
                        <span className="comp-label">
                            <strong>{countOpen}</strong>
                            <small>Open issues</small>
                        </span>
                        <Chart dataSource={this.props.openIssues} {...this.openIssuesOptions} ></Chart>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg close-rate">
                        <span className="comp-label">
                            <strong>{closeRate?Math.round(closeRate.average*100) + " %":""}</strong>
                            <small>Close rate</small>
                        </span>
                        <p className="m-0 small text-uppercase text-muted">
                            Highest: 
                            {closeRate?Math.round(closeRate.highest.close_rate * 100) + " % ":""}
                            on {closeRate? kendo.toString(new Date(+closeRate.highest.created_at), "MMM dd, yyyy"):""}
                        </p>
                        <p className="m-0 small text-uppercase text-muted">
                            Lowest: 
                            {closeRate?Math.round(closeRate.lowest.close_rate * 100) + " % ":""}
                            on {closeRate? kendo.toString(new Date(+closeRate.lowest.created_at), "MMM dd, yyyy"):""}
                        </p>
                        <Chart dataSource={this.props.closeRateIssues} {...this.closeRateOptions}></Chart>
                    </div>
                </div>

                <h3>All issues</h3>
                <div>
                    <Chart dataSource={{data: this.props.groupedIssues}} {...this.allIssuesOptions} />
                </div>

            </div>
        </div>
        /* eslint-enable */
        )
    }
}

export default ActiveIssues;