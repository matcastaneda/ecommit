import React from 'react';

const ToastTag = ({ tag }) => {
  return (
    <span className="toast-content xs:text-base">
      <p className="mr-2">Copiaste:</p>
      <code className="toast-content-text">{tag}</code>
    </span>
  );
};

const ToastEmoji = ({ emoji }) => {
  return (
    <span className="toast-content">
      <p className="mr-2">Copiaste:</p>
      <code className="toast-content-text">{emoji}</code>
    </span>
  );
};

export { ToastTag, ToastEmoji };
