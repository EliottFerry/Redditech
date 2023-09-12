import { authorize } from "react-native-app-auth";
import serviceStorage from '../services/Storage';
import { CLIENT_ID, CLIENT_ID_B64 } from '@env';

/**<pre>
 * This variable hold all the data that we need to connect to the reddit API without error.
 * redirectUrl = Where do we want to be redirected after being connected
 * clientId = The ID of the installed app in the reddit/prefs/app
 * clientSecret = Empty string for installed app
 * serviceConfiguration :
 *    - authorizationEndpoint = The page to authorize your account to connect with OAuth2
 *    - tokenEndpoint = The url in which we are posting data to get the access token
 * customHeaders :
 *    - token:
 *        - Authorization = Your client ID in base 64
 * additionalParameters :
 *    - duration = "permanent" if you want a refresh token
 */
const config = {
  redirectUrl: 'com.reacttest://oauth2redirect/reddit',
  clientId: "weyNMS6YCN78ce_KXRlgbA",
  clientSecret: '',
  scopes: ["identity","history","edit","mysubreddits","privatemessages","read","report","save","submit","vote","subscribe","flair","modconfig", "modflair", "modlog", "modposts", "modwiki","wikiedit","wikiread", "account"],
  serviceConfiguration: {
    authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
    tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
  },
  customHeaders: {
    token: {
      Authorization: "d2V5Tk1TNllDTjc4Y2VfS1hSbGdiQQ",
    },
  },
  additionalParameters: {
    duration: "permanent",
  },
};

/*<pre> 
 * This function is used to connect to the reddit API using OAuth2
 * It's also pushing in the Async Storage the accessToken, the refreshToken and the clientId
 * Then it's navigating onto the home page of the app when the connection is done.
*/
async function oauth({ navigation })
{
  try {
    const authState = await authorize(config);
    serviceStorage.pushData("accessToken", authState.accessToken);
    serviceStorage.pushData("refreshToken", authState.refreshToken);
    serviceStorage.pushData("clientId", config.clientId);
    navigation.reset({
        index: 0,
        routes: [{ name: 'Redditech'}],
    });
  } catch (e) {
    console.log(e);
  };
}
export default oauth;