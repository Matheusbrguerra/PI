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
        marginTop: 37,
        width: 300,
        margin: 15,
        height: 40,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText: {
        color: 'red'
    },
    checkbox: {
        alignSelf: "center",
    },
})

export { styles }
