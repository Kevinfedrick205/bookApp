import React from 'react'
import Tab from './Tab'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen, Account, Library, Search } from '../screens'

const Stack = createStackNavigator()

const Navigation = () => {

    const MainScreens = () => {
        return (
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Tab'}>

                <Stack.Screen 
                    name='Tab'
                    component={Tab}
                />
                <Stack.Screen 
                    name='Home'
                    component={HomeScreen}
                />
                <Stack.Screen 
                    name='Search'
                    component={Search}
                />
                <Stack.Screen 
                    name='Library'
                    component={Library}
                />
                <Stack.Screen 
                    name='Account'
                    component={Account}
                />

            </Stack.Navigator>
        )
    }
    
  return (
    <NavigationContainer>
        <MainScreens />
    </NavigationContainer>
  )
}

export default Navigation
