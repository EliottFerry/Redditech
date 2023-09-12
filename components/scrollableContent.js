import React, { Component } from "react";
import { ScrollView } from "react-native";
import { ButtonFilter } from "./buttonFilter";
import { InfoSubreddit } from "./infoSubreddit";
import { ScrollableCardMenu } from "./scrollableCardMenu";
import colors from "../assets/colors";
import { isCloseToBottom } from "./common/isCloseToBottom";
import { fetchPosts } from "../services/getPosts";
import Snoowrap from "../services/Snoowrap";

async function test() {
    const r = await Snoowrap();
    await r.getSubreddit(this.props.buttonsProps.Search).subscribe();
}

export class HomeScroll extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor: colors.white}}
                onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                    fetchPosts(this.props.cardsProps.Update, this.props.cardsProps.toMap);
                }
            }}>
                <ButtonFilter props={this.props.buttonsProps}/>
                <ScrollableCardMenu props={this.props.cardsProps}/>
            </ScrollView>
        )
    }
}

export class SearchScroll extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor: colors.white}}
                onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                    fetchPosts(this.props.cardsProps.Update, this.props.cardsProps.toMap);
                }
            }}>
                <InfoSubreddit subreddit={this.props.subProps}/>
                <ButtonFilter props={this.props.buttonsProps}/>
                <ScrollableCardMenu props={this.props.cardsProps}/>
            </ScrollView>
        )    
    }
}