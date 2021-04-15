import React, { useState, useEffect } from 'react';
import { View, Modal, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles'
import { CheckBox } from 'react-native-elements'
import sanduiches from '../../utils/lanches'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function ({ buttonName }) {
    const [visible, setVisible] = useState(false)
    const [products, setProducts] = useState(sanduiches)
    const [orderTotal, setOrderTotal] = useState(0)
    const [orderList, setOrderList] = useState([])

    const setCheckbox = (id) => {
        const index = products.findIndex(sand => sand.id === id)
        products[index].checked = !products[index].checked
        setProducts([...products])
    }

    const saveOrderList = async () => {
        try {
            const dados = JSON.stringify({ orderList, orderTotal })
            await AsyncStorage.setItem('pedido', dados)
            setVisible(false)
        } catch (error) {
            return console.log(error);
        }
    }

    useEffect(() => {
        const cestaProdutos = products.filter(product => product.checked === true)
        const orderTotal = cestaProdutos.reduce((pv, cv) => { return pv + cv.price }, 0)
        setOrderTotal(orderTotal)
        setOrderList(cestaProdutos)
    }, [products, orderTotal])



    return (
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={visible}
            >
                <Text style={styles.submitButtonText}>Selecione seu pedido :</Text>
                <ScrollView style={styles.container}>
                    <>
                        {products.map(sand =>
                            <CheckBox
                                key={sand.id}
                                onPress={() => setCheckbox(sand.id)}
                                checked={sand.checked}
                                title={sand.name + ' - ' + sand.price.toFixed(2).toString().replace('.', ',')}
                            />
                        )}
                    </>
                </ScrollView>
                <View style={styles.container2}>
                    <Text style={styles.submitButtonText}>Total: R${orderTotal.toFixed(2).toString().replace('.', ',')}</Text>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => setVisible(false)}
                    >
                        <Text style={styles.submitButtonText}>Fechar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => setVisible(false)}
                    >
                        <Text onPress={() => saveOrderList()} style={styles.submitButtonText}>Finalizar Pedido</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => setVisible(true)}
            >
                <Text style={styles.submitButtonText}>{buttonName}</Text>
            </TouchableOpacity>
        </View>
    );
}