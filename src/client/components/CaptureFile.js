import React, {PropTypes} from 'react';

const CaptureFile = ({captureFile}) => (
  <a href={captureFile} target="_blank">capture file</a>
);

CaptureFile.propTypes = {
  captureFile: PropTypes.string.isRequired
};

export default CaptureFile;
