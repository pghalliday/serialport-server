import React, {PropTypes} from 'react';
import {FooterLinkList, FooterDropDownSection} from 'react-mdl';

const clickableStyle = {
  cursor: 'pointer'
};

const TerminalSize = ({terminalSize, onSetSizeWithStty, onSetSizeWithExport}) => (
  <FooterDropDownSection title={`Terminal Size (${terminalSize.columns},${terminalSize.rows})`}>
    <FooterLinkList>
      <span style={clickableStyle} onClick={onSetSizeWithExport}>
        Set using export
      </span>
      <span style={clickableStyle} onClick={onSetSizeWithStty}>
        Set using stty
      </span>
    </FooterLinkList>
  </FooterDropDownSection>
);

TerminalSize.propTypes = {
  terminalSize: PropTypes.shape({
    columns: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired
  }).isRequired,
  onSetSizeWithStty: PropTypes.func.isRequired,
  onSetSizeWithExport: PropTypes.func.isRequired
};

export default TerminalSize;
