import { Theme } from 'react-native-elements';

const darkPrimary = '#F72585';
const lightPrimary = '#2A5267';

export const darkTheme: Theme = {
  FAB: {
    color: darkPrimary,
  },
  Icon: {
    color: '#fff',
  },
  backgroundColor: '#1E1E1E',
  secondaryBackgroundColor: '#191919',
  colors: {
    primary: darkPrimary,
  },
};

export const lightTheme: Theme = {
  FAB: {
    color: lightPrimary,
  },
  Icon: {
    color: '#fff',
  },
  backgroundColor: '#f8f9fa',
  secondaryBackgroundColor: '#AABAC2',
  colors: {
    primary: lightPrimary,
  },
}
