import React from 'react';
import {StyleSheet, Text} from 'react-native';

const ErrorText = ({errValue}) => {
  return <Text style={styles.txt}>{errValue}</Text>;
};

export default ErrorText;

const styles = StyleSheet.create({
  txt: {
    color: 'red',
    fontSize: 12,
  },
});
