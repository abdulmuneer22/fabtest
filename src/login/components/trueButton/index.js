import React, { Component } from "react";
import { View, Text } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const TrueButton = () => (
  <View
    style={{
      width: "90%",
      backgroundColor: "#0084ff",
      borderRadius: 8,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginVertical : 20,
      paddingHorizontal : 10

    }}
  >
    <View
      style={{
        width: 40,
        height: 40,
        backgroundColor: "white",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Icon name="ios-call" color="blue" size={40} />
    </View>

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          textAlign: "center"
        }}
      >
        Verify via Truecaller
      </Text>
    </View>
  </View>
);

export default TrueButton;
