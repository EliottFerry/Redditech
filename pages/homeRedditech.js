import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { View } from 'react-native';
import { getHotPosts, goToHot, goToBest, goToNew, getBestPosts, getNewPosts } from '../services/getPosts';
import loadingStyle from '../assets/styles/loadingStyle'
import colors from '../assets/colors';
import { HomeScroll } from '../components/scrollableContent';

// This function is the home page of the app, after you've connected to reddit
export default function HomeMenu() {
    const [Home, UpdateHome] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            UpdateHome(await getNewPosts())
        }
        getPosts();
    }, [])

    let buttonsProps = {
        Hot: goToHot.bind(),
        New: goToNew.bind(),
        Best: goToBest.bind(),
        Search: null,
        Update: UpdateHome.bind()
    };
    let scrollableProps = {
        Update: UpdateHome.bind(),
        toMap: Home,
    }
    if (!Home) {
        return (
            <View style={[loadingStyle.container, loadingStyle.horizontal]}>
                <ActivityIndicator size="large" color={colors.danger}/>  
            </View>
        );
    }
    else {
        return (
            <View style={{ backgroundColor: colors.white, color: colors.white }}>
                <HomeScroll buttonsProps={buttonsProps} cardsProps={scrollableProps}/>
            </View>
        );
    }
}