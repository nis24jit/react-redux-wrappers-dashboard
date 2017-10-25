import React, {Component} from 'react';
import {Chart} from '@progress/kendo-charts-react-wrapper';

class ActiveIssues extends Component {
    constructor(props) {
        super(props);

        this.activeIssuesOptions = {
            height: "80px",
            series: {
                type: "column",
                stack: true,
                gap: 0.5,
                overlay: false,
                color: "#888",
                field: "count",
                categoryField: "date",
                aggregate: "count"
            },
            categoryAxis: [{
                baseUnit: "baseUnit",
                majorTicks: {
                    visible: false
                },
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

        }

        this.openIssuesOptions = {

        }

        this.closeRateOptions = {

        }

        this.allIssuesOptions = {

        }

          //<div className="card">
          //  <h3 className="card-header">Active Issues</h3>
          //  <div className="card-block">

          //          <div className="row">

          //              <div className="col-sm-12 col-md-6 col-lg active-issues">
          //                  <span className="comp-label">

          //                      <small>Active issues</small>
          //                  </span>
          //                  <Chart {...this.activeIssuesOptions} />
          //              </div>



          //          <h3>All issues</h3>
          //          <div>chart</div>

          //      </div>
          //  </div>
          //  </div>
    }

    render() {
        return (

            <div className="card">
            <h3 className="card-header">Active Issues</h3>
            <div className="card-block">
                <div className="row">

                    <div className="col-sm-12 col-md-6 col-lg active-issues">
                        <span className="comp-label">
                            <strong>[Active CLOSE]</strong>
                            <small>Active issues</small>
                        </span>
                        <div>chart</div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg text-success closed-issues">
                        <span className="comp-label">
                            <strong>[CLOSED ISSUES]</strong>
                            <small>Closed issues</small>
                        </span>
                        <div>chart</div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg text-danger open-issues">
                        <span className="comp-label">
                            <strong>[OPEN ISSUES]</strong>
                            <small>Open issues</small>
                        </span>
                        <div>chart</div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg close-rate">
                        <span className="comp-label">
                            <strong>[ISSUES CLOSED RATE]</strong>
                            <small>Close rate</small>
                        </span>
                        <p className="m-0 small text-uppercase text-muted">
                            Highest:
                            [RATE]
                            on [DATE]
                        </p>
                        <p className="m-0 small text-uppercase text-muted">
                            Lowest:
                            [LOWEST]
                            on [DATE]
                        </p>
                        <div>chart</div>
                    </div>
                </div>

                <h3>All issues</h3>
                <div>chart</div>

            </div>
        </div>
        )
    }
}

export default ActiveIssues;