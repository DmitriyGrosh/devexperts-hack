import React, { FC } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  {
    name: 'Page',
    uv: 4000,
  },
  {
    name: 'Page',
    uv: 3000,
  },
  {
    name: 'Page',
    uv: 2000,
  },
  {
    name: 'Page D',
    uv: 2780,
  },
  {
    name: 'Page E',
    uv: 1890,
  },
  {
    name: 'Page F',
    uv: 2390,
  },
  {
    name: 'Page',
    uv: 3490,
  },
];

interface IRenderLineChart {
  width: number;
}

export const RenderLineChart: FC<IRenderLineChart> = ({ width }) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <LineChart width={width} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Line type='monotone' dataKey='uv' stroke='#8884d8' />
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <XAxis dataKey='name' />
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <YAxis />
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Tooltip />
    </LineChart>
  );
};
