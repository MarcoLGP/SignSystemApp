import { useEffect, useState } from "react";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import axios, { AxiosResponse } from "axios";

type usersProps = {
    id: number;
    name: string;
    email: string;
    password: string;
}

const datas: usersProps[] = [
    {id: 5, name: "Robert", email: "luc@gmai.c", password: "dsadsdasdasda"},
    {id: 1, name: "sdal", email: "dskasda@gmail.com", password: "dskaksdkda"},
    {id: 1, name: "sdal", email: "dskasda@gmail.com", password: "dskaksdkda"},
    {id: 1, name: "sdal", email: "dskasda@gmail.com", password: "dskaksdkda"},
    {id: 1, name: "sdal", email: "dskasda@gmail.com", password: "dskaksdkda"}
]

function handleUser(item: usersProps, index: number) {
    return (
        <View key={index} style={styles.listUsersContainer}>
            <Text>{item.name}</Text>
            <Text>{item.id}</Text>
        </View>
    );
}

const UsersList = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" source={require("../../assets/images/SignSystemLogo.png")} style={styles.imageLogoContainer} />
            <Text style={styles.usersFont}>Usuários</Text>
            <FlatList
            data={datas}
            renderItem={({item, index}) => handleUser(item, index)}
            />
            <TouchableOpacity onPress={() => console.log(datas)}><Text>dsjajsdjjdjasjdjajsdjjda</Text></TouchableOpacity>
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
        width: 230
    },
    usersFont: {
        color: "black", 
        fontSize: 20, 
        fontFamily: "OpenSans-SemiBold", 
        marginTop: -15
    },
    listUsersContainer: {
        width: "90%",
        maxHeight: "100%",
        backgroundColor: "red"
    }
})

export default UsersList;