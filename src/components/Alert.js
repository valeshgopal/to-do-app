import React, { useEffect } from 'react';

const Alert = ({ show, msg, type, removeAlert, items }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [items]);

  return (
    <div className={`alert-msg alert-msg-${type}`}>
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
