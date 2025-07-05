import { View, Text } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
const DrawerRoot = () => {
    return (
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen name="index" />
                <Drawer.Screen name="about" />
                <Drawer.Screen name="profile" />
            </Drawer>
        </GestureHandlerRootView>
    )
}

export default DrawerRoot