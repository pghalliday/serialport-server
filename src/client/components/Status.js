import React, {PropTypes} from 'react';
import {FooterLinkList, FooterDropDownSection} from 'react-mdl';

const Status = ({status}) => (
  <FooterDropDownSection title="Status">
    <FooterLinkList>
      <span>{status.status}</span>
      <span>{status.error}</span>
    </FooterLinkList>
  </FooterDropDownSection>
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
