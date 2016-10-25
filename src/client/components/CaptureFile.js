import React, {PropTypes} from 'react';
import {FooterLinkList, FooterDropDownSection} from 'react-mdl';

const CaptureFile = ({captureFile}) => (
  <FooterDropDownSection title="Capture File">
    <FooterLinkList>
      <a href={captureFile} target="_blank">
        Download
      </a>
    </FooterLinkList>
  </FooterDropDownSection>
);

CaptureFile.propTypes = {
  captureFile: PropTypes.string.isRequired
};

export default CaptureFile;
