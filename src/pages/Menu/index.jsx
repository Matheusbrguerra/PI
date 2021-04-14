import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { login, getCredentials } from '../../services/auth'
import { Asset } from 'expo-asset';
import Modal from '../../components/Modal'
import { styles } from './styles'

const Menu = ({ navigation }) => {

    const goToSignUp = async () => {
        try {
            navigation.navigate('SignUp')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Modal buttonName="Sanduíches"/>
        </View>
    );
}

export default Menu;