import React, { Component } from 'react';
import ActiveIssues from './ActiveIssuesCharts';
import IssueTypes from './IssueTypesChart';
import TypesDistribution from './TypesDistributionChart';

import { connect } from 'react-redux';
import { issuesFetched, issuesReceived, issuesProcessed } from './../../actions';

const baseUrl = 'https://api.github.com/repos/telerik/kendo-ui-core/issues';

class ChartsContainer extends Component {
    componentDidMount() {
        let headers = {
            // Generate your own token through
            // https://github.com/settings/tokens

            'Authorization': "token 4cc78d10870448008aa1f1a0ef55daa5bc10579d"
        };

        let url = baseUrl + '?state=all&page=2&per_page=100';

        this.props.dispatch(issuesFetched());

        return fetch(url, { method: 'GET', accept: 'application/json', headers: headers })
            .then(response => response.json())
            .then(json => this.props.dispatch(issuesProcessed(json)));
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <ActiveIssues issues={this.props.issues} />
                </div>
                <div className="col-md-4">
                    {<IssueTypes issues={this.props.issues} />}
                </div>
                <div className="col-md-8">
                   { this.props.issues.length > 0 ? <TypesDistribution issues={this.props.issues} /> : ''}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}

ChartsContainer = connect(mapStateToProps)(ChartsContainer);
export default ChartsContainer;
