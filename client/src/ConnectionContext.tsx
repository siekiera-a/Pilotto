import React, { createContext, useState } from 'react';
import {
  Command,
  IConnectionContext,
  IConnectionContextProps,
} from './ContextTypes';
import * as Stomp from 'webstomp-client';

const defaultValue: IConnectionContext = {
  connected: false,
  serverAddress: '',
  error: false,
  errorMessage: '',
  connect: (ip: string) => void 0,
  disconnect: () => void 0,
  send: (command: Command) => void 0,
};

export const connectionContext =
  createContext<IConnectionContext>(defaultValue);

const { Provider } = connectionContext;

const port = 8080;
const path = '/app/listener';

export function ConnectionContextProvider({
  children,
}: IConnectionContextProps) {
  const [connected, setConnected] = useState(false);
  const [serverAddress, setServerAddress] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  let connection: Stomp.Client | null = null;

  const connect = (ip: string) => {
    const url = `ws://${ip}:${port}/listener`;
    const client = Stomp.client(url);

    client.connect(
      {},
      () => {
        setConnected(true);
        setServerAddress(ip);
        setError(false);
        setErrorMessage('');
      },
      (err: Stomp.Frame | CloseEvent) => {
        setError(true);
        if (err instanceof Stomp.Frame) {
          setErrorMessage('Some error occured!');
        } else {
          setErrorMessage(err.reason);
        }
        console.error(err);
      }
    );

    connection = client;
  };

  const disconnect = () => {
    if (connection && connection.connected) {
      connection.disconnect();
      connection = null;
    }

    setConnected(false);
    setServerAddress('');
    setError(false);
    setErrorMessage('');
  };

  const send = (command: Command) => {
    if (connection && connection.connected) {
      connection.send(path, JSON.stringify({ command: command.toString() }));
    }
  };

  return (
    <Provider
      value={{
        connected,
        serverAddress,
        error,
        errorMessage,
        connect,
        disconnect,
        send,
      }}
    >
      {children}
    </Provider>
  );
}
