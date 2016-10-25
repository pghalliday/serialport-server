import React, {PropTypes} from 'react';

const Status = ({status}) => (
  <span>
    {JSON.stringify(status)}
  </span>
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
