import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer ,Legend} from 'recharts';
import "./linechart.css";


export default class Line extends PureComponent {
  

  render() {
    return (
        <div className="linegraphresponsive" >
                   {/* <div><p x="0" y="100"
   fontSize="1rem" style={{color:"green"}} >Carbon Dioxide (Kilograms)</p></div> */}
      <ResponsiveContainer >
        <AreaChart
        title="Chart of PU x UV"
        className='areachart'
          data={this.props.data}
      
        >
          
          <XAxis dataKey="name"/>
          <YAxis 
             dataKey="Carbon_Emissions_Saved_Monthly" 
             label={{ value: 'carbondioxide in kg', angle: -90, position: 'insideLeft' ,textAnchor: 'middle' ,stroke:"transparent" ,strokeWidth:1 }} />
          <Tooltip />
          <Legend />
          <Area type="line" dataKey="Carbon_Emissions_Saved_Monthly" stroke="seagreen" strokeWidth={5}  fill="green" dot={{r:4,fill:"brown"}} />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    );
  }
}

