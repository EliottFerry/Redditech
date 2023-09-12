import React from 'react';
import { Text } from 'react-native-paper';
import { View, Image, ImageBackground } from 'react-native';

export const InfoSubreddit = ({subreddit}) => {
    if(subreddit.banner == "") {
        subreddit.banner = "https://styles.redditmedia.com/t5_30409/styles/bannerBackgroundImage_8kq7fjazvch11.jpg?width=4000&amp;s=2fbc8eec5e7fb4266e7d70fc87478afc7b70a8e1"
    }
    else if(subreddit.img == "") {
        subreddit.img = "https://styles.redditmedia.com/t5_2qh3s/styles/communityIcon_oy4mm1w4ron61.jpg?width=256&amp;s=e18c0d65c6b9159c5c34de859861d4a0cb99804d"
    }
    return (
        <View>
            <View>
                <ImageBackground source={{ uri: subreddit.banner }} style = {{ width: 400, height: 170, resizeMode : 'stretch', alignSelf : 'center' }}>
                    <Image source={{ uri: subreddit.img }} style = {{ paddingTop: 20, paddingBottom: 20, width: 100, height: 100, borderRadius: 100/2, resizeMode : 'stretch', margin: 120, alignSelf : 'center' }} />
                </ImageBackground>
            </View>
            <View style={{paddingTop: 50}}>
                <Text style={{fontWeight: "bold", fontSize: 20, textAlign: "center"}}>{subreddit.title}</Text>
                <Text style={{textAlign: "center"}}>{ subreddit.description}</Text>
                <Text>{ subreddit.subscriber + " subscribers"}</Text>
            </View>
        </View>
    )
}