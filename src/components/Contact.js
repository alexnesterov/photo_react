import React from 'react';
import styled from 'styled-components';

/**
 * Styled Components
 */
const ContactBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
  text-align: center;
`;

const ContactInner = styled.div`
  flex: 0 1 500px;
  max-width: 500px;
`;

/**
 * Contact Component
 */
const Contact = ({ children }) => {
  return (
    <ContactBlock>
      <ContactInner>{children}</ContactInner>
    </ContactBlock>
  );
};

export default Contact;
