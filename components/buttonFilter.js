import React from 'react';
import { Button, NativeBaseProvider } from 'native-base';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

/*
 * Component who create 3 buttons
 * @params {object} props - The props of the button.
 * @return {component} The visual of the component
 */

export const ButtonFilter = ({props}) => {
    return (
        <NativeBaseProvider>
            <Button.Group style={{paddingTop: 10, paddingBottom: 10}} mx={{ base: "auto", md: 0}}>
                <Button leftIcon={
                    <Icon name="fire" color="#FFFFFF" size={20}/>
                    }
                    onPress={() => {props.Hot(props.Update, props.Search)}}>
                    Hot
                </Button>
                <Button leftIcon={
                    <Icon name="trophy-award" color="#FFFFFF" size={20}/>
                    }
                    onPress={() => {props.Best(props.Update, props.Search)}}>
                    Best
                </Button>
                <Button leftIcon={
                    <Icon name="baby-face" color="#FFFFFF" size={20}/>
                    }
                    onPress={() => {props.New(props.Update, props.Search)}}>
                    New
                </Button>
            </Button.Group>
        </NativeBaseProvider>
    );
}
