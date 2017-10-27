import React, {Component} from 'react';
import {Chart} from '@progress/kendo-charts-react-wrapper';

class TypesDistribution extends Component {
    constructor(props) {
        super(props);

        //this.series = [{
        //    markers: { visible: false },
        //    color: "#ccc",
        //    categoryField: "date",
        //    field: "value"
        //},
        //{
        //    markers: { visible: false },
        //    color:"#aaa",
        //    categoryField: "date",
        //    field: "value"
        //}];


        //this.data = [{
        //    value: 10,
        //    date: new Date(2017, 2, 1)
        //}, {
        //    value: 30,
        //    date: new Date(2017, 3, 3)
        //},  {
        //    value: 20,
        //    date: new Date(2017, 4, 4)
        //},  {
        //    value: 40,
        //    date: new Date(2017, 5, 5)
        //}

        //];

        this.options = {
            seriesDefaults: {
                type: "line",
                overlay: false
            },
            categoryAxis: {
                majorTicks: {
                    visible: false
                },
                labels: {
                    step: 4,
                    skip: 2
                },
                majorGridLines: {
                    visible: false
                },
                line: {
                    visible: false
                }
            },
            valueAxis: {
                line: {
                    visible: false
                },
                labels: {
                    step: 2,
                    skip: 2
                },
                majorGridLines: {
                    step: 2,
                    skip: 2
                },
                color: '#F0F2F2'
            }
        };

          this.seriesColors = [
                { label: "SEV: Low", value: "#FF9966", active: false },
                { label: "SEV: Medium", value: "#BB6ACB", active: false },
                { label: "SEV: High", value: "#52C3D3", active: false },
                { label: "Enhancement", value: "#22C85D", active: false },
                { label: "Feature", value: "#FF6358", active: false },
                { label: "Others", value: "#2BA7DA", active: false }
            ];

        //<kendo-chart style="height: 300px;" [transitions]="false">
        //        <kendo-chart-series-defaults type="line" [overlay]="false"></kendo-chart-series-defaults>
        //        <kendo-chart-category-axis>
        //            <kendo-chart-category-axis-item
        //                baseUnit="months"
        //                [majorTicks]="{visible: false}"
        //                [labels]="{step: 4, skip: 2}"
        //                [majorGridLines]="{visible: false}"
        //                [line]="{visible: false}"
        //            ></kendo-chart-category-axis-item>
        //        </kendo-chart-category-axis>
        //        <kendo-chart-series>
        //            <kendo-chart-series-item *ngFor="let series of visibleSeries"
        //                [data]="series.data"
        //                [markers]="series.markers"
        //                [color]="series.color"
        //                style="smooth"
        //                aggregate="count"
        //                categoryField="date"
        //            ></kendo-chart-series-item>
        //        </kendo-chart-series>
        //        <kendo-chart-value-axis>
        //            <kendo-chart-value-axis-item [line]="{visible: false}" [labels]="{step: 2, skip: 2}" [majorGridLines]="{step: 2, skip: 2, color: '#F0F2F2'}">
        //            </kendo-chart-value-axis-item>
        //        </kendo-chart-value-axis>
                    //    </kendo-chart>


                    //      <a *ngFor="let button of seriesColors" (click)="addSeries(button, true)"
                    //    [style.color]="button.active ? button.value : initialGrey"
                    //    class="col-xs-4 col-sm-3 col-md comp-label">
                    //    <strong>{{data[button.label].length}}</strong>
                    //    <small>{{button.label}}</small>
                    //</a>
    }

    render() {
        return (
            /* eslint-disable */
            <div className="card">
                <h4 className="card-header">Types Distribution</h4>
                <div className="row card-block small">
                    {
                        // this.seriesColors.map((item, index) => {
                        //     return (
                        //         <a key={index} className="col-xs-4 col-sm-3 col-md comp-label">
                        //             <strong>item.label</strong>
                        //             <small>item.label</small>
                        //         </a>
                        //     );
                        // })
                    }
                </div>
                <div className="card-block">
                     <Chart
                        
                        series={this.props.types.typesSeries}
                        {...this.options}
                    />

                </div>
            </div>

            /* eslint-enable */
        )
    }
}

export default TypesDistribution;