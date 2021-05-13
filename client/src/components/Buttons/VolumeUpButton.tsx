import React from "react";
import { FAB, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

export interface IVolumeUpButtonProps {
  volumeUp(): void;
}

export default function VolumeUpButton({ volumeUp }: IVolumeUpButtonProps) {
  return (
    <FAB
      color={"#F72585"}
      buttonStyle={styles.volumeUpButton}
      containerStyle={styles.volumeUpButton}
      icon={
        <Icon
          name="volume-plus"
          type="material-community"
          size={23}
          color={"#fff"}
        />
      }
      onPress={volumeUp}
    />
  );
}

const volumeUpButtonSize = 55;

const styles = StyleSheet.create({
  volumeUpButton: {
    borderRadius: 50,
    width: volumeUpButtonSize,
    height: volumeUpButtonSize,
    elevation: 0,
  },
});
