import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class PostCard extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.cardContainer}>
                    <View style = {styles.authorContainer}>
                        <View style = {styles.authorImageContainer}>
                            <Image source = {require("../assets/profile_img.png")} style = {styles.profileImage} />
                        </View>
                        <View style = {styles.authorNameContainer}>
                            <Text style = {styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image source = {require("../assets/post.jpeg")} style = {styles.postImage}></Image>
                    <View style = {styles.actionContainer}>
                        <View style = {styles.likeButton}>
                            <Ionicons name = {"heart"} style = {RFValue(30)} color = "white"/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1 
    },
    cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#2f345d",
        borderRadius: RFValue(20)
    },
    authorContainer: {
        fontSize: RFValue(20),
        color: 'white'
    },
    authorImageContainer: {
        resizeMode: "contain",
        height: RFValue(250)
    },
    profileImage: {
        resizeMode: "contain",
        width: "95%",
        alignSelf: "center",
        height: RFValue(250)
    },
    authorNameContainer: {
        fontSize: RFValue(18),
        color: "white",
        justifyContent: 'center',
        alignItems: 'center'
    },
    authorNameText: {
        fontSize: RFValue(18),
        color: "white"
    },
    postImage: {
        resizeMode: "contain",
        width: "95%",
        alignSelf: "center",
        height: RFValue(250)
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
    },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: RFValue(30)
    }
})