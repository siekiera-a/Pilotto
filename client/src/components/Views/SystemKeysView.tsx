import React, { useCallback, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { connectionContext } from "../../ConnectionContext";
import { Command } from "../../ContextTypes";
import HibernateButton from "../Buttons/HibernateButton";
import LockButton from "../Buttons/LockButton";
import LogOutButton from "../Buttons/LogOutButton";
import ShutdownButton from "../Buttons/ShutdownButton";

export default function SystemKeysView() {
  const { send } = useContext(connectionContext);

  const hibernate = useCallback(() => {
    send(Command.HIBERNATE);
  }, [send]);

  const lock = useCallback(() => {
    send(Command.LOCK);
  }, [send]);

  const logOut = useCallback(() => {
    send(Command.LOG_OUT);
  }, [send]);

  const shutdown = useCallback(() => {
    send(Command.SHUTDOWN);
  }, [send]);

  return (
    <View style={styles.container}>
      <View style={styles.horizontalLine}>
        <HibernateButton hibernate={hibernate} />
        <View style={styles.divider} />
        <LockButton lock={lock} />
      </View>
      <View style={styles.divider} />
      <View style={styles.horizontalLine}>
        <LogOutButton logOut={logOut} />
        <View style={styles.divider} />
        <ShutdownButton shutdown={shutdown} />
      </View>
    </View>
  );
}

const margin = 25;

const styles = StyleSheet.create({
  divider: {
    width: margin,
    height: margin,
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
});
