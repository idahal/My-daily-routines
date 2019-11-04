import React, { useState, useEffect } from "react";
import app from "../config/firebase";
import { useAuth } from "../config/auth";
import { Button, StyleSheet, Text, View } from "react-native";
import AddActivity from "../components/AddActivity";
import colors from "../constants/Colors";

const CreateActivityScreen = props => {
  const { navigation } = props;

  const db = app.firestore();
  const [activity, setActivity] = useState([]);

  // Get user if logged in
  const { authUser } = useAuth();

  useEffect(() => {
    const tempArray = [];
    db.collection("Routines")
      .doc("Åka träna")
      .collection("Activity")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          tempArray.push({ id: doc.id, ...doc.data() });
        });
        setActivity(tempArray);
      });
  }, [db]);

  const addNewActivity = object => {
    setActivity([...activity, object]);
  };

  return (
    <View>
      <Button
        title="Hem"
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      ></Button>
      <Text>Mina aktiviteter</Text>

      {activity.map(item => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
          {/* <Text>{item.addedByUserUid}</Text> */}
        </View>
      ))}

      {authUser ? (
        <AddActivity addNewActivity={addNewActivity} />
      ) : (
        <Text>Du är inte inloggad</Text>
      )}
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
export default CreateActivityScreen;

// import React from "react";
// import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
// import { firestore } from "../config/firebase";
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
