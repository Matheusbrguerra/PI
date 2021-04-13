import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { getCredentials, isAuthenticated } from '../../services/auth'
import { styles } from './styles'

const Home = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitLogin = async () => {
        try {
            const cred = await getCredentials()

            if (cred.username.length > 0 && cred.password.length > 0) {
                navigation.navigate('Login')
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChange={(e) => setUsername(e.nativeEvent.text)} placeholder=" Digite seu e-mail" />
            <TextInput style={styles.input} onChange={(e) => setPassword(e.nativeEvent.text)} placeholder=" Digite sua senha" secureTextEntry />
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => submitLogin()}>
                <Text style={styles.submitButtonText}>
                    Log-in Home
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;