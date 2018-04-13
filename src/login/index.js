import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Modal,
  StyleSheet
} from "react-native";

import TrueButton from "./components/trueButton";
import Card from "./components/card";
import ModalContent from "./components/modalcontent";

var bg = require("../assets/asset_bg_1.png");

const window = Dimensions.get("window");

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedCountry: ""
    };
  }

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  onSelection = item => {
    this.setState({
      showModal: false,
      selectedCountry: item
    });
  };

  render() {
    const { showModal } = this.state;
    return (
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={styles.s_view}
      >
        <Image style={styles.image} source={bg} />

        <TrueButton />
        <Text>OR</Text>
        <Card
          window={window}
          onFlagPress={() =>
            this.setState({
              showModal: true
            })
          }
          selectedCountry={this.state.selectedCountry}
        />

        <Modal
          transparent={true}
          visible={showModal}
          onRequestClose={this.closeModal}
        >
          <ModalContent
            close={this.closeModal}
            onSelection={this.onSelection}
          />
        </Modal>
      </ScrollView>
    );
  }
}

export default Login;

const styles = {
  s_view: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(1,1,1,0.4)"
  },
  image: {
    width: "100%",
    height: 180
  }
};
