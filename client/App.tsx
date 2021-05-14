import React from 'react';
import MainView from './src/components/Views/MainView';
import { ConnectionContextProvider } from './src/ConnectionContext';

export default function App() {
  return (
    <ConnectionContextProvider>
      <MainView />
    </ConnectionContextProvider>
  );
}
