import React from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
  Button
} from "react-native";
import { firestore } from "../.././config/Firebase";
import colors from "../constants/Colors";
// import CustomText from "../components/CustomText";

class AddActivity extends React.Component {
  state = { content: "", minutes: "" };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChange = event => {
    event.preventDefault();

    const { content, minutes } = this.state;
    const number = parseInt(minutes);

    const activity = { content, number };

    firestore.collection("activities").add(activity);

    this.setState({ content: "", minutes: "" });
  };

  render() {
    const { content, minutes } = this.state;

    return (
      <View>
        <Text>Min aktiviteter</Text>

        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Namn"
          onChangeText={content => this.setState({ content })}
          value={content}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Antal minuter"
          keyboardType={"numeric"} // This prop help to open numeric keyboard
          onChangeText={minutes => this.setState({ minutes })}
          value={minutes}
        />

        <Button title="Add activities" onPress={this.handleChange}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.lightWhite
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: colors.button,
    borderRadius: 0,
    width: 200
  },
  buttonText: {
    color: colors.lightWhite
  },

  textInput: {
    height: 40,
    width: 350,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 3
  }
});
export default AddActivity;
