import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-elements';
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';
import Swiper from 'react-native-swiper';
import { connectionContext } from '../../ConnectionContext';
import ConnectionBar from '../Bars/ConnectionBar';
import ConnectionView from './ConnectionView';
import MediaKeysView from './MediaKeysView';
import SystemKeysView from './SystemKeysView';

export default function MainView() {
  const { connected } = useContext(connectionContext);
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      {connected ? (
        <>
          <Swiper
            style={styles.wrapper}
            loop={false}
            activeDotColor={theme.colors?.primary}
          >
            <MediaKeysView />
            <SystemKeysView />
          </Swiper>
          <ConnectionBar />
        </>
      ) : (
        <Overlay isVisible fullScreen overlayStyle={styles.modal}>
          <ConnectionView />
        </Overlay>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
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
