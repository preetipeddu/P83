import React from 'react';
import {StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {RFValue} from 'react-native-responsive-fontsize';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            labeled = {false}
            barType = {styles.barTabStyle}
            screenOptions = {({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'CreatePost') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }
                    return <Ionicons name = {iconName} size = {RFValue(25)} color = {styles.icons} />;
                },
            })}
            tabBarOptions = {{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name = "Feed" component = {Feed} />
            <Tab.Screen name = "CreatePost" component = {CreatePost} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#2f345d",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
      },
      icons: {
        width: RFValue(30),
        height: RFValue(30)
      }
})

export default BottomTabNavigator;