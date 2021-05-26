import { Theme } from 'react-native-elements';

const darkPrimary = '#F72585';
const lightPrimary = '#2A5267';

export const darkTheme: Theme = {
  FAB: {
    color: darkPrimary,
  },
  Input: {
    inputStyle: {
      color: '#fff',
    },
  },
  Text: {
    style: {
      color: '#fff',
    },
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
  Input: {
    inputStyle: {
      color: '#000',
    },
  },
  Text: {
    style: {
      color: '#000',
    },
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
