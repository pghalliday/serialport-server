import React, {PropTypes} from 'react';
import Status from './Status';
import CaptureFile from './CaptureFile';
import TerminalSize from './TerminalSize';
import {Footer, FooterSection} from 'react-mdl';

const StatusLine = ({status, captureFile, terminalSize, onSetSizeWithExport, onSetSizeWithStty}) => (
  <Footer size="mega">
    <FooterSection type="middle">
      <TerminalSize
        terminalSize={terminalSize}
        onSetSizeWithStty={onSetSizeWithStty}
        onSetSizeWithExport={onSetSizeWithExport}
      />
      <CaptureFile captureFile={captureFile} />
      <Status status={status} />
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
  captureFile: PropTypes.string.isRequired,
  onSetSizeWithStty: PropTypes.func.isRequired,
  onSetSizeWithExport: PropTypes.func.isRequired
};

export default StatusLine;
