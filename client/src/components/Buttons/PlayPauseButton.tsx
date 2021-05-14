import React from 'react';
import { FAB, Icon } from 'react-native-elements';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

export interface IPlayPauseButtonProps {
  playPause(): void;
  style?: StyleProp<ViewStyle>;
}

export default function PlayPauseButton({
  playPause,
  style,
}: IPlayPauseButtonProps) {
  return (
    <FAB
      buttonStyle={styles.playButton}
      containerStyle={[styles.playButton, style]}
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
  );
}

const playButtonSize = 100;

const styles = StyleSheet.create({
  playButton: {
    borderRadius: 50,
    width: playButtonSize,
    height: playButtonSize,
    elevation: 0,
  },
});
