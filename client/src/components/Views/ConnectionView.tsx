import React, { useContext, useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { Button, Input, ThemeContext } from 'react-native-elements';
import { connectionContext } from '../../ConnectionContext';
import { lightTheme } from '../../themes';

export default function ConnectionView() {
  const inputRef = useRef() as React.MutableRefObject<TextInput>;
  const { connect, error, errorMessage } = useContext(connectionContext);

  const [ip, setIp] = useState('');

  const { updateTheme } = useContext(ThemeContext);

  useEffect(() => {
    updateTheme(lightTheme);
  }, []);

  const connectToServer = () => {
    inputRef.current.blur();
    connect(ip);
  };

  const onTextChange = (text: string) => {
    setIp(text);
  };

  useEffect(() => {
    if (error) {
      Alert.alert('Error', errorMessage);
    }
  }, [error, errorMessage]);

  return (
    <View style={styles.container}>
      <Input
        placeholder={'Server ip'}
        inputStyle={styles.textCenter}
        ref={inputRef}
        label={'Connect to server'}
        labelStyle={styles.textCenter}
        onChangeText={onTextChange}
      />
      <Button
        type={'solid'}
        title={'Connect'}
        buttonStyle={styles.button}
        onPress={connectToServer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  button: {
    paddingLeft: 45,
    paddingRight: 45,
  },
});
