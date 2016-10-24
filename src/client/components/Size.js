import React, {PropTypes} from 'react';

const Size = ({size}) => (
  <p>
    {JSON.stringify(size)}
  </p>
);

Size.propTypes = {
  size: PropTypes.shape({
    columns: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired
  }).isRequired
};

export default Size;
