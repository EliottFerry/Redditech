import Snoowrap from './Snoowrap';
import serviceStorage from './Storage';
import React, { useState, useEffect } from 'react';

// This function is making a call to the reddit API to store the user settings in the AsyncStorage.
// Accept PMs = From who the user accept dm
// Country Code = The code of the user's country
// NSFW = True/False if the user enabled NSFW content
// Night Mode = True/False if the user enabled night mode
// Language = The language of the app
// Hide Ads = True/False if the user enabled visible ads

const getUserSettings = () => {
    const [data, setPrefData] = useState(null);

    useEffect(() => {
        const getInfoData = async () => {
            const r = await Snoowrap();
            setPrefData(await r.getPreferences());
        }
        getInfoData();
    });
    if (data) {
        const settingsOptions = [
            {title: "Relevent Ads", subTitle: JSON.stringify(data.activity_relevant_ads), brain: "activity_relevant_ads"},
            {title: "Private feeds", subTitle: JSON.stringify(data.private_feeds), brain: "private_feeds"},
            {title: "NSFW", subTitle: JSON.stringify(data.over_18), brain: "over_18"},
            {title: "Night Mode", subTitle: JSON.stringify(data.nightmode), brain: "nightmode"},
            {title: "No Profanity", subTitle: JSON.stringify(data.no_profanity), brain: "no_profanity"},
            {title: "Hide Ads", subTitle: JSON.stringify(data.hide_ads), brain: "hide_ads"},
        ];
        serviceStorage.pushObj("settingsOptions", settingsOptions);
    }
}
export default getUserSettings;
