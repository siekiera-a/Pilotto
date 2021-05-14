import React from "react";
import { FAB, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

export interface ILogOutButtonProps {
  logOut(): void;
}

export default function LogOutButton({ logOut }: ILogOutButtonProps) {
  return (
    <FAB
      color={"#F72585"}
      buttonStyle={styles.logOutButton}
      containerStyle={styles.logOutButton}
      icon={
        <Icon
          name="logout"
          type="material-community"
          size={35}
          color={"#fff"}
        />
      }
      onPress={logOut}
    />
  );
}

const logOutButtonSize = 65;

const styles = StyleSheet.create({
  logOutButton: {
    borderRadius: 50,
    width: logOutButtonSize,
    height: logOutButtonSize,
    elevation: 0,
  },
});
