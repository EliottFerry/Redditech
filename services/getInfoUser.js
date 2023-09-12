/**Get all user infomation needed
*/
import React from 'react';
import { Button,
    Text
} from 'react-native-paper';
import { View } from 'react-native';
import Snoowrap from '../services/Snoowrap';
import serviceStorage from '../services/Storage';

/**This function is making a call to the reddit API to store the user profile info in the AsyncStorage.
 * @param {string} user_icon_img - The uri of the image of the user
 * @param {string} Username - The name of the user
 * @param {string} user_karma - The karma of the user
 * @param {string} user_description - The description displayed on the user profile
 * @param {string} user_banner - The banner of the user
 * @returns {void}
*/
const getInfo = () => {
    Snoowrap().then(request => {
        request.getMe().then(UserInfo => {
            serviceStorage.pushData("user_icon_img", UserInfo.icon_img);
            serviceStorage.pushData("Username", UserInfo.name);
            serviceStorage.pushObj("user_karma", UserInfo.total_karma);
            serviceStorage.pushData("user_description", UserInfo.subreddit.display_name.public_description);
            serviceStorage.pushData("user_banner", UserInfo.subreddit.display_name.banner_img);
        });
    });
}
export default getInfo;