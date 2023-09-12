import Snoowrap from './Snoowrap'
import serviceStorage from "../services/Storage";

// This functon returns the top 15 of the best reddit posts
// It takes as parameters the name of the subreddit, if yo don't give any parameters, it set the name to null

export const getBestPosts = async(name = null) =>
{
    const r = await Snoowrap();
    const Best = await r.getTop(name, {limit: 15})
    return Best;
}

// This functon returns the top 15 of the hottest reddit posts
// It takes as parameters the name of the subreddit, if yo don't give any parameters, it set the name to null

export const getHotPosts = async(name = null) =>
{
    const r = await Snoowrap();
    const Hot = await r.getHot(name, {limit: 15})
    return Hot;
}

// This functon returns the top 15 of the new reddit posts
// It takes as parameters the name of the subreddit, if yo don't give any parameters, it set the name to null

export const getNewPosts = async(name = null) =>
{
    const r = await Snoowrap();
    const New = await r.getNew(name, {limit: 15})  
    return New;
}

// This function is updating the reddit posts to get the best posts
// It takes as parameters the function to update the variable
// And the name of the subReddit, if there is no name, it's set to null

export const goToBest = async(update, name = null) =>
{
    update(await getBestPosts(name));
}

// This function is updating the reddit posts to get the hottest posts
// It takes as parameters the function to update the variable
// And the name of the subReddit, if there is no name, it's set to null

export const goToHot = async(update, name = null) =>
{
    update(await getHotPosts(name));
}

// This function is updating the reddit posts to get the newest posts
// It takes as parameters the function to update the variable
// And the name of the subReddit, if there is no name, it's set to null

export const goToNew = async(update, name = null) =>
{
    update(await getNewPosts(name));
}

// This function update the current list of subreddit, with 5 more posts.
// It takes as parameters the function to update the list
// The current list of the posts reddit

export const fetchPosts = async(update, current) =>
{
    update(await current.fetchMore({amount: 5}));
}

// This function fetch all the data needed to display proprely a subreddit
// It takes as parameters the name of the subreddit
// The update function to update the variable who store the data from subreddit

const testFetchDataFromSubreddit = async(name, update) =>
{
    var url = new URL('https://oauth.reddit.com/subreddits/search'),
    params = {q: name}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    const response = await fetch(url, { 
        method: 'get', 
        headers: new Headers({
            'Authorization': 'bearer '+ await serviceStorage.getData("accessToken"), 
        }),
    })
    let responseJson = await response.json();
    let dataFromResponse = responseJson.data;
    let childrenFromData = dataFromResponse.children;
    let dataFromChildren = childrenFromData[0].data
    let object = {
        title: dataFromChildren.title,
        description: dataFromChildren.public_description,
        subscriber: dataFromChildren.subscribers,
        banner: dataFromChildren.mobile_banner_image,
        img: dataFromChildren.icon_img,
    }
    update(object);
}

// This function set the values of the subreddit in a variable, and set a base list of the posts of the subreddit
// It takes as parameters the query that you searched
// The function to update the variable to store the subreddit
// The function to set the base posts of the research 

export const getSubredditFromName = async(query, update, firstSearch) =>
{
    await testFetchDataFromSubreddit(query, update);
    firstSearch(await getHotPosts(query))
}