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
        borderRadius: 15,
    },
    submitButton: {
        width: 300,
        margin: 15,
        height: 40,
        borderColor: '#FFA500',
        backgroundColor: '#FFA500',
        borderWidth: 1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitButtonText: {
        color: '#FF0000',
        fontWeight:'bold'
    }
})

export { styles }