import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export class SingleItem extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity
        onPress={() => this.props.onSelection(item)}
        style={{
          flexDirection: "row",
          paddingHorizontal: 10,
          paddingVertical: 10
        }}
      >
        <Image
          style={{
            width: 20,
            height: 20,
            marginRight: 10
          }}
          source={{
            uri: `http://www.countryflags.io/${item.code}/flat/64.png`
          }}
        />
        <Text
          style={{
            fontSize: 18
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default SingleItem;
