import React, { FC, useState } from 'react';

import './notification.scss';

type Types = 'success' | 'error';

interface INotification {
  type: Types;
  active: boolean;
}

const Notification: FC<INotification> = ({ type, children, active }) => {
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
        {children}
        <button onClick={() => setActiveNotification(false)} className='notification__close' />
      </div>
    </div>
  );
};

export default Notification;
