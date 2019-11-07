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
  console.log(navigation.getParam("name"));

  //Get params from addRoutine
  const docName = navigation.getParam("name");
  const userId = navigation.getParam("addedByUserUid");
  const collectionId = navigation.getParam("keyId");

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

  const displayNewActivity = object => {
    setActivity([...activity, object]);
  };

  console.log(activity);
  return (
    <View>
      <Button
        title="Hem"
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      ></Button>
      <Text>Mina aktiviteter</Text>
      <Text>{docName}</Text>
      {activity.map(item => (
        <View keyExtractor={item.id}>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
      ))}

      {authUser ? (
        <View>
          <AddActivity
            docName={docName}
            userId={userId}
            collectionId={collectionId}
            displayNewActivity={displayNewActivity}
          />
          <Button
            onPress={() =>
              navigation.navigate("DisplayRoutineScreen", {
                name: docName,
                addedByUserUid: authUser.uid,
                keyId: collectionId
              })
            }
          ></Button>
        </View>
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
