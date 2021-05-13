import React from "react";
import { FAB, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

export interface IPlayPauseButtonProps {
  playPause(): void;
}

export default function PlayPauseButton({ playPause }: IPlayPauseButtonProps) {
  return (
    <FAB
      color={"#F72585"}
      buttonStyle={styles.playButton}
      containerStyle={styles.playButton}
      icon={
        <Icon
          name="play-pause"
          type="material-community"
          size={50}
          color={"#fff"}
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
