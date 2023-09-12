import React from "react";
import { View } from "react-native";
import CardWithImage from "./cardWithImage";
import CardWithNoImage from "./cardWithNoImage";

// This function is used to render the good card, if there is an image in the post or not.
// It takes as parameters a post from reddit
// It returns the great card component, if an image needs to be drawn or not

function renderGoodCard(post)
{
    if (post.url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return (
            <CardWithImage post={post}/>
        )
    }
    else {
        return (
            <CardWithNoImage post={post}/>
        )
    }
}

// This is a component used like an HTML component. He is taking as parameter somes props, who needs to be a Array of object
// you can call the component like this : <ScrollableCardMenu props={YOUR_PROPS}/>.
// This component create a scrollable screen, which is a infinite scrolling
// It's return an infinite scrolling, who update the posts.

export const ScrollableCardMenu = ({props}) => {
    return (
        <View>
            {props.toMap.map((post, key) =>
                <View key={key}>
                    { renderGoodCard(post) }
                </View>
            )}
        </View>
    )
}