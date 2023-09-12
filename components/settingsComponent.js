import React, { Component } from "react";
import { ScrollView, TouchableOpacity, TouchableOpacityBase, View } from "react-native";
import { Text } from "react-native-paper";
import colors from "../assets/colors";
import AdaptUserSettings from "../services/AdaptUserSettings";
import Adapt from "../services/AdaptUserSettings";
// This is a component used like an HTML component. He is taking as parameter a "settingsOptions", who needs to be a Array of object
// you can call the component like this : <SettingsComponent settingsOptions={ARRAY_OF_OBJECT}/>.
// The object need to have a title and a subtitle component.
// Exemple : settings = [{title: "test", subtitle: "test"}]

export class SettingsComponent extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor: colors.white}}>
                { this.props.settingsOptions.map(({title, subTitle, onPress}, index) => (
                    <TouchableOpacity key={ title } onPress={() => {
                        AdaptUserSettings(title, this.props.func);
                    }}>
                        <View style={{
                            paddingHorizontal: 20,
                            paddingBottom: 20,
                            paddingTop: 20,
                        }}>
                            <Text style={{fontSize: 17}}>{ title }</Text>
                            <Text style={{fontSize: 14, opacity: 0.5, paddingTop: 5}}>{ subTitle }</Text>
                        </View>
                        <View style={{height: 0.5, backgroundColor: colors.grey}}/>
                    </TouchableOpacity>
                    )
                )}
            </ScrollView>
        );
    }
}
export default SettingsComponent;