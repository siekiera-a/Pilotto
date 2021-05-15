import React, { useCallback, useContext, useState } from 'react';
import { StatusBar, View } from 'react-native';
import {
  FullTheme,
  makeStyles,
  Switch,
  ThemeContext,
} from 'react-native-elements';
import { darkTheme, lightTheme } from '../../themes';

export default function ThemeBar() {
  const [light, setLight] = useState(false);
  const styles = useStyles(StatusBar.currentHeight);
  const { updateTheme } = useContext(ThemeContext);

  const changeTheme = useCallback(
    (value: boolean) => {
      const theme = value ? darkTheme : lightTheme;
      updateTheme(theme);
      setLight((v) => !v);
    },
    [updateTheme]
  );

  return (
    <View style={styles.container}>
      <Switch
        value={light}
        style={styles.themeSwitch}
        onValueChange={changeTheme}
      />
    </View>
  );
}

const padding = 20;

const useStyles = makeStyles((theme: Partial<FullTheme>, margin: number) => ({
  container: {
    width: '100%',
    backgroundColor: theme.secondaryBackgroundColor,
    paddingTop: padding,
    paddingBottom: padding,
    marginTop: margin,
    alignItems: 'flex-end',
  },
  themeSwitch: {
    marginRight: 10,
    transform: [{ scaleX: 1.35 }, { scaleY: 1.3 }],
  },
}));
