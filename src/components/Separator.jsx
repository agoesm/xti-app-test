import {StyleSheet, View} from 'react-native';
import React from 'react';

const Separator = ({style}) => {
  return <View style={[styles.separator, style]} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'grey',
    opacity: 0.7,
  },
});
