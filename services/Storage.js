/** The AsyncStorage is a storage to store data localy, and make them accessible in everyfile, easily
*/
import AsyncStorage from '@react-native-async-storage/async-storage'

/**This function is used to push a simple value to the storage.
 * @author Eliott Ferry
 * @param {string} key - Used to store your data
 * @param {string} value - The value you want to stored in the storage
 * @return {void}
*/
const pushData = async(key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch(e) {
        console.error("Can't insert value in storage");
    }
}

/**This function is used to retrieve a simple value from the storage.
 * @author Eliott Ferry
 * @param {string} key - Used to retrieve the data stored on specific key
 * @return {string}
*/
const getData = async(key) => {
    try {
        return await AsyncStorage.getItem(key)
    } catch(e) {
        console.error("Can't get value from storage");
    }
}

/**This function is similar to the pushData function, except that you can also give object.
 * @author Tom Wederich
 * @param {string} key - Used to stored you data at a specific place
 * @param {object} obj - Strigify object that will be stored at specific key
 * @return {void}
*/
const pushObj = async(key, obj) => {
    try {
        const jsonValue = JSON.stringify(obj)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.error("Can't insert object in storage");
    }
}

/**This function is used to retrieve an object from the storage
 * @author Tom Wederich
 * @param {string} key - Retrieved the data at the specified key
 * @return {Object}
*/
const getObj = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.error("Can't get object from storage");
    }
}

export default { pushData, getData, pushObj, getObj };