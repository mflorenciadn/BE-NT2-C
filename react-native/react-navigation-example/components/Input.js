import React, { useState } from "react";
import { StyleSheet, Pressable, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../hooks/useTogglePasswordVisibility";

export default function Input(props) {
  const { placeholder, value, onChangeText, keyboardType, isPassword } = props;
  const [inputStyle, setInputStyle] = useState(styles.inputContainerBlur);

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  return (
    <View style={inputStyle}>
      <TextInput
        style={styles.inputField}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setInputStyle(styles.inputContainerFocus)}
        onBlur={() => setInputStyle(styles.inputContainerBlur)}
        keyboardType={keyboardType}
        blurOnSubmit={false}
        secureTextEntry={passwordVisibility}
      />
      {isPassword && (
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </Pressable>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainerBlur: {
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    marginVertical: 20,
  },
  inputContainerFocus: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "teal",
    marginVertical: 20,
    shadowColor: "#404040",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 7,
  },
  inputField: {
    padding: 14,
    fontSize: 20,
    width: "90%",
  },
});
