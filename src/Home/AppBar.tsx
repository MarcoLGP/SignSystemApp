import {StyleSheet, Text, View} from "react-native"

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.appBarFont}>SignSystem</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: "black",
        justifyContent: "center"
    },
    appBarFont: {
        color: "#fff",
        fontFamily: "OpenSans-SemiBold",
        marginLeft: 15,
        fontSize: 23
    }
})

export default AppBar;