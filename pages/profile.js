import React, { useState, useEffect, useCallback } from 'react';
import { Text } from 'react-native-paper';
import { AppRegistry, Image, ImageBackground } from 'react-native';
import serviceStorage from '../services/Storage';
import { View } from 'react-native';
import getInfoUser from '../services/getInfoUser';
import loadingStyle from '../assets/styles/loadingStyle';
import { ActivityIndicator } from 'react-native-paper';
import colors from '../assets/colors';

export default function ProfileScreen({ navigation }) {
    const [img, setImg] = useState(null);
    const [name, setName] = useState(null);
    const [desc, setDesc] = useState(null);
    const [karma, setKarma] = useState(null);
    const [banner, setBanner] = useState(null);
    
    useEffect(() => {
        const getInfoNeeded = async () => {
            setImg(await serviceStorage.getData("user_icon_img"));
            setName(await serviceStorage.getData("Username"));
            setDesc(await serviceStorage.getData("user_description"));
            setKarma(await serviceStorage.getObj("user_karma"));
            setBanner(await serviceStorage.getData("user_banner"));
        }
        getInfoNeeded();
    });
    let Image_Http_URL ={ uri: img };

    if (!img) {
        return (
            <View style={[loadingStyle.container, loadingStyle.horizontal]}>
                <ActivityIndicator size="large" color={colors.danger}/>  
            </View>
        );
    }
    else {
        return (
            <View style = {{ paddingTop: 10 }}>
                <ImageBackground source={{ uri: banner }} style = {{ width: 400, height: 130, resizeMode : 'stretch', alignSelf : 'center' }}>            
                <Image source={{ uri: img }} style = {{ paddingTop: 20, paddingBottom: 20, width: 100, height: 100, borderRadius: 100/2, resizeMode : 'stretch', margin: 70, alignSelf : 'center' }} />
                </ImageBackground>
                <Text style = {{ alignSelf : 'center', paddingTop: 50, paddingBottom: 10}}> u/{ name }</Text>
                <Text style = {{ alignSelf : 'center', paddingBottom: 10}}> Karma : { karma }</Text>
                <Text style = {{ alignSelf : 'center', paddingBottom: 20}}>Description</Text>
                <Text style = {{ alignSelf : 'center', paddingBottom: 20}}>{ desc }</Text>
            </View>
        );
    }
};