import React from "react";
import { View, Text } from "react-native";

import InputBox from "../InputBox";

const Card = ({ window, onFlagPress , selectedCountry }) => (
  <View
    style={{
      backgroundColor: "white",
      width: "90%",
      alignSelf: "center",
      height: 300,
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 20,
      alignItems: "center"
    }}
  >
    <Text
      style={{
        fontSize: 20,
        color: "black"
      }}
    >
      Verify Via SMS
    </Text>
    <InputBox window={window} hasFlag={true} onFlagPress={onFlagPress} selectedCountry={selectedCountry}/>
    <InputBox window={window} hasFlag={false} />
  </View>
);

export default Card;
