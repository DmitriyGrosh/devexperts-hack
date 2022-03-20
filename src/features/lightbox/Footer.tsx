import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../redux/hooks';
import { setCurrentStock } from '../tools/model/stock.slice';

import Button from '../../shared/ui/button/Button';

interface IFooter {
  handleCLick: () => void;
  id: string;
  date: string;
  symbol: string;
}

const Footer: FC<IFooter> = ({ handleCLick, id, symbol, date }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mock = () => {
    console.log('==========>data', date);
    console.log('==========>symbol', symbol);
    dispatch(setCurrentStock({ symbol, date }));
    handleCLick();
    navigate(`/stock/${id}`);
  };
  return (
    <div className='footer-container'>
      <Button handleClick={mock}>статистика</Button>
      <Button handleClick={handleCLick}>закрыть</Button>
    </div>
  );
};

export default Footer;
