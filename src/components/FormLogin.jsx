import React from 'react';
import {Keyboard, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ErrorText from '@components/ErrorText';
import {TextInput} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';

const FormLogin = ({onSubmit, isLoading}) => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={LoginSchema}
      onSubmit={value => {
        Keyboard.dismiss();
        onSubmit(value);
      }}>
      {({
        values,
        errors,
        touched,
        isValid,
        handleChange,
        setFieldTouched,
        handleSubmit,
      }) => (
        <View style={styles.container}>
          <Text style={styles.lableHead}>Login</Text>
          <View style={styles.formContainer}>
            <Text style={styles.lableInput}>Email:</Text>
            <TextInput
              style={styles.input}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            {touched.email && errors.email && (
              <ErrorText errValue={errors.email} />
            )}

            <Text style={styles.lableInput}>Password:</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
            />
            {touched.password && errors.password && (
              <ErrorText errValue={errors.password} />
            )}
          </View>

          <Button
            mode="contained"
            buttonColor="#000"
            onPress={handleSubmit}
            disabled={!isValid || isLoading}>
            Login
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20},
  lableInput: {marginTop: 20},
  input: {borderBottomWidth: 1},
  formContainer: {marginBottom: 50},
  lableHead: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
