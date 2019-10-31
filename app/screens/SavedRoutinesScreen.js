import React, { useState, useEffect } from "react";
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

import TimePicker from "react-native-simple-time-picker";
import colors from "../constants/Colors";
import AddRoutine from "../components/AddRoutine";
import Title from ".././components/Title";

const SavedRoutineScreen = props => {
  const { navigation } = props;

  const db = app.firestore();
  const [routine, setRoutine] = useState([]);

  // Get user if logged in
  // const { authUser } = useAuth();

  useEffect(() => {
    const tempArray = [];

    db.collection("Routines")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          tempArray.push({ id: doc.id, ...doc.data() });
        });
        setRoutine(tempArray);
      });
  }, []);

  // const addNewRoutine = object => {
  //   setRoutine([...routine, object]);
  // };

  return (
    <View>
      <Button
        title="Hem"
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      ></Button>
      <Text>Mina rutiner</Text>
      {routine.map(item => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
          {/* <Text>{item.addedByUserUid}</Text> */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.lightWhite
  },
  button: {
    marginTop: 20,
    color: colors.dark
  }
});
export default SavedRoutineScreen;

// import React from "react";
// import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
// import { firestore } from "../../config/firebase";
// import Routines from ".././components/Routines";
// import Title from ".././components/Title";
// import colors from ".././constants/Colors";
// import Heart from ".././icons/Heart";

// import { collectIdsAndDocs } from "../.././config/utilities";

// class SavedRoutineScreen extends React.Component {
//   state = {
//     routines: []
//   };
//   unsubscribe = null;

//   componentDidMount = async () => {
//     this.unsubscribe = firestore.collection("routines").onSnapshot(snapshot => {
//       const routines = snapshot.docs.map(collectIdsAndDocs);
//       this.setState({ routines });
//     });
//   };

//   componentWillUnmount = () => {
//     this.unsubscribe();
//   };

//   render() {
//     const { routines } = this.state;

//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             this.props.navigation.navigate("HomeScreen");
//           }}
//         >
//           <Text>HEM</Text>
//         </TouchableOpacity>
//         <Title title={"Mina\nsparade rutiner"} text={"Sparat"} />
//         {/* <Heart></Heart> */}
//         <Routines routines={routines} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-start",
//     alignItems: "center",
//     backgroundColor: colors.lightWhite
//   },
//   button: {
//     marginTop: 20
//   }
// });

// export default SavedRoutineScreen;
