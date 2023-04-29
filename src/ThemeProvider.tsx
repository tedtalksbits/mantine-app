import React from 'react';
import { MantineProvider } from '@mantine/core';
import { theme } from './config/theme/theme';
interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
