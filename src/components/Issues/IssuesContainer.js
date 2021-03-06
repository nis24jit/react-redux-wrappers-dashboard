import React, { Component } from 'react';

import Issues from './Issues';
import IssuesGridContainer from './IssuesGridContainer';

import { connect } from 'react-redux';
import { periodChanged } from './../../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onPeriodChange: period => {
            dispatch(periodChanged(period));
        }
    }
}

const mapStateToProps = (state) => {
    return state.period;
}

const IssuesContainer = connect(mapStateToProps, mapDispatchToProps)(Issues);
export default IssuesContainer;
