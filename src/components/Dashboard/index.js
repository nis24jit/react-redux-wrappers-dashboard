import React, { Component } from 'react';
import { Button } from '@progress/kendo-buttons-react-wrapper';
import { TabStrip, Tabs, Tab, Content } from '@progress/kendo-layout-react-wrapper';

import IssuesContainer from '../Issues/IssuesContainer';
import ChartsContainer from '../Charts/ChartsContainer';

import { connect } from 'react-redux';
import { issuesProcessed } from './../../actions';

const baseUrl = 'https://api.github.com/repos/telerik/kendo-ui-core/issues';

class Dashboard extends Component {
    componentDidMount() {
        this.requestData();
    }

    requestData(period) {
        let headers = {
            // Generate your own token through
            // https://github.com/settings/tokens

            'Authorization': "token 4cc78d10870448008aa1f1a0ef55daa5bc10579d"
        };

        let url = baseUrl + '?state=all&page=1&per_page=100';

        fetch(url, { method: 'GET', accept: 'application/json', headers: headers })
            .then(response => response.json())
            .then(json => this.props.dispatch(issuesProcessed(json, period)));
     }

    componentWillReceiveProps(newProps) {
        if (newProps.period.period !== this.props.period.period) {
            this.requestData(newProps.period.period);           
        }
    }

    render() {
        return (
            <div className="dashboard">
                <IssuesContainer />
                <ChartsContainer issues={this.props.issues} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues,
        period: state.period
    }
}

Dashboard = connect(mapStateToProps)(Dashboard);
export default Dashboard;
