import {Image, StyleSheet, Text, View} from "react-native"

const UsersList = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" source={require("../../assets/images/SignSystemLogo.png")} style={styles.imageLogoContainer} />
            <Text style={styles.usersFont}>Usuários</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center", 
        justifyContent: "center"
    },
    imageLogoContainer: {
        height: 230, 
        width: 230
    },
    usersFont: {
        color: "black", 
        fontSize: 20, 
        fontFamily: "OpenSans-SemiBold", 
        marginTop: -15
    }
})

export default UsersList;