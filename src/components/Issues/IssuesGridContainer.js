import React, { Component } from 'react';
import IssuesGrid from './IssuesGrid.js';

import { connect } from 'react-redux';
import { issuesFetched, issuesReceived } from './../../actions';

const baseUrl = 'https://api.github.com/repos/telerik/kendo-ui-core/issues';

class IssuesGridContainer extends Component {
    componentDidMount() {
        console.log("grid mounted");
        let headers = {
            // Generate your own token through
            // https://github.com/settings/tokens

            'Authorization': "token 4cc78d10870448008aa1f1a0ef55daa5bc10579d"
        };

        let url = baseUrl + '?state=all&page=2&per_page=100';

        //this.props.dispatch(issuesFetched());

        return fetch(url, { method: 'GET', accept: 'application/json', headers: headers })
            .then(response => response.json())
            .then(json => this.props.dispatch(issuesReceived(json)));
    }

    render() {
        return(
            <div className="issues">
                <IssuesGrid issues={this.props.issues.gridData}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}

IssuesGridContainer = connect(mapStateToProps)(IssuesGridContainer);
export default IssuesGridContainer;
