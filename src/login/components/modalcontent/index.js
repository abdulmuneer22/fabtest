import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  TextInput
} from "react-native";

import Countries from "../../countries";

import InputBox from "../InputBox";

import Icon from "react-native-vector-icons/Ionicons";

const window = Dimensions.get("window");

export default class ModalContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _countries: Countries
    };
  }

  search = text => {
    var _countriesList = [];

    if (text) {
      this.state._countries.map((itm, ind) => {
        var tIndex = String(itm.name).indexOf(text);

        if (tIndex > -1) {
          _countriesList.push(itm);
        }
      });

      this.setState({
        _countries: _countriesList
      });
    } else {
      this.setState({
        _countries: Countries
      });
    }
  };

  render() {
    const { _countries } = this.state;
    return (
      <TouchableHighlight
        onPress={this.props.close}
        style={{
          flex: 1,
          backgroundColor: "rgba(1,1,1,0.3)",
          paddingVertical: 25
        }}
      >
        <TouchableHighlight
          style={{
            width: "80%",
            backgroundColor: "white",
            alignSelf: "center",
            borderRadius: 6
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 10
              }}
            >
              <Icon name="ios-search" size={20} color="black" />

              <TextInput
                onChangeText={(text) => this.search(text)}
                style={{
                  height: 40,
                  width: window.width * 0.8,
                  marginVertical: 20,
                  borderBottomColor: "black",
                  borderBottomWidth: 1
                }}
              />
            </View>

            <FlatList
              data={_countries}
              keyExtractor={(item, index) => item.code}
              renderItem={({ item }) => (
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
              )}
            />
          </View>
        </TouchableHighlight>
      </TouchableHighlight>
    );
  }
}
