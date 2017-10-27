import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ButtonGroup, ButtonGroupItem as Button } from '@progress/kendo-buttons-react-wrapper';

class Issues extends Component {
    changePeriod = (e) => {
       let indexToPeriod = {
           0: 7,
           1: 14,
           2: 30
       }
       this.props.onPeriodChange(indexToPeriod[e.index])
    }

    render() {
        return (
            <div className="issues" id="issues">
                <div className="row mb-4">
                    <div className="col-sm">
                        <h2>
                            <span className="small text-uppercase text-muted d-block">Issues</span>
                            {/* {{range.from | date}} - {{range.to | date}} */}
                        </h2>
                    </div>
                    <div className="col-sm text-sm-right">
                        <ButtonGroup select={this.changePeriod}>
                            <Button>1 Month</Button>
                            <Button>2 Weeks</Button>
                            <Button>1 Week</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    };
}

export default Issues;
