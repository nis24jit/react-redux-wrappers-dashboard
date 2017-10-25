import React, { Component } from 'react';
import { Button } from '@progress/kendo-buttons-react-wrapper';
import { TabStrip, Tabs, Tab, Content } from '@progress/kendo-layout-react-wrapper';

import IssuesContainer from '../Issues/IssuesContainer';
import ChartsContainer from '../Charts/ChartsContainer';

import { connect } from 'react-redux';
import { issuesFetched, issuesProcessed } from './../../actions';

const baseUrl = 'https://api.github.com/repos/telerik/kendo-ui-core/issues';

class Dashboard extends Component {
    componentDidMount() {
        console.log("chart mounted");
        let headers = {
            // Generate your own token through
            // https://github.com/settings/tokens

            'Authorization': "token 4cc78d10870448008aa1f1a0ef55daa5bc10579d"
        };

        let url = baseUrl + '?state=all&page=2&per_page=100';

    //     this.props.dispatch(issuesFetched());

        return fetch(url, { method: 'GET', accept: 'application/json', headers: headers })
            .then(response => response.json())
            .then(json => this.props.dispatch(issuesProcessed(json)));
     }

    render() {
        return (
            <div className="dashboard">
                <h1>FOOOOOOOOOOOOO</h1>
                <IssuesContainer />
                <TabStrip value="All Issues">
                        <Tabs>
                            <Tab ref={this.selectTab}>All Issues</Tab>
                            <Tab>Assigned to Me</Tab>
                            <Tab>Created by Me</Tab>
                        </Tabs>
                        <Content>
                            <ChartsContainer issues={this.props.issues} />
                        </Content>
                        <Content>
                            <ChartsContainer issues={this.props.issues} />
                        </Content>
                        <Content>
                            <ChartsContainer issues={this.props.issues} />
                        </Content>
                </TabStrip>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}

Dashboard = connect(mapStateToProps)(Dashboard);
export default Dashboard;
