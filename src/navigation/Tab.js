import React from 'react'
import { createBottomTabNavigator, bottomTabBar } from '@react-navigation/bottom-tabs'
import { Text, View, TouchableOpacity } from 'react-native'
import { HomeScreen, Search, Library, Account } from '../screens'
import { COLORS } from '../constants/theme'
import { FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator()

const Tab = () => {
    // const TabBarCustomButton = ({children, onPress}) => {
    //     return (
    //         <TouchableOpacity
    //             style={{
    //                 top : -30,
    //                 justifyContent: 'center',
    //                 alignItems: "center",
    //                 // ...styles.shadow
    //             }}
    //             onPress={onPress}
    //         >
    //             <LinearGradient
    //                 colors={[COLORS.dark, COLORS.primary]}
    //                 style={{
    //                     width: 50,
    //                     height: 50,
    //                     borderRadius: 25,
    
    //                 }}
    //             >
    //                 {children}
    //             </LinearGradient>
    //         </TouchableOpacity>
    //     )
    // }
  return (
        <Tabs.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown : false,
            tabBarStyle:[{
                position: 'absolute',
                bottom: 0,
                left: 0,
                elevation: 0,
                right:0,
                backgroundColor: '#fff',
                borderTopColor:"transparent",
                height: 60
            }]
        }}>
            <Tabs.Screen 
                name='Home'
                component={HomeScreen}
                tabBarShowLabel
                options={{
                    tabBarIcon:({focused}) => (
                        <View
                            style={{ alignItems: 'center', justifyContent:'center'}}
                        >
                            <FontAwesome5 name="home" size={22} color={focused ? COLORS.secondary : COLORS.primary} />
                            <Text style={{
                                color : focused ? COLORS.secondary : COLORS.primary,
                                fontSize: 10,
                            }}>Home</Text>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen 
                name='Search'
                component={Search}
                tabBarShowLabel
                options={{
                    tabBarIcon:({focused}) => (
                        <View
                            style={{ alignItems: 'center', justifyContent:'center'}}
                        >
                            <Ionicons name="search" size={22} color={focused ? COLORS.secondary : COLORS.primary} />
                            <Text style={{
                                color : focused ? COLORS.secondary : COLORS.primary,
                                fontSize: 10,
                            }}>Search</Text>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen 
                name='Library'
                component={Library}
                tabBarShowLabel
                options={{
                    tabBarIcon:({focused}) => (
                        <View
                            style={{ alignItems: 'center', justifyContent:'center'}}
                        >
                            <MaterialIcons name="library-books" size={22} color={focused ? COLORS.secondary : COLORS.primary}  />
                            <Text style={{
                                color : focused ? COLORS.secondary : COLORS.primary,
                                fontSize: 10,
                            }}>Library</Text>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen 
                name='Account'
                component={Account}
                tabBarShowLabel
                options={{
                    tabBarIcon:({focused}) => (
                        <View
                            style={{ alignItems: 'center', justifyContent:'center'}}
                        >
                            <MaterialCommunityIcons name="account" size={22} color={focused ? COLORS.secondary : COLORS.primary} />
                            <Text style={{
                                color : focused ? COLORS.secondary : COLORS.primary,
                                fontSize: 10,
                            }}>Home</Text>
                        </View>
                    ),
                }}
            />
        </Tabs.Navigator>
  )
}

export default Tab

