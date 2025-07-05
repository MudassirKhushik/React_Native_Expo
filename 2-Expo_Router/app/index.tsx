import { View, Text } from "react-native"
import { Link } from "expo-router"
const Index = () => {
  return (
    <View style={{ flex: 1, 
                  backgroundColor: "red", 
                  justifyContent: "center", 
                  alignItems: "center" }}>

      <Text style={{ fontSize: 30, fontWeight: 700, color: "white", }}>Welcome to Expo router</Text>

      <Link href={"/about"}>Go to about</Link>
    </View>
  );
};

export default Index;