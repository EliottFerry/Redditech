import { View } from "react-native";
import React from "react";
import { Searchbar,
    Text,
} from 'react-native-paper';
import { getSubredditFromName, goToHot, goToBest, goToNew } from "../services/getPosts";
import colors from "../assets/colors";
import { ButtonFilter } from "../components/buttonFilter";
import { ScrollableCardMenu } from "../components/scrollableCardMenu";
import { InfoSubreddit } from "../components/infoSubreddit";
import { ScrollableContent, SearchScroll } from "../components/scrollableContent";

// This function is the search page of the app.

export default function SearchMenu() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = searchQuery => setSearchQuery(searchQuery);

    const [subreddit, setSubreddit] = React.useState(null);

    const [Search, UpdateSearch] = React.useState(null);

    if (Search == null || subreddit == null) {
        return (
            <View>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    onIconPress={() => {
                        getSubredditFromName(searchQuery, setSubreddit, UpdateSearch);
                    }}
                    />
            </View>
        );
    }
    else {
        let buttonsProps = {
            Hot: goToHot.bind(),
            New: goToNew.bind(),
            Best: goToBest.bind(),
            Search: searchQuery,
            Update: UpdateSearch.bind()
        };
        let scrollableProps = {
            Update: UpdateSearch.bind(),
            toMap: Search
        }
        return(
            <View style={{ backgroundColor: colors.white, color: colors.white }}>
                <View>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        onTouchEnd={() => {getSubredditFromName(searchQuery, setSubreddit, UpdateSearch)}}
                        onIconPress={() => {getSubredditFromName(searchQuery, setSubreddit, UpdateSearch)}}
                        />
                    {/* <InfoSubreddit subreddit={subreddit}/> */}
                </View>
                <View>
                    <SearchScroll subProps={subreddit} cardsProps={scrollableProps} buttonsProps={buttonsProps} />
                </View>
            </View>
        );
    }
}