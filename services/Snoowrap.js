import serviceStorage from './Storage';

'use strict';

const snoowrap = require('snoowrap');

/**This function is used to connect to the reddit API in order to make request to it.
 * It's returning a Promise to an object for the reddit API.
*/
Snoowrap = async() => {        
    const r = new snoowrap({
        userAgent: '',
        clientId: await serviceStorage.getData("clientId"),
        clientSecret: '',
        refreshToken: await serviceStorage.getData("refreshToken"),
    });
    r._nextRequestTimestamp = -1;
    return r;
}

export default Snoowrap;