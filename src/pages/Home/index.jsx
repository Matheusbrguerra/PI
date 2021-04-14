import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import { getCredentials } from '../../services/auth'
import { styles } from './styles'
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import Modal from '../../components/Modal'

const Home = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [bonus, setBonus] = useState(0)

    useEffect(() => {
        getUsername()
        setBonus(2)
    }, [username])

    const getUsername = async () => {
        try {
            const cred = await getCredentials()

            setUsername(cred.username)
        } catch (error) {
            console.log(error);
        }
    }

    const goToMenu = async () => {
        try {
            navigation.navigate('Menu')
        } catch (error) {
            console.log(error)
        }
    }

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontFamily: 'Inter_900Black', color: '#FF0000' }}>{username}</Text>
            <Text style={{ fontSize: 20, fontFamily: 'Inter_900Black', color: '#FF0000' }}>Bônus: {bonus}</Text>

            <TouchableOpacity
                style={styles.submitButton}
            >
                <Text style={styles.submitButtonText}>
                    Alterar Perfil
                </Text>
            </TouchableOpacity>
            <Modal buttonName="Cardápio" />
            <TouchableOpacity
                style={styles.submitButton}
            >
                <Text style={styles.submitButtonText}>Meus pedidos</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;