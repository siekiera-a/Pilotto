import React from "react";
import { FAB, Icon } from "react-native-elements";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

export interface IVolumeMuteButtonProps {
  volumeMute(): void;
  style?: StyleProp<ViewStyle>;
}

export default function VolumeMuteButton({
  volumeMute,
  style,
}: IVolumeMuteButtonProps) {
  return (
    <FAB
      color={"#F72585"}
      buttonStyle={styles.volumeMuteButton}
      containerStyle={[styles.volumeMuteButton, style]}
      icon={
        <Icon
          name="volume-mute"
          type="material-community"
          size={23}
          color={"#fff"}
        />
      }
      onPress={volumeMute}
    />
  );
}

const volumeMuteButtonSize = 55;

const styles = StyleSheet.create({
  volumeMuteButton: {
    borderRadius: 50,
    width: volumeMuteButtonSize,
    height: volumeMuteButtonSize,
    elevation: 0,
  },
});
