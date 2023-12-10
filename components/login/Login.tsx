import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import styles from './styles'; // Importa gli stili dal file styles.js

export default function Login (){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Qui potresti implementare la logica di autenticazione
      console.log('Username:', username);
      console.log('Password:', password);
      // Aggiungi qui la logica per verificare le credenziali e autenticare l'utente

      
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