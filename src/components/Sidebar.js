import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import { _media, _color } from '../base/constants';

import Logo from '../components/Logo';
import Navigation from './Navigation';

/**
 * Styled Components
 */
const SidebarBlock = styled.aside`
  text-align: right;

  ${_media.mobile`
    text-align: center;
    margin-bottom: 35px;
  `}
`;

const SidebarItem = styled.div`
  margin-bottom: 20px;
`;

const SidebarSlogan = styled.div`
  position: relative;
  padding: 10px 0;
  color: ${darken(0.18, _color.page)};
  font-family: 'Georgia', sans-serif;
  font-style: italic;
  font-size: 12px;
  line-height: 18px;

  ${_media.mobile`
    width: 200px;
    display: inline-block;
  `}

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ced2d5;
    border-bottom: 1px solid #f7f6f7;
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }
`;

/**
 * Sidebar Component
 */
const Sidebar = () => {
  return (
    <SidebarBlock>
      <SidebarItem>
        <Logo />
      </SidebarItem>
      <SidebarItem>
        <SidebarSlogan>A clean & simple website layout.</SidebarSlogan>
      </SidebarItem>
      <SidebarItem>
        <Navigation />
      </SidebarItem>
    </SidebarBlock>
  );
};

export default Sidebar;
