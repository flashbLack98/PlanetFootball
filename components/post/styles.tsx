import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  userLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 8, // Aggiunge spazio tra l'immagine e il testo
  },
  mt: {
    marginTop: 50,
    padding: 15,
    borderColor: "lightgray",
    borderWidth: 1
  },
  postContainer: {
    flexDirection: 'row', // Imposta la direzione di flex orizzontale
  },
  postTextContainer:{
    marginLeft: 15
  },
  postText: {
    color: "black",
    fontWeight: "bold"
  },
  postSubtitle: {
    fontSize: 12,
    paddingTop: 5
  },
  content: {
    marginTop: 15,
    marginLeft: 10
  },
  contentText: {
    color: "black",
  }
});

export default styles;
