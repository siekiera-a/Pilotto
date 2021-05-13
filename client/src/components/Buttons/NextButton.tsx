import React from "react";
import { FAB, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

export interface INextButtonProps {
  next(): void;
}

export default function NextButton({ next }: INextButtonProps) {
  return (
    <FAB
      color={"#F72585"}
      buttonStyle={styles.nextButton}
      containerStyle={styles.nextButton}
      icon={
        <Icon
          name="skip-next"
          type="material-community-icons"
          size={50}
          color={"#fff"}
        />
      }
      onPress={next}
    />
  );
}

const nextButtonSize = 65;

const styles = StyleSheet.create({
  nextButton: {
    borderRadius: 50,
    width: nextButtonSize,
    height: nextButtonSize,
    elevation: 0,
  },
});
