import React from 'react';
import PieChart from 'react-minimal-pie-chart';

const PieChartComponent = (props) => { 
    return(
    <PieChart
        data={props.chartData}
        label={(props)=>{
            return (
                props.data[props.dataIndex].title + " " + 
                 (props.data[props.dataIndex].value.toFixed(2) + "%")
                ); 
        }}
        labelStyle={{
            fontSize: '3px',
            fontFamily: 'inherit'
        }}
        radius={42}
        labelPosition={78}
        lengthAngle={-360}
        animate
        lineWidth={8}
        paddingAngle={0}
      />
      );
}

export default PieChartComponent;