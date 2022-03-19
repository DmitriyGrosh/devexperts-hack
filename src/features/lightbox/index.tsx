import React, { useRef, useEffect } from 'react';

import './style.scss';

const { scheduler } = window;

const Lightbox = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const closeForm = () => {
    if (formRef.current) {
      scheduler.endLightbox(false, formRef.current);
    }
  };

  useEffect(() => {
    scheduler.showLightbox = (id) => {
      if (formRef.current) {
        scheduler.startLightbox(id, formRef.current);
      }
    };
  }, []);

  return (
    <div ref={formRef} id='lightbox-form'>
      <div>header</div>
      <div>content</div>
      <div>footer</div>
    </div>
  );
};

export default Lightbox;
