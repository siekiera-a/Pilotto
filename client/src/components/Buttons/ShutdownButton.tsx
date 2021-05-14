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
      icon={
        <Icon
          name="power"
          type="fontisto"
          size={35}
          color={"#fff"}
        />
      }
      onPress={shutdown}
    />
  );
}

const shutdownButtonSize = 65;

const styles = StyleSheet.create({
  shutdownButton: {
    borderRadius: 50,
    width: shutdownButtonSize,
    height: shutdownButtonSize,
    elevation: 0,
  },
});
