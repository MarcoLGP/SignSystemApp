import axios, { AxiosResponse } from "axios";
import React, { Dispatch, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type usersProps = {
    id: number;
    name: string;
    email: string;
    password: string;
};

type getUserProps = {
    setUsers: Dispatch<React.SetStateAction<usersProps[] | undefined>>;
    setLoading: Dispatch<React.SetStateAction<boolean>>;
}

const handleUser = (item: usersProps, index: number): JSX.Element => {
    return (
        <View key={index} style={styles.listUsersItemContainer}>
            <Image resizeMode="contain" source={require("../../assets/images/user_img.png")} style={styles.listUserImage} />
            <View style={styles.listRowInfoContainer}>
                <View style={styles.listRowInfoContent}>
                    <Text style={styles.listUserNameFont}>{item.name}</Text>
                    <Text>{item.email}</Text>
                </View>
                <Text style={styles.listUserIdFont}>{item.id}</Text>
            </View>
        </View>
    );
}

const handleEmptyUser = (): JSX.Element => {
    return (
        <View style={styles.listUsersItemContainer}>
            <Image resizeMode="contain" source={require("../../assets/images/user_img.png")} style={styles.listUserImage} />
            <View style={styles.listRowInfoContainer}>
                <Text style={[styles.listUserNameFont, { textAlign: "center", width: "100%" }]}>Sem usuários cadastrados</Text>
            </View>
        </View>
    )
}

const footerUsersList = ({ setLoading, setUsers }: getUserProps): JSX.Element => {
    return (
        <View style={styles.footerUsersListContainer}>
            <TouchableOpacity onPress={() => getUsers({ setLoading, setUsers })} style={styles.footerUsersListBtn}>
                <Text style={styles.footerUsersListBtnFont}>Atualizar</Text>
            </TouchableOpacity>
        </View>
    );
}

const getUsers = ({ setLoading, setUsers }: getUserProps): void => {
    setLoading(true);
    axios.get("https://signsystemapi.bsite.net/user/getAll")
        .then((res: AxiosResponse) => {
            setLoading(false);
            setUsers(res.data);
        });
}

const UsersList = (): JSX.Element => {

    const [users, setUsers] = useState<usersProps[]>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect((): void => {
        getUsers({ setUsers, setLoading });
    }, []);

    return (
        <View style={styles.container}>
            <Image resizeMode="contain" source={require("../../assets/images/SignSystemLogo.png")} style={styles.imageLogoContainer} />
            <Text style={styles.usersFont}>Usuários</Text>
            {loading ?
                <View style={styles.loadingUsersContainer}>
                    <Text style={styles.loadingUsersFont}>Carregando usuários...</Text>
                    <ActivityIndicator style={styles.loadingIndicator} />
                </View> : <FlatList
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={handleEmptyUser}
                    ListFooterComponent={footerUsersList({ setLoading, setUsers })}
                    contentContainerStyle={styles.listUsersContentContainer}
                    style={styles.listUsersContainer}
                    data={users}
                    renderItem={({ item, index }) => handleUser(item, index)}
                />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: "100%",
        width: "100%",
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
    },
    footerUsersListContainer: {
        width: "100%",
        alignItems: "center"
    },
    footerUsersListBtn: {
        backgroundColor: "black",
        marginVertical: 5,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 5
    },
    footerUsersListBtnFont: {
        color: "#fff"
    },
    loadingUsersContainer: {
        marginTop: 20
    },
    loadingUsersFont: {
        fontWeight: "600"
    },
    loadingIndicator: {
        marginTop: 10
    }
});

export default UsersList;