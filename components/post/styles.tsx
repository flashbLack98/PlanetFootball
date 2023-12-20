import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row', // Imposta la direzione di flex orizzontale
    alignItems: 'center'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 8, // Aggiunge spazio tra l'immagine e il testo
  },
  text: {
    paddingStart: 15,
    fontSize: 16, // Imposta la dimensione del testo
  },
});

export default styles;
