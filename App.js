import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import PhoneInput from "react-native-phone-input";


class TextComponent extends React.Component {
  onChangeText = (text) => {
    const cc1 = text.slice(0, `${this.props.countryCode}`.length + 1);
    const cc2 = `+${this.props.countryCode}`;
    console.log(cc1, '===', cc2 )
    if (cc1 === cc2) {
      this.props.onChangeText(text);
    }
  }
  render() {
    return <TextInput {...this.props} onChangeText={this.onChangeText} />
  }
}
class App extends Component {
  state = {
    countryCode: 1,
    value: "+1"
  };

  updateInfo = (number) => {
    this.setState({value: number})
  }
  updateCountry = () => {
    this.setState({ countryCode: this.phone.getCountryCode() });
  }

  render() {
    return (
      <View style={styles.container}>
        <PhoneInput
          ref={ref => {
            this.phone = ref;
          }}
          value={this.state.value}
          onChangePhoneNumber={this.updateInfo}
          onSelectCountry={this.updateCountry}
          autoFormat={true}
          textProps={{countryCode: this.state.countryCode}}
          textComponent={TextComponent}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    paddingTop: 60
  },
  info: {
    // width: 200,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginTop: 20
  },
  button: {
    marginTop: 20,
    padding: 10
  }
});

export default App;