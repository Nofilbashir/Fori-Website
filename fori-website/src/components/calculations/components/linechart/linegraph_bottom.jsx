import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,Legend } from 'recharts';
import "./linechart.css";


export default class Example extends PureComponent {
  

  render() {
    return (
        <div className="linegraphresponsive" >
      <ResponsiveContainer >
        <AreaChart
        title="Chart of PU x UV"
        className='areachart'
          data={this.props.data}
      
        >
          
          <XAxis dataKey="name"/>
          <YAxis 
              label={{ value: 'carbondioxide in kg', angle: -90, position: 'insideLeft' ,textAnchor: 'middle' ,stroke:"transparent" ,strokeWidth:1}}
               /> 
          <Tooltip />
          <Legend/>
          <Area type="line" dataKey="Carbon_Emissions_Saved_Yearly" stroke="red" strokeWidth={5}  fill="#e01212" dot={{r:4,fill:"#e21212"}} />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    );
  }
}

