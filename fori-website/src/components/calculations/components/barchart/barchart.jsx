import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default class Example extends PureComponent {
  
  render() {
    const data = [
      {
        name: 'year 1',
        Trees_Saved: this.props.data*365,
    
      },
      {
        name: 'year 2',
        Trees_Saved: this.props.data*2*365,
      },
      {
        name: 'year 3',
        Trees_Saved: this.props.data*3*365,
      },
      {
        name: 'year 4',
        Trees_Saved: this.props.data*4*365,
      },
      {
        name: 'year 5',
    
        Trees_Saved: this.props.data*5*365,
    
      },
      {
        name: 'year 6',
        Trees_Saved: this.props.data*6*365,
      },
      {
        name: 'year 7',
        Trees_Saved: this.props.data*7*365,
      },
    ];
    return (
        <div className="linegraphresponsive">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}

          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis
           label={{ value: 'Numer of trees saved', angle: -90, position: 'insideLeft' ,textAnchor: 'middle' ,stroke:"transparent" ,strokeWidth:1}}
            />
          <Tooltip />
          <Legend iconSize={'0.5rem'} iconType={'circle'}/>
          <Bar dataKey="Trees_Saved" fill="#ee5543" background={{ fill: '#ffded7' }} barSize={35} radius={[25, 25, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
