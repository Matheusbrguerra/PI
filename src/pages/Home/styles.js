import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        flex: 1,
        backgroundColor: '#ffff00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: 300,
        margin: 15,
        height: 40,
        borderColor: '#FF0000',
        borderWidth: 1,
        borderRadius: 10
    },
    submitButton: {
        width: 300,
        margin: 15,
        height: 40,
        borderColor: '#FF0000',
        backgroundColor: '#FF0000',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText: {
        color: 'white'
    }
})

export { styles }