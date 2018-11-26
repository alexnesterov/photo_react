import React from 'react';
import styled from 'styled-components';

import Container from '../base/Container';
import moment from 'moment';

/**
 * Styled Components
 */
const FooterBlock = styled.footer`
  padding: 30px 0;
  text-align: center;
`;

const FooterInner = styled(Container)``;

const FooterText = styled.div``;

/**
 * Footer Component
 */
const Footer = ({ text }) => {
  return (
    <FooterBlock>
      <FooterInner>
        <FooterText>
          &copy; {text}, {moment().format('YYYY')}
        </FooterText>
      </FooterInner>
    </FooterBlock>
  );
};

export default Footer;
