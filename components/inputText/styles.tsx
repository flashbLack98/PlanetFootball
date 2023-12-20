import { StyleSheet } from "react-native";

export default StyleSheet.create({
    profileContainer: {
      marginTop: 50,
      flexDirection: 'row', // Imposta la direzione di flex orizzontale
      alignItems: 'center',
      padding: 16,
    },
    userLogo: {
      width: 50,
      height: 50,
      borderRadius: 50,
      marginRight: 8, // Aggiunge spazio tra l'immagine e il testo
    },
    text: {
      paddingStart: 15,
      fontSize: 16, // Imposta la dimensione del testo
    }
})