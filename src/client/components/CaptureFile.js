import React, {PropTypes} from 'react';
import {FooterLinkList} from 'react-mdl';

const CaptureFile = ({captureFile}) => (
  <FooterLinkList>
    <a href={captureFile} target="_blank">
      Download Capture File
    </a>
  </FooterLinkList>
);

CaptureFile.propTypes = {
  captureFile: PropTypes.string.isRequired
};

export default CaptureFile;
