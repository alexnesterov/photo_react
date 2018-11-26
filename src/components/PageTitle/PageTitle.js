import React from 'react';
import styled from 'styled-components';

import underline from './underline.jpg';

/**
 * Styled Components
 */
const PageTitleBlock = styled.h1`
  margin: 10px 0 20px;
  color: #464646;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;

  &:after {
    content: '';
    display: block;
    height: 3px;
    margin: 5px 0 0;
    background: url(${underline}) repeat-x;
    opacity: .1;
  }
`;

/**
 * PageTitle Component
 */
const PageTitle = ({ title }) => {
  return <PageTitleBlock>{title}</PageTitleBlock>;
};

export default PageTitle;
