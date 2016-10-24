import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const Name = ({name, active}) => {
  if (active) {
    return (
      <div>
        {name}
      </div>
    );
  } else {
    return (
      <div>
        <Link to={`/serialports/${name}`}>
          {name}
        </Link>
      </div>
    );
  }
};

Name.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default Name;
