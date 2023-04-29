import styled from 'styled-components';
import { Navbar } from '@mantine/core';
export const AppContainer = styled.main`
  display: grid;
  grid-template-columns: minmax(max-content, 375px) 1.5fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'sidebar main';
  gap: 0px 0px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'sidebar'
      'main';
  }
`;

export const Sidebar = styled(Navbar)`
  grid-area: sidebar;
  background-color: #dddddd;
  padding: 1rem;
  border-right: 1px solid #e0e0e0;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
    height: auto;
    overflow-y: visible;
  }
`;

export const Main = styled.div`
  grid-area: main;
  background-color: #ffffff;
  padding: 1rem;
  height: 100vh;
  overflow-y: auto;
`;
