import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfileScreen from '../pages/profile';
import SettingsMenu from '../pages/settings';
import HomeMenu from '../pages/homeRedditech';
import getInfoUser from '../services/getInfoUser';
import getUserSettings from '../services/getSettingsUser';
import SearchMenu from '../pages/search';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Tab is a varibale to create all the Bottom Tab Navigator that we need.
const Tab = createMaterialBottomTabNavigator();

// This function is loading the data of the user, then it's returning the TabNavigator containing all the different tabs that we can move to.
export default function HomeNavigator() {
    getInfoUser();
    getUserSettings();
    return (
        <Tab.Navigator barStyle={{backgroundColor: '#FFFFFF'}} activeColor='#E50B0B' inactiveColor="#000000" initialRouteName='Home' >
            <Tab.Screen name="Profile" component={ ProfileScreen } options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({color}) => (
                    <Icon name="account" color={color} size={20}/>
                ), 
                }}/>
            <Tab.Screen name="Home" component={ HomeMenu } options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color}) => (
                    <Icon name="home" color={color} size={20}/>
                ), 
                }}/>
            <Tab.Screen name="Search" component={ SearchMenu } options={{
                tabBarLabel: "Search",
                tabBarIcon: ({color}) => (
                    <Icon name="magnify" color={color} size={20}/>
                ), 
                }}/>
            <Tab.Screen name="Settings" component={ SettingsMenu } options={{
                tabBarLabel: "Settings",
                tabBarIcon: ({color}) => (
                    <Icon name="cog" color={color} size={20}/>
                ), 
                }}/>
        </Tab.Navigator>
    );
}