/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {IconButton} from 'react-native-paper';
import LoginScreen from '@screens/LoginScreen';
import UserListScreen from '@screens/UserListScreen';
import UserDetailScreen from '@screens/UserDetailScreen';
import {logout} from '@redux/features/auth/authSlices';

const Stack = createStackNavigator();

const Routers = () => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);
  const {detail} = useSelector(state => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={token !== null ? 'UserList' : 'Login'}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserList"
          component={UserListScreen}
          options={({navigation}) => ({
            title: 'List Users',
            headerRight: () => (
              <IconButton
                icon="logout"
                size={24}
                color="#fff"
                onPress={() => {
                  dispatch(logout());
                  navigation.replace('Login');
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetailScreen}
          options={({}) => ({
            title: `${detail?.first_name} ${detail?.last_name}`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
