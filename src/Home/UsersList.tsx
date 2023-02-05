import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import {FlatList, Image, StyleSheet, Text, View} from "react-native";

type usersProps = {
    id: number;
    name: string;
    email: string;
    password: string;
};

const handleUser = (item: usersProps, index: number): JSX.Element => {
    return (
        <View key={index} style={styles.listUsersItemContainer}>
            <Image resizeMode="contain" source={require("../../assets/images/user_img.png")} style={styles.listUserImage} />
            <View style={styles.listRowInfoContainer}>
                <View style={styles.listRowInfoContent}>
                <Text style={styles.listUserNameFont}>{item.name}</Text>
                    <Text>{item.password}</Text>
                </View>
                <Text style={styles.listUserIdFont}>{item.id}</Text>
            </View>
        </View>
    );
}

const UsersList = (): JSX.Element => {

    const [users, setUsers] = useState<usersProps[]>();

    axios.get("http://192.168.0.110:5051/user/getAll")
        .then((res: AxiosResponse) => {
            setUsers(res.data);
        });

    return (
        <View style={styles.container}>
            <Image resizeMode="contain" source={require("../../assets/images/SignSystemLogo.png")} style={styles.imageLogoContainer} />
            <Text style={styles.usersFont}>Usuários</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listUsersContentContainer}
                style={styles.listUsersContainer}
                data={users}
                renderItem={({ item, index }) => handleUser(item, index)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: "100%",
        width: "100%",
        justifyContent: "center"
    },
    imageLogoContainer: {
        height: 230,
        marginTop: -35,
        width: 230
    },
    usersFont: {
        color: "black",
        fontSize: 20,
        fontFamily: "OpenSans-SemiBold",
        marginTop: -15
    },
    listUsersContainer: {
        marginTop: 15, 
        width: "92%"
    },
    listUsersContentContainer: {
        paddingBottom: "18%"
    },
    listUsersItemContainer: {
        padding: 5,
        maxHeight: 68,
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",
        borderColor: "#d3d3d3",
        borderWidth: 1,
        elevation: 1
    },
    listUserImage: {
        height: 60, 
        width: 60
    },
    listRowInfoContainer: {
        width: "76.5%", 
        justifyContent: "space-between", 
        flexDirection: "row", 
        alignItems: "center"
    },
    listRowInfoContent: { 
        width: "83%", 
        paddingBottom: 10, 
        marginTop: 10
    },
    listUserNameFont: {
        fontWeight: "600", 
        color: "black"
    },
    listUserIdFont: {
        paddingVertical: 3, 
        paddingHorizontal: 7, 
        backgroundColor: "#d3d3d3", 
        color: "#fff", 
        borderRadius: 100
    }
});

export default UsersList;