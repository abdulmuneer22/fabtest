import React, { Component } from "react";
import { View, Text, Image, Dimensions, ScrollView, Modal } from "react-native";

import TrueButton from "./components/trueButton";
import Card from "./components/card";
import ModalContent from "./components/modalcontent";

var bg = require("../assets/asset_bg_1.png");

const window = Dimensions.get("window");

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  onSelection = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    const { showModal } = this.state;
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "rgba(1,1,1,0.4)"
        }}
      >
        <Image
          style={{
            width: "100%",
            height: 180
          }}
          source={bg}
        />

        <TrueButton />
        <Text>OR</Text>
        <Card
          window={window}
          onFlagPress={() =>
            this.setState({
              showModal: true
            })
          }
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
