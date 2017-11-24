import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ButtonGroup, ButtonGroupItem as Button } from '@progress/kendo-buttons-react-wrapper';

class Issues extends Component {
    changePeriod = (e) => {
       let indexToPeriod = {
           0: 30,
           1: 14,
           2: 7
       }
       this.props.onPeriodChange(indexToPeriod[e.index])
    }

    render() {
        let today = new Date();
        let rangeStart = new Date();
        
        rangeStart.setDate(today.getDate()-this.props.period);
        
        return (
            /* eslint-disable */
            <div className="issues" id="issues">
                <div className="row mb-4">
                    <div className="col-sm">
                        <h2>
                            <span className="small text-uppercase text-muted d-block">Statistics</span>
                            {kendo.toString(rangeStart, "MMM dd, yyyy") + " - " + kendo.toString(today, "MMM dd, yyyy")}
                        </h2>
                    </div>
                    <div className="col-sm text-sm-right">
                        <ButtonGroup select={this.changePeriod} index={0}>
                            <Button>1 Month</Button>
                            <Button>2 Weeks</Button>
                            <Button>1 Week</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
            /* eslint-enable */
        );
    };
}

export default Issues;
