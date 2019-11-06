import React, { useState, useEffect } from "react";
import app from "../config/firebase";
import { useAuth } from "../config/auth";
import { Button, StyleSheet, Text, View } from "react-native";

import colors from "../constants/Colors";
import font from "../constants/Fonts";

import Title from "../components/Title";

const SavedRoutineScreen = props => {
  const { navigation } = props;

  const db = app.firestore();
  const [routine, setRoutine] = useState([]);

  // Get user if logged in
  const { authUser } = useAuth();

  useEffect(() => {
    const tempArray = [];
    if (authUser) {
      console.log(authUser);
      db.collection("routines")
        .where("addedByUserUid", "==", authUser.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log({ id: doc.id }, { ...doc.data() });
            tempArray.push({ id: doc.id, ...doc.data() });
          });
          setRoutine(tempArray);
        });
    }
  }, [db]);

  return (
    <View>
      <Button
        title="Hem"
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      ></Button>
      <Title title={"Mina\nsparade rutiner"} text={"Sparat"} />
      <Text>Mina rutiner</Text>
      {routine.map(item => (
        <View key={item.id} style={styles.routine}>
          <Text style={styles.infotext}>{item.name}</Text>
          <Text style={styles.infotext}>{item.description}</Text>
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
  },
  routine: {
    backgroundColor: colors.lightWhite,
    borderWidth: 1,
    borderColor: colors.dark,
    width: 343,
    height: 100,
    marginTop: 16
  },
  infotext: {
    fontFamily: font.extrabold,
    fontSize: 18
  }
});
export default SavedRoutineScreen;

// import React from "react";
// import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
// import { firestore } from "../config/firebase";
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
