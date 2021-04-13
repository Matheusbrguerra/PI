import AsyncStorage from '@react-native-async-storage/async-storage'

export const isAuthenticated = async () => {
    console.log((await AsyncStorage.getItem('username')) !== null);
    return (await AsyncStorage.getItem('username')) !== null;
}

export const getToken = () => AsyncStorage.getItem(TOKEN_KEY);

export const login = async (username, password) => {
    await AsyncStorage.setItem('username', username);
    await AsyncStorage.setItem('password', password);
};

export const getCredentials = async () => {
    const value = await AsyncStorage.getItem('username')
    const value2 = await AsyncStorage.getItem('password')
    return {
        username:value ? value : '',
        password:value2 ? value2 : ''
    }
};

export const logout = async () => {
    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('password');
};

const auth = { isAuthenticated, getToken, login, logout };
export default auth;