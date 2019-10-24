import React from "react";
// import moment from "moment";

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
import TimePicker from "react-native-simple-time-picker";
import colors from "../constants/Colors";
// import CustomText from "../components/CustomText";

class AddRoutine extends React.Component {
  state = { content: "", selectedHours: "", selectedMinutes: "" };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChange = event => {
    event.preventDefault();

    const { content, selectedHours, selectedMinutes } = this.state;

    const hours = parseInt(selectedHours);
    const minutes = parseInt(selectedMinutes);
    const routine = { content, hours, minutes };

    firestore.collection("routines").add(routine);

    this.setState({ content: "", selectedHours: "", selectedMinutes: "" });
  };

  render() {
    const { content, selectedHours, selectedMinutes } = this.state;

    return (
      <View>
        <Text>Min Rutiner</Text>

        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Namn"
          onChangeText={content => this.setState({ content })}
          value={content}
        />
        <Text>
          {selectedHours}:{selectedMinutes}
        </Text>
        <TimePicker
          selectedHours={selectedHours}
          selectedMinutes={selectedMinutes}
          value={(selectedHours, selectedMinutes)}
          onChange={(hours, minutes) =>
            this.setState({ selectedHours: hours, selectedMinutes: minutes })
          }
        />

        <Button title="Add routine" onPress={this.handleChange}></Button>
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
export default AddRoutine;
