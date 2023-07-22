import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackCard: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  whiteCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  whiteCard: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 5,
  },
  selectedWhiteCard: {
    backgroundColor: 'gray',
  },
  whiteCardText: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 4,
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
