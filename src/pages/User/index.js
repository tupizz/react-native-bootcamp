/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import { View, Text } from 'react-native';

const User = ({ navigation }) => {
    console.tron.log(navigation.getParam('user'));

    return (
        <View>
            <Text>Olá mundo</Text>
        </View>
    );
};

export default User;
