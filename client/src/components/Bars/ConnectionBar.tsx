import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { FullTheme, makeStyles, Text } from 'react-native-elements';
import { connectionContext } from '../../ConnectionContext';

export default function ConnectionBar() {
  const { serverAddress, disconnect } = useContext(connectionContext);
  const styles = useStyles();

  return (
    <TouchableOpacity style={styles.container} onPress={disconnect}>
      <Text>{serverAddress}</Text>
    </TouchableOpacity>
  );
}

const padding = 20;

const useStyles = makeStyles((theme: Partial<FullTheme>) => ({
  container: {
    width: '100%',
    backgroundColor: theme.secondaryBackgroundColor,
    alignItems: 'center',
    paddingTop: padding,
    paddingBottom: padding,
  },
}));
