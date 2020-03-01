import React from 'react';

import './InformationBox.scss';

const TopBox = ({ children }) => {
  return <div className="TopBox">{children}</div>;
};

const BottomBox = ({ children }) => {
  return (
    <div className="BottomBox">
      <div className="card">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export { BottomBox, TopBox };
