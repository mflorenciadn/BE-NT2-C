import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

export function Button(props) {
  const { onPress, title, inverted = false } = props;

  const styles = StyleSheet.create({
    button: {
      padding: 15,
      marginVertical: 20,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      elevation: 5,
      backgroundColor: inverted ? "white" : "teal",
    },
    buttonText: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: inverted ? "teal" : "white",
    },
  });

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <View>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </Pressable>
  );
}
