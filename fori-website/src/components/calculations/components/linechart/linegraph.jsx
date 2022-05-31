import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import "./linechart.css";


export default class Example extends PureComponent {
  

  render() {
    return (
        <div className="linegraphresponsive" >
                   <div><p x="0" y="100" fill="red" 
   fontSize="1rem">Carbon Dioxide (Billion Tons)</p></div>
      <ResponsiveContainer >
        <AreaChart
        // title="Chart of PU x UV"
        className='areachart'
          data={this.props.data}
          width={2500}
          height={500}
          margin={{
            top: 5,
            right: 15,
            left: 5,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="name"/>
          <YAxis 
             dataKey="Carbon_Emissions_Saved"
             label={{ value: 'carbondioxide in kg', angle: -90, position: 'insideLeft' ,textAnchor: 'middle' ,stroke:"transparent" ,strokeWidth:1 }}   />
          <Tooltip />
          <Area type="line" dataKey="Carbon_Emissions_Saved" stroke="#e12121" strokeWidth={4}  fill="#ff9d8a" dot={{r:4,fill:"#ff9d8a"}} />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    );
  }
}

