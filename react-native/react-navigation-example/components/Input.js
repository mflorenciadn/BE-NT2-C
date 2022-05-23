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
        secureTextEntry={isPassword ? passwordVisibility : false}
        returnKeyType="done"
      />
      {isPassword && (
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#fdfdfd" />
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
    borderColor: "#fdfdfd2d",
    marginVertical: 20,
    backgroundColor: "#fdfdfd3d",
  },
  inputContainerFocus: {
    backgroundColor: "#fdfdfd3d",
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
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
    color: "white",
  },
});
