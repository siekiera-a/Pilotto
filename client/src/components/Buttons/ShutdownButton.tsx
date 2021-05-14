import React from "react";
import { FAB, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

export interface IShutdownButtonProps {
  shutdown(): void;
}

export default function ShutdownButton({ shutdown }: IShutdownButtonProps) {
  return (
    <FAB
      color={"#F72585"}
      buttonStyle={styles.shutdownButton}
      containerStyle={styles.shutdownButton}
      icon={<Icon name="power" type="ionicon" size={40} color={"#fff"} />}
      onPress={shutdown}
    />
  );
}

const shutdownButtonSize = 85;

const styles = StyleSheet.create({
  shutdownButton: {
    borderRadius: 50,
    width: shutdownButtonSize,
    height: shutdownButtonSize,
    elevation: 0,
  },
});
