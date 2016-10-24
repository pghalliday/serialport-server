import React from 'react';

const Status = ({status, size}) => (
  <div>
    <p>
      {JSON.stringify(status)}
    </p>
    <p>
      {JSON.stringify(size)}
    </p>
  </div>
);

export default Status;
