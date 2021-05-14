import React, { useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connectionContext } from '../../ConnectionContext';

export default function ConnectionBar() {
  const { serverAddress, disconnect } = useContext(connectionContext);

  return (
    <TouchableOpacity style={styles.container} onPress={disconnect}>
      <Text>{serverAddress}</Text>
    </TouchableOpacity>
  );
}

const padding = 20;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#CCC',
    alignItems: 'center',
    paddingTop: padding,
    paddingBottom: padding,
  },
});
