import React from 'react';
import PieChart from 'react-minimal-pie-chart';

const PieChartComponent = (props) => {
    return(
    <PieChart
        data={props.chartData}
        label
        labelStyle={{
            fontSize: '5px',
            fontFamily: 'sans-serif'
        }}
        radius={42}
        labelPosition={112}
        lengthAngle={-360}
        animate
        lineWidth={15}
        paddingAngle={5}
      />
      );
}

export default PieChartComponent;