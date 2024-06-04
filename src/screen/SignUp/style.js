import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F4F3',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '20',
  },
  wrapperInputs: {
    gap: 20,
    maxWidth: 380,
    width: '100%',
    marginTop: 40,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  btn: {
    backgroundColor: '#7E49FF',
    paddingVertical: 16,
    maxWidth: 375,
    width: '100%',
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
