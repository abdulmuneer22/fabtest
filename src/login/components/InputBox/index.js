import React, { Component } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";

const defImage = require("../../../assets/india.png");

const window = Dimensions.get("window");

const InputBox = ({ hasFlag, onFlagPress, onChange, selectedCountry }) => (
  <View
    style={{
      flexDirection: "row"
    }}
  >
    <TextInput
      onChangeText={text => onChange(text)}
      style={{
        height: 40,
        width: window.width * 0.8,
        marginVertical: 20,
        borderBottomColor: "black",
        borderBottomWidth: 1
      }}
      value={selectedCountry ? selectedCountry.name: ""}
    />

    {hasFlag ? (
      <TouchableOpacity
        onPress={onFlagPress}
        style={{
          width: 40,
          height: 30,
          position: "absolute",
          right: 5,
          top: 6
        }}
      >
        <Image
          style={{
            width: 40,
            height: 30
          }}
          source={defImage}
        />
      </TouchableOpacity>
    ) : null}
  </View>
);

export default InputBox;
