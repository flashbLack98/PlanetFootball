import { Image, TextInput, View } from "react-native";
import styles from './styles'; // Importa gli stili dal file styles.js
import { useState } from "react";


export default function CreatePost() {
    const [ inputText, setinputText] = useState("")

    
    return (

        <View style={styles.profileContainer}>
            <Image
                style={styles.userLogo}
                source={{
                    uri: 'https://pikwizard.com/pw/small/39573f81d4d58261e5e1ed8f1ff890f6.jpg',
                }}
            />
            <TextInput style={styles.text} value={inputText} onChangeText={setinputText} placeholder="A cosa stai pensando?"></TextInput>
        </View>
    );
}