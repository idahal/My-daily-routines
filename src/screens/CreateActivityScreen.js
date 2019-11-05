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

  const docName = navigation.getParam("name");

  useEffect(() => {
    const tempArray = [];
    db.collection("routines")
      .doc()
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
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      ></Button>
      <Text>Mina aktiviteter</Text>
      <Text>{docName}</Text>
      {activity.map(item => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
          {/* <Text>{item.addedByUserUid}</Text> */}
        </View>
      ))}

      {authUser ? (
        <AddActivity docName={docName} />
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
