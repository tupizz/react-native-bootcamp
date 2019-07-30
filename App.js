/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

const App = () => {
    return (
        <View style={styles.containter}>
            <Text style={styles.welcome}>Teste</Text>
            <Text style={styles.welcome}>Abaixo</Text>
        </View>
    );
};
export default App;
