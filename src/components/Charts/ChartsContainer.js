import React, { Component } from 'react';
import ActiveIssues from './ActiveIssuesCharts';
import IssueTypes from './IssueTypesChart';
import TypesDistribution from './TypesDistributionChart';

class ChartsContainer extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <ActiveIssues issues={this.props.issues} />
                </div>
                <div className="col-md-4">
                    {<IssueTypes issues={this.props.issues.issueTypes} />}
                </div>
                <div className="col-md-8">
                    <TypesDistribution types={this.props.issues} />
                </div>
            </div>
        );
    }
}

export default ChartsContainer;
