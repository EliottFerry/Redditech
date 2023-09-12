import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { View } from 'react-native';
import SettingsComponent from '../components/settingsComponent';
import serviceStorage from '../services/Storage';
import colors from '../assets/colors';
import loadingStyle from '../assets/styles/loadingStyle';

// This function is the setting page. It's calling the SettingsComponent.
// It's getting the different options that are stored in the AsyncStorage, and retrieving it with a "useEffect" function
export default function SettingsMenu() {
    const [settingsUser, setObj] = useState(null);

    useEffect(() => {
        const getObjSetting = async() => {
            setObj(await serviceStorage.getObj("settingsOptions"));
        }
        if (!settingsUser) {
            getObjSetting();
        }
    });
    if (settingsUser) {
        return (
            <SettingsComponent settingsOptions={ settingsUser } func={ setObj }/>
        )
    }
    else {
        return (
            <View style={[loadingStyle.container, loadingStyle.horizontal]}>
                <ActivityIndicator size="large" color={colors.danger}/>  
            </View>
        );
    }
}
