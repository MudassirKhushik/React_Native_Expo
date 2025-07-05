import { View, Text } from "react-native"
import React from "react"
const About = () => {
    return(
        <View 
        style={{flex: 1, 
                backgroundColor: "green",
                alignItems: "center",
        }}>
            <Text style={{fontSize: 30, fontWeight: 700, color: "white"}}>About</Text>
            <Text>This is called stack animation</Text>
        </View>
    );

};

export default About  