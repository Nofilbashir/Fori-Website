import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer,Tooltip,Legend } from 'recharts';

// const COLORS = ['', '', '', '',''];


export default class Example extends PureComponent {

  render() {
    return (
        <div className="piechartresponsive" style={this.props.styless}>
        <ResponsiveContainer>
      <PieChart onMouseEnter={this.onPieEnter}>
        <Pie
          data={this.props.data}
          innerRadius="50%"
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"

          // onMouseEnter
        >
          {this.props.data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          
        </Pie>
        <Tooltip/>
        {this.props.legend?<Legend iconSize={'0.5rem'} iconType={'circle'}/>:null}
      </PieChart>
      </ResponsiveContainer>
      </div>
    );
  }
}

