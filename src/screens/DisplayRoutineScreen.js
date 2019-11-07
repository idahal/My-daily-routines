import React, { useEffect, useState, useRef } from "react";
// import { useAuth } from "../config/auth";
import app from "../config/firebase";

import { Button, StyleSheet, Text, View } from "react-native";
import Timer from "../components/Timer";

const DisplayRoutineScreen = props => {
  const { navigation } = props;

  const db = app.firestore();
  const [activity, setActivity] = useState([]);

  //Get params from addRoutineScreen
  const docName = navigation.getParam("name");
  const userId = navigation.getParam("addedByUserUid");
  const collectionId = navigation.getParam("keyId");
  console.log({ docName });

  useEffect(() => {
    const tempArray = [];
    db.collection("routines")
      .doc(collectionId)
      .collection("activity")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          tempArray.push({ id: doc.id, ...doc.data() });
        });
        setActivity(tempArray);
      });
  }, [db]);

  return (
    <View>
      <Button
        title="Hem"
        onPress={() => navigation.navigate("HomeScreen")}
      ></Button>
      <Text>{docName}</Text>
      {activity.map(item => (
        <View keyExtractor={item.id}>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
      ))}
      <Timer />
    </View>
  );
};

export default DisplayRoutineScreen;
