import React from 'react';
import { FAB, Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export interface IVolumeDownButtonProps {
  volumeDown(): void;
}

export default function VolumeDownButton({
  volumeDown,
}: IVolumeDownButtonProps) {
  return (
    <FAB
      buttonStyle={styles.volumeDownButton}
      containerStyle={styles.volumeDownButton}
      icon={<Icon name="volume-minus" type="material-community" size={23} />}
      onPress={volumeDown}
    />
  );
}

const volumeDownButtonSize = 55;

const styles = StyleSheet.create({
  volumeDownButton: {
    borderRadius: 50,
    width: volumeDownButtonSize,
    height: volumeDownButtonSize,
    elevation: 0,
  },
});
