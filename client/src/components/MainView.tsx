import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';
import { connectionContext } from '../ConnectionContext';
import ConnectionBar from './ConnectionBar';
import ConnectionView from './ConnectionView';

export default function MainView() {
  const { connected } = useContext(connectionContext);

  return (
    <View style={styles.container}>
      {connected ? (
        <ConnectionBar />
      ) : (
        <Overlay isVisible fullScreen overlayStyle={styles.modal}>
          <ConnectionView />
        </Overlay>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#fff',
  },
});
