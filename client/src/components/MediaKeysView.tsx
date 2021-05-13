import React, { useCallback, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { connectionContext } from "../ConnectionContext";
import { Command } from "../ContextTypes";
import NextButton from "./Buttons/NextButton";
import PlayPauseButton from "./Buttons/PlayPauseButton";
import PrevButton from "./Buttons/PrevButton";

export default function MediaKeysView() {
  const { send } = useContext(connectionContext);

  const playPause = useCallback(() => {
    send(Command.PLAY_PAUSE);
  }, [send]);

  const next = useCallback(() => {
    send(Command.NEXT);
  }, [send]);

  const prev = useCallback(() => {
    send(Command.PREV);
  }, [send]);

  return (
    <View style={styles.container}>
      <View style={styles.middleLine}>
        <PrevButton prev={prev} />
        <PlayPauseButton playPause={playPause} style={styles.playPause} />
        <NextButton next={next} />
      </View>
    </View>
  );
}

const margin = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  middleLine: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  playPause: {
    marginLeft: margin,
    marginRight: margin,
  },
});
