import React, { FC, useState } from 'react';

import './notification.scss';

type Types = 'success' | 'error';

interface INotification {
  type: Types;
  text: string;
  image?: React.ReactElement;
  active: boolean;
}

const Notification: FC<INotification> = ({ type, text, image, active }) => {
  const [activeNotification, setActiveNotification] = useState(active);
  if (activeNotification) {
    const timeout = setTimeout(() => {
      setActiveNotification(false);
      clearTimeout(timeout);
    }, 5000);
  }
  return (
    <div className={`notification ${type} ${activeNotification ? 'active' : ''}`}>
      <div className='notification__container'>
        {image || ''}
        <p className='notification__text'>{text}</p>
        <button onClick={() => setActiveNotification(false)} className='notification__close' />
      </div>
    </div>
  );
};

export default Notification;
