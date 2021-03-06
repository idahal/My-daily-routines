import React, { useState, useEffect } from "react";
import app from "../config/firebase";
import { useAuth } from "../config/auth";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";
import HomeButton from "../components/HomeButton";
import AddActivity from "../components/AddActivity";
import RemoveActivity from "../components/RemoveActivity";
import Title from "../components/Title";
import MainButton from "../components/MainButton";

const CreateActivityScreen = props => {
  const { navigation } = props;

  const db = app.firestore();
  const [activity, setActivity] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Get user if logged in
  const { authUser } = useAuth();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db]);

  const displayNewActivity = object => {
    setActivity([...activity, object]);
  };

  return (
    <View style={styles.container}>
      <HomeButton
        text="Hem"
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      ></HomeButton>
      <Title title={"Skapa en ny rutin"} />
      {authUser ? (
        <View style={styles.container}>
          <Text style={styles.text}>Steg 2 av 2</Text>
          {/* Display the created activities */}
          <View>
            <Text style={styles.routineName}>{docName}</Text>
            <View style={styles.activityInfo}>
              <Text style={styles.activityInfoText}>Uppgift</Text>
              <Text style={styles.activityInfoText}>Tid</Text>
            </View>
            {activity.map(item => (
              <View style={styles.activityCard} key={item.id}>
                <View>
                  <Text style={styles.activityCardText}>{item.name}</Text>
                </View>
                <View style={styles.rightBox}>
                  <Text style={styles.activityCardText}>
                    {item.description} min
                  </Text>
                  <RemoveActivity id={item.id} collectionId={collectionId} />
                </View>
              </View>
            ))}
          </View>
          <TouchableOpacity onPress={() => setShowForm(!showForm)}>
            {showForm ? (
              <Text>- Minimera</Text>
            ) : (
              <Text>+ Lägg till en aktivitet.</Text>
            )}           
          </TouchableOpacity>
          {showForm && (
            <AddActivity
              docName={docName}
              userId={userId}
              collectionId={collectionId}
              displayNewActivity={displayNewActivity}
            />
          )}

          <View style={styles.button}>
            <MainButton
              text="Gå vidare"
              onPress={() =>
                navigation.navigate("DisplayRoutineScreen", {
                  name: docName,
                  addedByUserUid: authUser.uid,
                  keyId: collectionId
                })
              }
            />
          </View>
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
    alignItems: "center"
  },
  text: {
    color: colors.black,
    marginTop: "2rem",
    marginBottom: "2rem",
    fontSize: "1.5rem",
    letterSpacing: "0.05em",
    fontFamily: font.main
  },
  routineName: {
    fontSize: "1.5rem",
    letterSpacing: "0.05em",
    fontFamily: font.main,
    fontWeight: "800",
    marginBottom: "2rem",
    textTransform: "capitalize"
  },
  activityInfo: {
    width: "343px",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1rem",
    paddingRight: "5rem"
  },
  activityInfoText: {
    fontSize: "1.2rem",
    letterSpacing: "0.05em",
    fontFamily: font.main,
    fontWeight: "800"
  },
  activityCard: {
    width: "343px",
    height: "50px",
    borderColor: colors.dark,
    borderWidth: "1px",
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    alignItems: "center",
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginBottom: "1rem"
  },
  activityCardText: {
    fontFamily: font.main,
    fontSize: "1rem",
    letterSpacing: "0.05em",
    textTransform: "capitalize"
  },
  rightBox: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    marginBottom: "5rem"
  }
});

export default CreateActivityScreen;
