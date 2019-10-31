import React, { useState } from "react";
import app from "../../config/firebase";
import { useAuth } from "../../config/auth";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Picker,
  PickerItem
} from "react-native";
import TimePicker from "react-native-simple-time-picker";
import colors from "../constants/Colors";
import font from "../constants/Fonts";
import MainButton from "../components/MainButton";

const AddRoutine = ({ addNewItem }) => {
  const db = app.firestore();
  const [routineName, setRoutineName] = useState("");
  const [selectedHours, setSelectedHours] = useState("");
  const [selectedMinutes, setSelectedMinutes] = useState("");
  // const [selectedTime, setSelectedTime] = useState({
  //   selectedHours,
  //   selectedMinutes
  // });

  // Get user if logged in
  const { authUser } = useAuth();

  const resetForm = () => {
    setRoutineName("");
    setSelectedHours("");
    setSelectedMinutes("");
  };

  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   setSelectedTime({ ...selectedTime, [name]: value });
  // };
  console.log(selectedTime);

  const isInvalid =
    routineName === "" || selectedHours === "" || selectedMinutes === "";

  const addNewRoutine = async e => {
    e.preventDefault();

    if (authUser) {
      // Add data to firebase:
      db.collection("Routines")
        .doc(routineName)
        .set({
          name: routineName,
          description: time,
          addedByUserUid: authUser.uid
        })
        .then(function() {
          console.log("Yes, it worked!");
          resetForm();
          addNewItem({
            name: routineName,
            description: time,
            addedByUserUid: authUser.uid,
            id: routineName
          });
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  };

  return (
    <View style={styles.container}>
      {/* <Picker>
        <Picker.Item label="Please select an option..." value="0" />
        <Picker.Item label="option 1" value="1" />
        <Picker.Item label="option 2" value="2" />
      </Picker> */}
      <Text style={styles.text}>Namn på rutinen:</Text>
      <TextInput
        style={styles.textInput}
        type="text"
        name="routineName"
        id="routineName"
        placeholder="Namn"
        value={routineName}
        onChange={e => setRoutineName(e.target.value)}
      />
      <Text style={styles.text}>Vilken tid på klockan ska du vara klar:</Text>
      <View style={styles.timeInput}>
        <TimePicker
          selectedHours={selectedHours}
          selectedMinutes={selectedMinutes}
          value={(selectedHours, selectedMinutes)}
          onChange={e => setSlectedHours(e.target.value)}
        />
      </View>
      <MainButton
        text="Gå vidare"
        onPress={addNewRoutine}
        disabled={isInvalid}
      />
      {/* <Button
        title="Spara"
        onPress={addNewRoutine}
        disabled={isInvalid}
      ></Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginLeft: 16
  },
  textInput: {
    height: 40,
    width: 230,
    borderColor: colors.black,
    borderWidth: 1,
    marginTop: 16,
    fontFamily: font.italic,
    paddingLeft: 5,
    color: colors.dark
  },
  timeInput: {
    height: 40,
    width: 150,
    marginTop: 16,
    fontFamily: font.italic
  },
  text: {
    color: colors.black,
    marginTop: 16,
    fontSize: 16,
    fontFamily: font.regular
  }
});

export default AddRoutine;

// import React from "react";
// import {
//   StyleSheet,
//   TouchableOpacity,
//   View,
//   Image,
//   TextInput,
//   ScrollView,
//   Button,
//   Text
// } from "react-native";
// import { firestore } from "../../config/firebase";
// import TimePicker from "react-native-simple-time-picker";
// import colors from "../constants/Colors";
// import font from "../constants/Fonts";
// import MainButton from "../components/MainButton";

// class AddRoutine extends React.Component {
//   state = { content: "", selectedHours: "", selectedMinutes: "" };

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleChange = event => {
//     event.preventDefault();

//     const { content, selectedHours, selectedMinutes } = this.state;

//     const hours = parseInt(selectedHours);
//     const minutes = parseInt(selectedMinutes);
//     const routine = { content, hours, minutes };

//     firestore.collection("routines").add(routine);

//     this.setState({ content: "", selectedHours: "", selectedMinutes: "" });
//   };

//   render() {
//     const { content, selectedHours, selectedMinutes } = this.state;

//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>Namn på rutinen:</Text>

//         <TextInput
//           style={styles.textInput}
//           autoCapitalize="none"
//           placeholder="Skriv namnet"
//           onChangeText={content => this.setState({ content })}
//           value={content}
//         />
//         <Text style={styles.text}>Vilken tid på klockan ska du vara klar:</Text>
//         {/* <Text>
//           {selectedHours}:{selectedMinutes}
//         </Text> */}
//         <View style={styles.timeInput}>
//           <TimePicker
//             selectedHours={selectedHours}
//             selectedMinutes={selectedMinutes}
//             value={(selectedHours, selectedMinutes)}
//             onChange={(hours, minutes) =>
//               this.setState({ selectedHours: hours, selectedMinutes: minutes })
//             }
//           />
//         </View>
//         <MainButton text="Gå vidare" onPress={this.handleChange} />
//         {/* <Button title="Add routine" onPress={this.handleChange}></Button> */}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     marginLeft: 16
//   },
//   textInput: {
//     height: 40,
//     width: 230,
//     borderColor: colors.black,
//     borderWidth: 1,
//     marginTop: 16,
//     fontFamily: font.italic,
//     paddingLeft: 5,
//     color: colors.dark
//   },
//   timeInput: {
//     height: 40,
//     width: 150,
//     marginTop: 16,
//     fontFamily: font.italic
//   },
//   text: {
//     color: colors.black,
//     marginTop: 16,
//     fontSize: 16,
//     fontFamily: font.regular
//   }
// });
// export default AddRoutine;
