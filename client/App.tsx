import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import MainView from './src/components/Views/MainView';
import { ConnectionContextProvider } from './src/ConnectionContext';
import { darkTheme } from './src/themes';

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ConnectionContextProvider>
        <MainView />
      </ConnectionContextProvider>
    </ThemeProvider>
  );
}
