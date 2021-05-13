export interface IConnectionContext {
  connected: boolean;
  serverAddress: string;
  error: boolean;
  errorMessage: string;
  connect(ip: string): void;
  disconnect(): void;
  send(command: Command): void;
}

export interface IConnectionContextProps {
  children?: React.ReactNode;
}

export enum Command {
  PLAY_PAUSE
}
