import React from 'react';
import { FAB, Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export interface ILockButtonProps {
  lock(): void;
}

export default function LockButton({ lock }: ILockButtonProps) {
  return (
    <FAB
      buttonStyle={styles.lockButton}
      containerStyle={styles.lockButton}
      icon={<Icon name="lock-closed" type="ionicon" size={40} />}
      onPress={lock}
    />
  );
}

const lockButtonSize = 85;

const styles = StyleSheet.create({
  lockButton: {
    borderRadius: 50,
    width: lockButtonSize,
    height: lockButtonSize,
    elevation: 0,
  },
});
