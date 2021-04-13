import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import {login,getCredentials} from '../../services/auth'
import { styles } from './styles'

const Login = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // useEffect(() => {}, [password, username])

    const submitLogin = async () => {
        try {
            await login(username, password)
            
            const cred = await getCredentials()
            
            if(cred.username.length > 0 && cred.password.length > 0){
                navigation.navigate('Home')
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChange={(e) => setUsername(e.nativeEvent.text)} placeholder=" E-mail" />
            <TextInput style={styles.input} onChange={(e) => setPassword(e.nativeEvent.text)} placeholder=" Senha" secureTextEntry />
            <TouchableOpacity 
                style={styles.submitButton}
                onPress={()=>submitLogin()}
            >
                <Text style={styles.submitButtonText}>
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;