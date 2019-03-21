import React from 'react';
import BubbleChart from "@weknow/react-bubble-chart-d3";


export default class BubbleWrapper extends React.Component {

    render() {
        return (
            <>
                <BubbleChart
                    width={800}
                    height={800}
                    fontFamily="Arial"
                    showLegend={false}
                    data={
                        Object.keys(this.props.data).map(key => {
                                    return {label: key, value: (this.props.data[key])/1000}
                            }
                        )
                    }
                />
            </>
        );
    }
}
