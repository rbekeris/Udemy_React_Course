import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    //1st we need to extract values from objects
    //We do that by mapping a datapoint.value ('extractor') function to each object in the array
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //Now we have an array of values, which we then can convert to standalone arguments by using the 'spread' Operator (...)
    const totalMaximum = Math.max(...dataPointValues);

    return<div className='chart'>
        {props.dataPoints.map(dataPoint => 
        <ChartBar
        key={dataPoint.label} 
        value ={dataPoint.value} 
        maxValue={totalMaximum} 
        label={dataPoint.label} /> )}
    </div>
};

export default Chart; 