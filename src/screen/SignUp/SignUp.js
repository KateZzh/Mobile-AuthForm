import { Text, View, TextInput, Pressable } from 'react-native';
import { styles } from './style';
import { useState } from 'react';

export default function SignUp({ navigation }) {
  const [valueInp, setValueInp] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const addValue = (value, name) => {
    setValueInp({ ...valueInp, [name]: value });
  };

  const isValid = () => {
    try {
      console.log(valueInp);
      if (!valueInp.firstName.length) throw new Error('First name is empty'); 
      if (!/^[A-Za-z]+/gm.test(valueInp.firstName)) throw new Error('First name is invalid');

      if (!valueInp.lastName.length) throw new Error('Last name is empty'); 
      if (!/^[A-Za-z]+/gm.test(valueInp.lastName)) throw new Error('Last name is invalid');

      if (!valueInp.email.trim()) throw new Error('email is empty');
      if (!/^[A-z0-9\.\+\_\-]+@[a-z\.]+\.{1}[a-z]{2,4}$/gm.test(valueInp.email)) throw new Error('email is invalid');
      
      if (!valueInp.password.trim()) throw new Error('password is empty');
      if (valueInp.password.length < 8) throw new Error('password is too short');
      if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/gm.test(valueInp.password)) throw new Error('Password is invalid');

      console.log(`success: ${valueInp.email}, ${valueInp.password}, ${valueInp.firstName}, ${valueInp.lastName}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.wrapperInputs}>
          <TextInput style={styles.input} placeholder='First name' onChangeText={(value) => addValue(value, 'firstName')}></TextInput>
          <TextInput style={styles.input} placeholder='Last name' onChangeText={(value) => addValue(value, 'lastName')}></TextInput>
          <TextInput style={styles.input} placeholder='Email' onChangeText={(value) => addValue(value, 'email')}></TextInput>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder='Password'
            onChangeText={(value) => addValue(value, 'password')}
          ></TextInput>
        </View>

        <Text style={{ fontSize: 16 }}>
          Already have an account ?{' '}
          <Text style={{ color: '#7E49FF', fontSize: 16 }} onPress={() => navigation.navigate('SignIn')}>
            Sign In
          </Text>
        </Text>

        <Pressable style={styles.btn} onPress={isValid}>
          <Text style={styles.btnText}>Agree and continue</Text>
        </Pressable>
      </View>
    </View>
  );
}
