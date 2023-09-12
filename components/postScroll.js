import React from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import colors from "../assets/colors";
import { Card } from 'react-native-elements';

const PostScroll = ({posts}) => {
    return (
        <ScrollView style={{backgroundColor: colors.white}}>
            {posts.map((post, key) =>
                <View key={key}>
                    <Card>
                        <Text>{post.title}</Text>
                        <Text>{post.submit_text}</Text>
                    </Card>
                </View>
            )}
        </ScrollView>
    );
}

export default PostScroll;