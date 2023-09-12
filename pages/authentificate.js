import React from 'react';
import { Button,
         Text
} from 'react-native-paper';
import { View } from 'react-native';
import oauth from '../services/Oauth';

// This function return the first page of the app. It's calling the "oauth" function when you press the button, in order to navigate to a new page, and connect to the reddit API with OAuth2
AuthScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Connect with Reddit</Text>
      <Button title='Connect to Reddit' onPress={async() => await oauth({ navigation })}>Connect with Reddit</Button>
    </View>
  );
}

export default AuthScreen;