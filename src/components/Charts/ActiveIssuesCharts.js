import React, {Component} from 'react';
import {Charts} from '@progress/kendo-charts-react-wrapper';

class ActiveIssues extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>chart 1</div>
                <div>chart 2</div>
                <div>chart 3</div>
            </div>
        )
    }
}

export default ActiveIssues;