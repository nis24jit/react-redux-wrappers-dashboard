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
                field: "value",
                categoryField: "date",
                aggregate :"count"
            }],
            categoryAxis: [{
                type:"date",
                baseUnit: "weeks",
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
                field: "value",
                categoryField: "date",
                aggregate :"count"
            }],
            categoryAxis: [{
                type:"date",
                baseUnit: "weeks",
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
                field: "value",
                categoryField: "date",
                aggregate :"count"
            }],
            categoryAxis: [{
                type:"date",
                baseUnit: "weeks",
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
        
        let countActive = ""
        let countClosed = ""
        let countOpen = ""
        if(this.props.activeIssues != undefined){
            countActive = this.props.activeIssues.length
        }
        if(this.props.closedIssues != undefined){
            countClosed = this.props.closedIssues.length
        }
        if(this.props.openIssues != undefined){
            countOpen = this.props.openIssues.length
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
                        <Chart dataSource={new kendo.data.DataSource({data: this.props.activeIssues})} {...this.activeIssuesOptions} ></Chart>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg text-success closed-issues">
                        <span className="comp-label">
                            <strong>{countClosed}</strong>
                            <small>Closed issues</small>
                        </span>
                        <Chart dataSource={new kendo.data.DataSource({data: this.props.closedIssues})} {...this.closedIssuesOptions} ></Chart>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg text-danger open-issues">
                        <span className="comp-label">
                            <strong>{countOpen}</strong>
                            <small>Open issues</small>
                        </span>
                        <Chart dataSource={new kendo.data.DataSource({data: this.props.openIssues})} {...this.openIssuesOptions} ></Chart>
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