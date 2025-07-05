import { Header, HeaderShownContext } from "@react-navigation/elements";
import { Stack } from "expo-router";
import React from "react";
const RootLayout = () => {
    return(
        <Stack>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="index" options={{headerShown: false}} />
            <Stack.Screen name="about" />
        </Stack>
    )
    
};

export default RootLayout