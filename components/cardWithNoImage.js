import React from "react";
import { Card } from 'react-native-elements';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

/*
 * Component who create cards with no image in it
 * @params {object} props - The props of the card, which contain the post info.
 * @return {component} The visual of the component
 */

const CardWithNoImage = ({post}) => {
    return (
        <Card>
            <View style={{flexDirection: "row"}}>
                <Text style={{textDecorationLine: "underline"}}>{"Subreddit :"}</Text>
                <Text>{" " + post.subreddit_name_prefixed}</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <Text style={{textDecorationLine: "underline"}}>{"Author :"}</Text>
                <Text>{" " + post.author.name}</Text>
            </View>
            <Text style={{fontWeight: "bold", textAlign:"center", paddingTop: 5, paddingBottom: 2}}>{post.title}</Text>
            <Card.Divider/>
            <Text style={{fontStyle: "italic"}} >{post.selftext.substring(0, 400)}</Text>
        </Card>
    );
}

export default CardWithNoImage;