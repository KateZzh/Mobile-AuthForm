import { Text, View, TextInput, Pressable } from 'react-native';
import { styles } from './style';
import { useState } from 'react';

export default function SignIn({ navigation }) {
  const [valueInp, setValueInp] = useState({
    email: '',
    password: '',
  });

  const addValue = (value, nameInput) => {
    setValueInp({ ...valueInp, [nameInput]: value });
  };

  const isValid = () => {
    try {
      if (!valueInp.email.trim()) throw new Error('email is empty');
      if (!/^[A-z0-9\.\+\_\-]+@[a-z\.]+\.{1}[a-z]{2,4}$/gm.test(valueInp.email)) throw new Error('email is invalid');
      if (!valueInp.password.trim()) throw new Error('password is empty');
      if (valueInp.password.length < 8) throw new Error('password is too short');
      if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/gm.test(valueInp.password)) throw new Error('password is invalid');

      console.log(`success: ${valueInp.email}, ${valueInp.password}`);

      setValueInp({ email: '', password: '' });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.wrapperInputs}>
          <TextInput value={valueInp.email} style={styles.input} placeholder='Email' onChangeText={(value) => addValue(value, 'email')}></TextInput>
          <TextInput
            value={valueInp.password}
            style={styles.input}
            secureTextEntry={true}
            placeholder='Password'
            onChangeText={(value) => addValue(value, 'password')}
          ></TextInput>
        </View>

        <Text style={{ fontSize: 16 }}>
          Don’t have an account ?{' '}
          <Text style={{ color: '#7E49FF', fontSize: 16 }} onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>

        <Pressable style={styles.btn} onPress={isValid}>
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
