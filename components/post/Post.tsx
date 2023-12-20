import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import styles from './styles'; // Importa gli stili dal file styles.js
import { useState } from "react";


export default function Post() {

    return (

        <View style={styles.mt}>
            <View style={styles.postContainer}>
                <Image
                    style={styles.userLogo}
                    source={{
                        uri: 'https://pikwizard.com/pw/small/39573f81d4d58261e5e1ed8f1ff890f6.jpg',
                    }}
                />

                <View style={styles.postTextContainer}>
                    <Text style={styles.postText}>Mario Rossi</Text>
                    <Text style={styles.postSubtitle}>25 Minutes Ago in Milan</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentText}>Questo è il mio primo Post!</Text>
            </View>

        </View>





    );
}