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
  state = { content: "" };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChange = event => {
    event.preventDefault();

    const { content } = this.state;

    const activity = { content };

    firestore.collection("activities").add(activity);

    this.setState({ content: "" });
  };

  render() {
    const { content } = this.state;

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
  welcomeImage: {
    width: 400,
    height: 200,
    resizeMode: "cover",
    marginTop: 1
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 3
  }
});
export default AddActivity;
