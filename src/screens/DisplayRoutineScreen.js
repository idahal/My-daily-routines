import React, { useEffect, useState, useRef } from "react";
// import { useAuth } from "../config/auth";
import app from "../config/firebase";

import { Button, StyleSheet, Text, View } from "react-native";
import Timer from "../components/Timer";

const DisplayRoutineScreen = props => {
  const { navigation } = props;

  const db = app.firestore();
  const [activity, setActivity] = useState([]);
  const [total, setTotal] = useState([]);

  //Get params from addRoutineScreen
  const docName = navigation.getParam("name");
  //   const userId = navigation.getParam("addedByUserUid");
  const collectionId = navigation.getParam("keyId");
  console.log({ docName });

  const countTotal = () => {
    if (activity.length > 0) {
      let timeArray = 0;
      activity.forEach(item => {
        timeArray += item.description;
      });
      setTotal(timeArray);

      console.log(timeArray);
    }
  };

  console.log(total);

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
        console.log(tempArray);
      });
  }, [db]);

  useEffect(() => {
    countTotal();
  }, [activity]);

  return (
    <View>
      <Button
        title="Hem"
        onPress={() => navigation.navigate("HomeScreen")}
      ></Button>
      <Text>{docName}</Text>

      {activity.map(item => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
      ))}
      <Timer total={total} />
    </View>
  );
};

export default DisplayRoutineScreen;
