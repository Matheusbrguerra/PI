import React, { useState } from 'react';
import { View, Modal, Text, TouchableOpacity, CheckBox } from 'react-native';
import { login, getCredentials } from '../../services/auth'
import { Asset } from 'expo-asset';
import { styles } from './styles'
import { useEffect } from 'react/cjs/react.development';

export default function ({buttonName}) {
    const [visible, setVisible] = useState(false)
    const [products, setProducts] = useState(sanduiches)
    const sanduiches = [
        {
            id: 1,
            name: 'Hamburguer 1',
            price: 9.90
        },
        {
            id: 2,
            name: 'Hamburguer 2',
            price: 12.90
        },
        {
            id: 3,
            name: 'Hamburguer 3',
            price: 13.90
        },
        {
            id: 4,
            name: 'Hamburguer 4',
            price: 14.90
        },
        {
            id: 5,
            name: 'Hamburguer 5',
            price: 15.90
        },
        {
            id: 6,
            name: 'Hamburguer 6',
            price: 16.90
        }
    ]
    
    
    useEffect(()=>{
    })

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={visible}
            >
                <View style={styles.container}>
                    {sanduiches.map(sand => 
                        <>
                            <Text>{sand.name}</Text>
                            <CheckBox key={sand.id}/>
                            <Text>R${sand.price.toFixed(2).toString().replace('.',',')}</Text>
                        </>
                    )}
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
                        <Text style={styles.submitButtonText}>Finalizar Pedido</Text>
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