import React, { useContext } from 'react';
import { View } from 'react-native';
import {
  FullTheme,
  makeStyles,
  useTheme,
  withTheme,
} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { connectionContext } from '../../ConnectionContext';
import ConnectionBar from '../Bars/ConnectionBar';
import ThemeBar from '../Bars/ThemeBar';
import ConnectionView from './ConnectionView';
import MediaKeysView from './MediaKeysView';
import SystemKeysView from './SystemKeysView';

function MainView() {
  const { connected } = useContext(connectionContext);
  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      {connected ? (
        <>
          <ThemeBar />
          <Swiper loop={false} activeDotColor={theme.colors?.primary}>
            <MediaKeysView />
            <SystemKeysView />
          </Swiper>
          <ConnectionBar />
        </>
      ) : (
        <View style={[styles.container, styles.modal]}>
          <ConnectionView />
        </View>
      )}
    </View>
  );
}

export default withTheme(MainView, 'theme');

const useStyles = makeStyles((theme: Partial<FullTheme>) => ({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: '100%',
  },
}));
