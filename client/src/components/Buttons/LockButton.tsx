import React from "react";
import { FAB, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

export interface ILockButtonProps {
  lock(): void;
}

export default function LockButton({ lock }: ILockButtonProps) {
  return (
    <FAB
      color={"#F72585"}
      buttonStyle={styles.lockButton}
      containerStyle={styles.lockButton}
      icon={<Icon name="lock-closed" type="ionicon" size={35} color={"#fff"} />}
      onPress={lock}
    />
  );
}

const lockButtonSize = 65;

const styles = StyleSheet.create({
  lockButton: {
    borderRadius: 50,
    width: lockButtonSize,
    height: lockButtonSize,
    elevation: 0,
  },
});
