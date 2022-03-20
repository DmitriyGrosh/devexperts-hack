import React, { FC } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

interface IRenderLineChart {
  width: number;
  data: { name: string; uv: number }[];
}

export const RenderLineChart: FC<IRenderLineChart> = ({ width, data }) => {
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
