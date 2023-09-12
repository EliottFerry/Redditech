import Snoowrap from './Snoowrap';
import serviceStorage from './Storage';
import React, { useState, useEffect } from 'react';
import getUserSettings from './getSettingsUser';

const AdaptUserSettings = async (settingTap, updt) => {
    const r = await Snoowrap();
    const stor = await serviceStorage.getObj("settingsOptions");
    var setter;
    var bigbrain;

    for (const x in stor) {
        if (settingTap == stor[x].title) {
            if (stor[x].subTitle == "true")
                setter = "false";
            else
                setter = "true";
            bigbrain = stor[x].brain;
            stor[x].subTitle = setter;
            var foo = {[bigbrain]: setter };
            r.updatePreferences(foo);
            serviceStorage.pushObj("settingsOptions", stor);
            updt(await serviceStorage.getObj("settingsOptions"));
        }
    }
}
export default AdaptUserSettings;