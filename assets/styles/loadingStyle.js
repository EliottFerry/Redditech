import { StyleSheet } from 'react-native';

// This is the style for the loading wheel, use it to center it.

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default styles;