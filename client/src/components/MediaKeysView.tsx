import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, FAB } from 'react-native-elements';
import { connectionContext } from '../ConnectionContext';
import { Command } from '../ContextTypes';

export default function MediaKeysView() {
  const { send } = useContext(connectionContext);

  const playPause = () => {
    send(Command.PLAY_PAUSE);
  };

  return (
    <View style={styles.container}>
      <FAB
        color={'#F72585'}
        buttonStyle={styles.playButton}
        containerStyle={styles.playButton}
        icon={
          <Icon
            name="play-pause"
            type="material-community"
            size={50}
            color={'#fff'}
          />
        }
        onPress={playPause}
      />
    </View>
  );
}

const playButtonSize = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    borderRadius: 50,
    width: playButtonSize,
    height: playButtonSize,
    elevation: 0,
  },
});
