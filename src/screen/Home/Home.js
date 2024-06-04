import { Text, View, Pressable, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.btnText}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  btn: {
    backgroundColor: '#7E49FF',
    paddingVertical: 16,
    width: '90%',
    borderRadius: 8,
  },
  btnText: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
