import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import { getCredentials } from '../../services/auth'
import { styles } from './styles'
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Order = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [bonus, setBonus] = useState(0)
    const [orderList,setOrderList] = useState([])
    const [orderTotal,setOrderTotal] = useState(0)

    useEffect(() => {
        loadOrder()
        getUsername()
        setBonus(2)
    }, [username])

    const loadOrder = async () => {
        const pedido = JSON.parse(await AsyncStorage.getItem('pedido'))
        setOrderList(pedido.orderList)
        setOrderTotal(pedido.orderTotal)
    }

    const getUsername = async () => {
        try {
            const cred = await getCredentials()

            setUsername(cred.username)
        } catch (error) {
            console.log(error);
        }
    }

    const goBackHome = async () => {
        try {
            navigation.navigate('Home')
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
            <Text style={styles.submitButtonText}>Meus pedido:</Text>
            {
                orderList.map(oi => {
                    return (
                        <Text style={styles.submitButtonText} key={oi.id}>{oi.name} - R${orderTotal.toFixed(2).toString().replace('.', ',')}</Text>
                    )
                })
            }
            <Text style={styles.text}>Total do pedido : R${orderTotal.toFixed(2).toString().replace('.', ',')}</Text>
            <TouchableOpacity onPress={() => goBackHome()}>
                <Text style={styles.submitBack}>
                    Voltar
                    </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Order;