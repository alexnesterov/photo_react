import React from 'react';
import styled from 'styled-components';

/**
 * Styled Components
 */
const TextBlock = styled.div`
  p {
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

/**
 * Text Component
 */
const Text = ({ value }) => {
  return <TextBlock dangerouslySetInnerHTML={{ __html: value }} />;
};

export default Text;
