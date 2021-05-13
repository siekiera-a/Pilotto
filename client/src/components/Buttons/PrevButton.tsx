import React from "react";
import { FAB, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

export interface IPrevButtonProps {
  prev(): void;
}

export default function PrevButton({ prev }: IPrevButtonProps) {
  return (
    <FAB
      color={"#F72585"}
      buttonStyle={styles.prevButton}
      containerStyle={styles.prevButton}
      icon={
        <Icon
          name="skip-next"
          type="material-community-icons"
          size={50}
          color={"#fff"}
        />
      }
      onPress={prev}
    />
  );
}

const nextButtonSize = 65;

const styles = StyleSheet.create({
  prevButton: {
    borderRadius: 50,
    width: nextButtonSize,
    height: nextButtonSize,
    elevation: 0,
  },
});
