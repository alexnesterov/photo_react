import React from 'react';
import styled from 'styled-components';

import { _media } from '../base/constants';

import Layout from './Default';
import Container from '../base/Container';
import Sidebar from '../components/Sidebar';

/**
 * Styled Components
 */
const MainBlock = styled.div`
  padding: 154px 0 0 0;
`;

const MainInner = styled(Container)`
  display: flex;
  flex-wrap: wrap;

  ${_media.mobile`
    display: block;
  `}
`;

const MainSidebar = styled.div`
  flex: 0 0 185px;
  max-width: 185px;
  padding-right: 30px;

  ${_media.mobile`
    max-width: 100%;
    padding-right: 0;
  `}
`;

const MainContent = styled.div`
  flex: 1 1 0%;
  max-width: 100%;
  margin-bottom: 30px;
`;

/**
 * Main Layout Component
 */
const Main = ({ children }) => {
  return (
    <Layout>
      <MainBlock>
        <MainInner>
          <MainSidebar>
            <Sidebar />
          </MainSidebar>
          <MainContent>
            {children}
          </MainContent>
        </MainInner>
      </MainBlock>
    </Layout>
  );
};

export default Main;
