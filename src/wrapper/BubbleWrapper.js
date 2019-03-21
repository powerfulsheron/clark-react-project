import React from 'react';
import BubbleChart from "@weknow/react-bubble-chart-d3";


export default class BubbleWrapper extends React.Component {

    render() {
        const firstData =
            Object.keys(this.props.data).map(key => {
                return {label: key, value: (this.props.data[key])/1000, color: `rgb(61, 194, 164)`}
            }
        );
        const data = firstData.sort((a,b) => (a.value > b.value) ? -1 : ((b.value > a.value) ? 1 : 0));
        console.log(data);
        const finalData = data.slice(0, this.props.limit);
        return (
            <>
                <BubbleChart
                    width={window.innerWidth}
                    height={window.innerHeight}
                    fontFamily="Arial"
                    showLegend={false}
                    data={finalData}
                />
            </>
        );
    }
}
