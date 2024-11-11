/* eslint-disable react/no-unstable-nested-components */
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {List} from 'react-native-paper';

const ItemUser = ({data, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      underlayColor={'#dedede'}>
      <List.Item
        title={`${data.first_name} ${data.last_name}`}
        left={() => <Image style={styles.avatar} source={{uri: data.avatar}} />}
      />
    </TouchableOpacity>
  );
};

export default ItemUser;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  name: {marginLeft: 10},
});
