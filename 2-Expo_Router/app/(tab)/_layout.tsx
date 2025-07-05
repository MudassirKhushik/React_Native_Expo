import { Tabs } from "expo-router";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
const TabRoot = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Home" , tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color} /> }}/>
            <Tabs.Screen name="about" options={{ title: "About Us" }}/>    
            <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        </Tabs>
    )
}

export default TabRoot;