import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import { isAuthenticated } from './services/auth'
import { styles } from './globalStyle'
import Login from './pages/Login'
import Home from './pages/Home'

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        {isAuthenticated() === null ?
          (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false
              }}
            />
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen name="Home" component={Home} />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}