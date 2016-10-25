import React, {PropTypes} from 'react';
import Status from './Status';
import CaptureFile from './CaptureFile';
import TerminalSize from './TerminalSize';
import {Footer, FooterSection} from 'react-mdl';

const StatusLine = ({status, captureFile, terminalSize}) => (
  <Footer size="mini">
    <FooterSection type="left" logo="status">
      <Status status={status} />
    </FooterSection>
    <FooterSection type="right">
      <TerminalSize terminalSize={terminalSize} />
    </FooterSection>
    <FooterSection type="right">
      <CaptureFile captureFile={captureFile} />
    </FooterSection>
  </Footer>
);

StatusLine.propTypes = {
  status: PropTypes.shape({
    status: PropTypes.string.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
  }).isRequired,
  terminalSize: PropTypes.shape({
    columns: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired
  }).isRequired,
  captureFile: PropTypes.string.isRequired
};

export default StatusLine;
