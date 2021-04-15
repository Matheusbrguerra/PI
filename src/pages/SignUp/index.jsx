import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const SignUp = ({ navigation }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [apto, setApto] = useState('')

    const submitSignUp = async () => {
        try {
            console.log({
                name,
                phone,
                email,
                city,
                district,
                street,
                number,
                apto
            });

            navigation.navigate('Login')
        } catch (error) {
            console.log(error)
        }
    }

    const goBackLogin = async () => {
        try {
            navigation.navigate('Login')
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
            <Text style={{ fontSize: 40, fontFamily: 'Inter_900Black', color: '#FF0000' }}>Vamos começar !!</Text>
            <Text style={{ fontSize: 13, fontFamily: 'Inter_900Black', color: '#FF0000' }}>
                Preencha os campos abaixo para completar o cadastro.
            </Text>
            <Text style={{ fontSize: 13, fontFamily: 'Inter_900Black', color: '#FF0000' }}>
                Nome
            </Text>
            <TextInput style={styles.input} onChange={(e) => setName(e.nativeEvent.text)} placeholder=" Insira seu nome completo" />
            <Text style={{ fontSize: 13, fontFamily: 'Inter_900Black', color: '#FF0000' }}>
                Telefone
            </Text>
            <TextInput style={styles.input} onChange={(e) => setPhone(e.nativeEvent.text)} placeholder=" Insira seu número de telefone" />
            <Text style={{ fontSize: 13, fontFamily: 'Inter_900Black', color: '#FF0000' }}>
                E-mail
            </Text>
            <TextInput style={styles.input} onChange={(e) => setEmail(e.nativeEvent.text)} placeholder=" Insira seu melhor e-mail" />
            <Text style={{ fontSize: 13, fontFamily: 'Inter_900Black', color: '#FF0000' }}>
                Cidade
            </Text>
            <TextInput style={styles.input} onChange={(e) => setCity(e.nativeEvent.text)} placeholder=" Cidade" />
            <Text style={{ fontSize: 13, fontFamily: 'Inter_900Black', color: '#FF0000' }}>
                Bairro
            </Text>
            <TextInput style={styles.input} onChange={(e) => setDistrict(e.nativeEvent.text)} placeholder=" Bairro" />
            <Text style={{ fontSize: 13, fontFamily: 'Inter_900Black', color: '#FF0000' }}>
                Rua
            </Text>
            <TextInput style={styles.input} onChange={(e) => setStreet(e.nativeEvent.text)} placeholder=" Rua" />
            <Text style={{ fontSize: 13, fontFamily: 'Inter_900Black', color: '#FF0000' }}>
                Número
            </Text>
            <TextInput style={styles.input} onChange={(e) => setNumber(e.nativeEvent.text)} placeholder=" Insira número da sua casa" />
            <Text style={{ fontSize: 13, fontFamily: 'Inter_900Black', color: '#FF0000' }}>
                APTO
            </Text>
            <TextInput style={styles.input} onChange={(e) => setApto(e.nativeEvent.text)} placeholder=" Insira número do seu APTO" />
            <TouchableOpacity onPress={() => goBackLogin()}>
                <Text style={styles.submitBack}>
                    Voltar
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => submitSignUp()}>
                <Text style={styles.submitBack}>
                    Cadastrar
                    </Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignUp;