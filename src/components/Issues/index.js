import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ButtonGroup, ButtonGroupItem as Button } from '@progress/kendo-buttons-react-wrapper';

import IssuesContainer from './IssuesContainer';
import IssuesGridContainer from './IssuesGridContainer';


import IssuesGrid from './IssuesGrid';

import { connect } from 'react-redux';
import { issuesReceived } from './../../actions';

const baseUrl = 'https://api.github.com/repos/telerik/kendo-ui-core/issues';


class IssuesIndex extends Component {
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
            .then(json => this.props.dispatch(issuesReceived(json, period)));
    }

    componentWillReceiveProps(newProps) {

        if (newProps.period !== this.props.period) {
            this.requestData(newProps.period.period);
        }
    }

    render() {
        return (
            <div>
                <IssuesContainer />
                <IssuesGrid issues={this.props.issues.gridData}/>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues,
        period: state.period
    }
}

IssuesIndex = connect(mapStateToProps)(IssuesIndex);
export default IssuesIndex;
