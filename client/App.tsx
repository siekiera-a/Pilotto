import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import MainView from './src/components/Views/MainView';
import { ConnectionContextProvider } from './src/ConnectionContext';

export default function App() {
  return (
    <ThemeProvider>
      <ConnectionContextProvider>
        <MainView />
      </ConnectionContextProvider>
    </ThemeProvider>
  );
}
