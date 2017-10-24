import React, { Component } from 'react';
import { Button } from '@progress/kendo-buttons-react-wrapper';
import { TabStrip, Tabs, Tab, Content } from '@progress/kendo-layout-react-wrapper';

import IssuesContainer from '../Issues/IssuesContainer';
import ChartsContainer from '../Charts/ChartsContainer';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>FOOOOOOOOOOOOO</h1>
                <IssuesContainer />
                <TabStrip value="All Issues">
                        <Tabs>
                            <Tab ref={this.selectTab}>All Issues</Tab>
                            <Tab>Assigned to Me</Tab>
                            <Tab>Created by Me</Tab>
                        </Tabs>
                        <Content>
                            <ChartsContainer />
                        </Content>
                        <Content>
                            <ChartsContainer />
                        </Content>
                        <Content>
                            <ChartsContainer />
                        </Content>
                </TabStrip>
            </div>
        );
    }
}

export default Dashboard;
