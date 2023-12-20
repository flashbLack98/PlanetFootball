import { Image, StyleSheet, Text, View } from "react-native";
import styles from './styles'; // Importa gli stili dal file styles.js
import { useState } from "react";


export default function Post() {

    const [showCreatePost, setShowCreatePost] = useState(false)

    function createPost(){
        setShowCreatePost(true)
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://pikwizard.com/pw/small/39573f81d4d58261e5e1ed8f1ff890f6.jpg',
                    }}
                />
                <Text style={styles.text} onPress={createPost}>A cosa stai pensando?</Text>
            </View>
        </View>



    );
}