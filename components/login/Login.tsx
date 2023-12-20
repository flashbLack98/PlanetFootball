import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import styles from './styles'; // Importa gli stili dal file styles.js

export default function Login (){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      // Qui potresti implementare la logica di autenticazione
      console.log('Username:', username);
      console.log('Password:', password);
      // Aggiungi qui la logica per verificare le credenziali e autenticare l'utente

      try {
        // Simula una richiesta asincrona ritardata
        await new Promise(resolve => setTimeout(resolve, 1000));
  
        // Simula una risposta mock con dati
        const mockResponse = {
          data: {
            userId: 123,
            username: 'utente123',
            token: 'tokenDiAccesso',
          },
        };
  
        // Esegue la gestione dei dati della risposta
        console.log('Dati della risposta:', mockResponse.data);
  
        // Aggiungi qui la logica per verificare le credenziali e autenticare l'utente
      } catch (error) {
        console.error('Errore durante la richiesta di login:', error);
      }

    };
    
    return(
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    )
  }