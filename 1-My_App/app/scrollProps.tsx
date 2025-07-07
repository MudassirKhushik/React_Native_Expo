import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";

const Scroll = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {Array.from({ length: 20 }, (_, i) => (
        <View key={i} style={styles.box}>
          <Text style={styles.boxText}>Box {i + 1}</Text>
        </View>
      ))}

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: "red",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Scroll;
