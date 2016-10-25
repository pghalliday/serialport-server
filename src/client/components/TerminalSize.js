import React, {PropTypes} from 'react';

const TerminalSize = ({terminalSize}) => (
  <text>
    {JSON.stringify(terminalSize)}
  </text>
);

TerminalSize.propTypes = {
  terminalSize: PropTypes.shape({
    columns: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired
  }).isRequired
};

export default TerminalSize;
