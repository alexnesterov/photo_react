import React from 'react';
import styled from 'styled-components';

/**
 * Styled Components
 */
const TextBlock = styled.div``;

/**
 * Text Component
 */
const Text = ({ value }) => {
  return <TextBlock dangerouslySetInnerHTML={{ __html: value }} />;
};

export default Text;
