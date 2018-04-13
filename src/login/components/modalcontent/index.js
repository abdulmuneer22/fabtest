import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

import Countries from "../../countries";

import InputBox from "../InputBox";

import Icon from "react-native-vector-icons/Ionicons";

export default class ModalContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _countries: Countries
    };
  }

  search = text => {
    var _countriesList = [];

    this.state._countries.map((itm, ind) => {
      var tIndex = String(itm.name).indexOf(text);

      if (tIndex > -1) {
        _countriesList.push(itm);
      }
    });

    this.setState({
      _countries: _countriesList
    });
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
              <InputBox onChange={text => this.search(text)} />
            </View>

            <FlatList
              data={_countries}
              keyExtractor={(item, index) => item.code}
              renderItem={({ item }) => (
                <View
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
                </View>
              )}
            />
          </View>
        </TouchableHighlight>
      </TouchableHighlight>
    );
  }
}
