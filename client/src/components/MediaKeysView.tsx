import React, { useCallback, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { connectionContext } from "../ConnectionContext";
import { Command } from "../ContextTypes";
import PlayPauseButton from "./Buttons/PlayPauseButton";

export default function MediaKeysView() {
  const { send } = useContext(connectionContext);

  const playPause = useCallback(() => {
    send(Command.PLAY_PAUSE);
  }, [send]);

  return (
    <View style={styles.container}>
      <PlayPauseButton playPause={playPause}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
