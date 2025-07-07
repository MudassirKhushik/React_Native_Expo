import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

const CustomButton = ({ title, onPress, backgroundColor = "#007bff", textColor = "#fff" }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor }]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  }
});

export default CustomButton;
