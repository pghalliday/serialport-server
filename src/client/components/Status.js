import React, {PropTypes} from 'react';

const Status = ({status}) => (
  <p>
    {JSON.stringify(status)}
  </p>
);

Status.propTypes = {
  status: PropTypes.shape({
    status: PropTypes.string.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
  }).isRequired
};

export default Status;
