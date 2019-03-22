import React from 'react';
import BubbleChart from "@weknow/react-bubble-chart-d3";


export default class BubbleWrapper extends React.Component {

    render() {
        const firstData =
            this.props.data.map(obj => {
                switch(this.props.setting) {
                    default :
                        console.log('wesh');
                        return {label: obj.ngram, value: (obj.articleScore)/1000, color: `rgb(61, 194, 164)`};
                    case true:
                        console.log('oui');
                        return {label: obj.ngram, value: (obj.socialScore)/1000, color: `rgb(61, 194, 164)`};
                }
            }
        );
        const data = firstData.sort((a,b) => (a.value > b.value) ? -1 : ((b.value > a.value) ? 1 : 0));

        const finalData = data.slice(0, this.props.limit);
        return (
            <>
                <BubbleChart
                    graph= {{
                        zoom: this.props.zoom,
                    }}
                    width={window.innerWidth=800}
                    height={window.innerHeight=800}
                    fontFamily="Lato"
                    showLegend={false}
                    labelFont={{
                        family: 'Lato',
                        size: 16,
                        color: '#fff',
                        weight: 'bold',
                    }}
                    data={finalData}
                />
            </>
        );
    }
}
