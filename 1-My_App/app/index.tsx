import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>

      <CustomButton title="Login" onPress={() => router.push("/login")} />
      <CustomButton title="Sign Up" onPress={() => router.push("/signup")} />
      <CustomButton title="Scroll Properties" onPress={() => router.push("/scrollProps")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
});

export default Index;
