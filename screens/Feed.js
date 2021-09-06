import React, { Component } from 'react';
import { Text, View, SafeAreaView, Platform, StatusBar, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {FlatList} from 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import PostCard from './PostCard';
import * as Font from 'expo-font';

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

let posts = require("./temp_posts.json")

export default class Feed extends Component {
    constructor(props){
        super(props);
        this.state = {
            fontsLoaded: false
        }
    }

    async _loadFontsAsync(){
        await Font.loadAsync(customFonts);
        this.setState({fontsLoaded: true})
    }

    componentDidMount(){
        this._loadFontsAsync()
    }

    renderItem = ({item: posts})=>{
        return <PostCard post = {post}/>
    }

    keyExtractor = (item, index) => index.toString();
    
    render() {
        if(!this.state.fontsLoaded){
            return <AppLoading/>
        } else {
            return (
                <View style = {styles.container}>
                    <SafeAreaView style = {styles.droidSafeArea}/>
                    <View style = {styles.appTitle}>
                        <View style = {styles.appIcon}>
                            <Image source = {require("../assets/logo.png")} style = {styles.iconImage}></Image>
                        </View>
                        <View style = {styles.appTitleTextContainer}>
                            <Text style = {styles.appTitleText}>Spectagram</Text>
                        </View>
                    </View>
                    <View style = {styles.cardContainer}>
                        <FlatList
                            keyExtractor = {this.keyExtractor}
                            data = {posts}
                            renderItem = {this.renderItem}
                        />
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    droidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight: RFValue(30)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: 'row'
    },
    appIcon: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: 'center'
    },
    appTitleText: {
        color: 'black',
        fontSize: RFValue(30)
    },
    cardContainer: {
        flex: 0.85
    }
})