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
  TextInput
} from "react-native";
// import { firestore } from "../../config/firebase";
// import Activities from ".././components/Activities";
// import { collectIdsAndDocs } from "../.././config/utilities";

const AddActivity = ({ addNewItem }) => {
  const db = app.firestore();
  const [activityName, setActivityName] = useState("");
  const [minutes, setMinutes] = useState("");

  // Get user if logged in
  const { authUser } = useAuth();

  const resetForm = () => {
    setActivityName("");
    setMinutes("");
  };

  const isInvalid = activityName === "" || minutes === "";

  const addNewActivity = async e => {
    e.preventDefault();

    if (authUser) {
      // Add data to firebase:
      db.collection("Activities")
        .doc(activityName)
        .set({
          name: activityName,
          description: minutes,
          addedByUserUid: authUser.uid
        })
        .then(function() {
          console.log("Yes, it worked!");
          resetForm();
          addNewItem({
            name: activityName,
            description: minutes,
            addedByUserUid: authUser.uid,
            id: activityName
          });
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text>Min aktiviteter</Text>
      <TextInput
        style={styles.textInput}
        type="text"
        name="activityName"
        id="activityName"
        placeholder="Namn"
        value={activityName}
        onChange={e => setActivityName(e.target.value)}
      />
      <TextInput
        style={styles.textInput}
        type="text"
        name="minutes"
        id="minutes"
        placeholder="Antal minuter"
        value={minutes}
        onChange={e => setMinutes(e.target.value)}
      />
      <Button
        title="Spara"
        onPress={addNewActivity}
        disabled={isInvalid}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "yellow"
  }
});

export default AddActivity;

// import React from "react";
// import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
// import { firestore } from "../../config/firebase";
// import Activities from ".././components/Activities";
// import { collectIdsAndDocs } from "../.././config/utilities";

// class CreateActivityScreen extends React.Component {
//   state = {
//     activities: []
//   };
//   unsubscribe = null;

//   componentDidMount = async () => {
//     this.unsubscribe = firestore
//       .collection("activities")
//       .onSnapshot(snapshot => {
//         const activities = snapshot.docs.map(collectIdsAndDocs);
//         this.setState({ activities });
//       });
//   };

//   componentWillUnmount = () => {
//     this.unsubscribe();
//   };

//   render() {
//     const { activities } = this.state;

//     return (
//       <View style={styles.container}>
//         <Text>Hejsan</Text>
//         <Activities activities={activities} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-start",
//     alignItems: "center",
//     backgroundColor: "yellow"
//   }
// });

// export default CreateActivityScreen;
