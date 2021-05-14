import React, { useCallback, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { connectionContext } from "../../ConnectionContext";
import { Command } from "../../ContextTypes";
import NextButton from "../Buttons/NextButton";
import PlayPauseButton from "../Buttons/PlayPauseButton";
import PrevButton from "../Buttons/PrevButton";
import VolumeDownButton from "../Buttons/VolumeDownButton";
import VolumeUpButton from "../Buttons/VolumeUpButton";

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

  const volumeDown = useCallback(() => {
    send(Command.VOLUME_DOWN);
  }, [send]);

  const volumeUp = useCallback(() => {
    send(Command.VOLUME_UP);
  }, [send]);

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={[styles.horizontalLine, styles.line]}>
        <PrevButton prev={prev} />
        <PlayPauseButton playPause={playPause} style={styles.centerButton} />
        <NextButton next={next} />
      </View>
      <View style={[styles.line, styles.horizontalLine]}>
        <VolumeDownButton volumeDown={volumeDown} />
        <View style={styles.divider} />
        <VolumeUpButton volumeUp={volumeUp} />
      </View>
    </View>
  );
}

const margin = 20;

const styles = StyleSheet.create({
  divider: {
    width: margin,
  },
  line: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  horizontalLine: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  centerButton: {
    marginLeft: margin,
    marginRight: margin,
  },
});
