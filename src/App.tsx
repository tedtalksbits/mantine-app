import { useState } from 'react';

import { Accordion, createStyles } from '@mantine/core';
import { AppContainer, Main, Sidebar } from './components/layout/AppContainer';
const useStyles = createStyles((theme) => ({
  accordionItem: {
    borderRadius: theme.radius.sm,
  },
  accordionControl: {
    backgroundColor: theme.colors.gray[0],
    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },
  accordionPanel: {
    backgroundColor: theme.colors.gray[0],
    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },
}));
function App() {
  const { classes } = useStyles();

  return (
    <>
      <AppContainer>
        <Sidebar>
          <h1>Sidebar content</h1>
          <Sidebar.Section>
            <Accordion multiple>
              <Accordion.Item
                value='Accordion item 1'
                className={classes.accordionItem}
              >
                <Accordion.Control>Accordion control</Accordion.Control>
                <Accordion.Panel>Accordion panel 2</Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value='Accordion item 2'>
                <Accordion.Control>Accordion control</Accordion.Control>
                <Accordion.Panel>Accordion panel 2</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Sidebar.Section>
        </Sidebar>
        <Main>
          <h1>Main content</h1>
        </Main>
      </AppContainer>
    </>
  );
}

export default App;
