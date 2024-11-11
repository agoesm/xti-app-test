import React, {useEffect} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {userById} from '@redux/features/user/userThunk';
import {useDispatch, useSelector} from 'react-redux';
import Separator from '@components/Separator';

const UserDetailScreen = ({route}) => {
  const data = route.params.item || {};
  const dispatch = useDispatch();
  const {detail, status} = useSelector(state => state.user);

  useEffect(() => {
    dispatch(userById(data.id));
  }, [dispatch, data.id]);

  return (
    <View style={styles.container}>
      {status === 'loading' ? (
        <ActivityIndicator style={styles.loadingIndicator} size="large" />
      ) : (
        <>
          <View style={styles.photoContainer}>
            <Image style={styles.avatar} source={{uri: detail?.avatar}} />
          </View>

          <View style={styles.detailContent}>
            <Text style={styles.infoLabel}>First Name</Text>
            <Text style={styles.valueLabel}>{detail?.first_name || '-'}</Text>
            <Separator style={styles.separator} />

            <Text style={styles.infoLabel}>Last Name</Text>
            <Text style={styles.valueLabel}>{detail?.last_name || '-'}</Text>
            <Separator style={styles.separator} />

            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.valueLabel}>{detail?.email || '-'}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default UserDetailScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 30,
    marginBottom: 10,
  },
  detailContent: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  infoLabel: {
    color: '#000',
    fontWeight: '400',
    fontSize: 16,
  },
  valueLabel: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
  },
  separator: {marginVertical: 20},
});
