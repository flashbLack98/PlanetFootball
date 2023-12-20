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
                <Text style={styles.contentText}>Mi piace il calcio!</Text>
            </View>

            <View style={styles.reactionContainer}>
                <View style={styles.reactions}>
                    <Image style={styles.likeIcon} source={{
                        uri: 'data:image/png;base64,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',
                    }}/>
                    <Text>Like</Text>
                </View>
                
                <View style={styles.reactions}>
                    <Image style={styles.likeIcon} source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3Z-XxZ21kHIFDWwnE8s-yGHDXRjEyX0xUg8lfo4MvkFzlw9RBWFVfxVTi1by90D78r8&usqp=CAU',
                    }}/>
                    <Text>Comment</Text>
                </View>
                
                <View style={styles.reactions}>
                    <Image style={styles.likeIcon} source={{
                        uri: 'https://png.pngtree.com/png-clipart/20221115/ourmid/pngtree-share-icon-button-png-image_6454552.png',
                    }}/>
                    <Text>Share</Text>
                </View>
                
            </View>

        </View>





    );
}