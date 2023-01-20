import React from 'react';
import { StyleSheet, View } from "react-native-web";

export default function Home() {
    return(
        <View style={styles.container}>
            home
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});