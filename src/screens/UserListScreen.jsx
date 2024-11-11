/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUser} from '@redux/features/user/userThunk';
import ErrorText from '@components/ErrorText';
import ItemUser from '@components/ItemUser';
import Separator from '@components/Separator';

const UserListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const {data, status, error} = useSelector(state => state.user);
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const refreshListUser = useCallback(() => {
    setRefreshData(true);
    dispatch(fetchUser()).finally(() => setRefreshData(false));
  }, [dispatch]);

  const filteredUsers = data.filter(
    user =>
      user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search users..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {status === 'loading' || refreshData ? (
          <ActivityIndicator
            style={styles.loadingIndicator}
            // color={Colors.primary}
            size="large"
          />
        ) : status === 'failed' ? (
          <ErrorText errValue={error} />
        ) : (
          <FlatList
            // data={data}
            data={filteredUsers}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ItemUser
                data={item}
                onPress={() => navigation.navigate('UserDetail', {item})}
              />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={<Separator />}
            refreshing={refreshData}
            onRefresh={refreshListUser}
            contentContainerStyle={{paddingBottom: 50}}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
