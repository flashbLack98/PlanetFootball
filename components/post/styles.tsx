import { StyleSheet } from 'react-native';

const unterzo = 100 / 3
 
const styles = StyleSheet.create({
  
  mt: {
    marginTop: 50,
    padding: 15,
    borderColor: "lightgray",
    borderWidth: 1
  },
  postContainer: {
    flexDirection: 'row', // Imposta la direzione di flex orizzontale
  },
  userLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 8, // Aggiunge spazio tra l'immagine e il testo
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
  },
  reactionContainer: {
    flexDirection: 'row',
    borderColor: 'lightgray',
    borderTopWidth: 1,
    marginTop: 15
  },
  reactions : {
    // height: 50,
    width: `${unterzo}%`,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
  likeIcon: {
    height: 30,
    width: 30,
  },

  
});

export default styles;
