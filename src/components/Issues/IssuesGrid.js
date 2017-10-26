import React, { Component } from 'react';
import { Grid, GridColumn } from '@progress/kendo-grid-react-wrapper';

class IssuesGrid extends Component {
    constructor(props) {
        super(props);

        this.columns = [
            <GridColumn field="id" title="ID" 
                template="<a href='#:html_url#'>\\##:number#</a>" 
                width="80px" key={1}/>,
            <GridColumn field="title" title="Title" 
                template="<span class='issue-status issue-#:state#'></span>#:title#" 
                key={2} />,
            <GridColumn field="labels" title="Labels" 
                template="#=labels.map((label, i)=>{return '<span class=\'badge\' style=\'background-color: \\#' + label.color +'\'>' + label.name + '</span>';})#" 
                width="100px" key={3} />,
            <GridColumn field="milestone" title="Milestone" 
                template="#:milestone ? milestone.title : ''#" 
                width="150px" key={4} />,
            <GridColumn field="assignee" title="Assignee" 
                template="<img src='#:assignee ? assignee.avatar_url : undefined#' width='30px' /> #:assignee ? assignee.login : ''#" 
                width="150px" key={5} />,
        ];

        this.options = {
            scrollable: false,
            pageable: {
                pageSize: 10
            }
        };
    }
    
    detailInit = (dataItem) => {
        var data = dataItem.data;

        /* eslint-disable */
        var detailTemplate = `
        <div>
        <div class="row my-4">
            <div class="col-sm-12">
                <span class="badge ${data.state==='open'?'badge-success':'badge-danger'}">${data.state}</span>
                <h3 class="h1">
                    ${data.title}
                    <span class="text-muted">#${data.number}</span>
                </h3>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-sm-2">
                <span class="small d-block text-muted">Created on</span>
                ${kendo.toString(new Date(data.created_at), "MMM dd, yyyy")}
            </div>
            ${data.closed_at ? '<div class="col-sm-2"><span class="small d-block text-muted">Closed on</span>' + kendo.toString(new Date(data.closed_at), "MMM dd, yyyy") + '</div>' : ''}
            <div class="col-sm-2">
                <span class="small d-block text-muted">Milestone</span>
                ${data.milestone ? data.milestone.title : ''}
            </div>
            <div class="col-sm-2">
                <span class="small d-block text-muted">Author</span>
                ${data.user.login}
            </div>
            ${data.assignee ? '<div class="col-sm-2"><span class="small d-block text-muted">Assignee</span><img src="' + data.assignee.avatar_url + '" style="width:30px; height:30px;}" class="img-circle" />&nbsp;' + data.assignee.login + '</div>' : ''}
        </div>
        <div class="row my-4">
            <div class="col-sm-2">
                <h4 class="small text-muted">Labels</h4>
                ${data.labels.map((label, index) => { return '<span class="badge" style=\'background-color: #' + label.color + '\'>' + label.name + '</span>' })}
            </div>
        </div>
    </div>
        `;
        /* eslint-enable */

        dataItem.detailCell[0].innerHTML = detailTemplate;
    }

    render() {
        return(
            /* eslint-disable */
            <Grid dataSource={new kendo.data.DataSource({data: this.props.issues, pageSize: 10})} 
                {...this.options} 
                detailInit={this.detailInit}>
                {this.columns}
            </Grid>
            /* eslint-enable */
        );
    }
    
}

export default IssuesGrid;