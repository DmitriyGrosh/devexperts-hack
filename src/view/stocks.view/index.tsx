import React from 'react';
import { useParams } from 'react-router-dom';

const StocksView = () => {
  const { id } = useParams();

  return (
    <div>
      <span>asdasd</span>
      <p>{id}</p>
    </div>
  );
};

export default StocksView;
