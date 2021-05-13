import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connectionContext } from '../ConnectionContext';

export default function ConnectionBar() {
  const { serverAddress } = useContext(connectionContext);

  return (
    <View style={styles.container}>
      <Text>{serverAddress}</Text>
    </View>
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
