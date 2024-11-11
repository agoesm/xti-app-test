import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '@redux/features/auth/authThunk';
import FormLogin from '@components/FormLogin';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {token, loading, error} = useSelector(state => state.auth);
  // console.log('token =>', token);

  useEffect(() => {
    if (error === 'user not found') {
      Alert.alert('Error', error, [{text: 'OK'}]);
    }

    if (token !== null) {
      navigation.replace('UserList');
    }
  }, [error, token, navigation]);

  const handleLogin = async value => {
    dispatch(loginUser(value));
  };

  return (
    <View style={styles.container}>
      {/* form */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <FormLogin onSubmit={value => handleLogin(value)} isLoading={loading} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

export default LoginScreen;
