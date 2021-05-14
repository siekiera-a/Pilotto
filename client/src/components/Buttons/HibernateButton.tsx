import React from "react";
import { FAB, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

export interface IHibernateButtonProps {
  hibernate(): void;
}

export default function HibernateButton({ hibernate }: IHibernateButtonProps) {
  return (
    <FAB
      color={"#F72585"}
      buttonStyle={styles.hibernateButton}
      containerStyle={styles.hibernateButton}
      icon={<Icon name="moon" type="ionicon" size={35} color={"#fff"} />}
      onPress={hibernate}
    />
  );
}

const hibernateButtonSize = 65;

const styles = StyleSheet.create({
  hibernateButton: {
    borderRadius: 50,
    width: hibernateButtonSize,
    height: hibernateButtonSize,
    elevation: 0,
  },
});
