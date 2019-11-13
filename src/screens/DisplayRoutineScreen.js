import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../config/auth";
import app from "../config/firebase";

import { Button, StyleSheet, Text, View } from "react-native";
import Timer from "../components/Timer";
import Title from "../components/Title";
import HomeButton from "../components/HomeButton";
import colors from "../constants/Colors";
import font from "../constants/Fonts";

const DisplayRoutineScreen = props => {
  const { navigation } = props;

  const db = app.firestore();
  const [activity, setActivity] = useState([]);
  const [total, setTotal] = useState([]);

  // Get user if logged in
  const { authUser } = useAuth();

  //Get params from addRoutineScreen
  const docName = navigation.getParam("name");
  //   const userId = navigation.getParam("addedByUserUid");
  const collectionId = navigation.getParam("keyId");

  const countTotal = () => {
    if (activity.length > 0) {
      let timeArray = 0;
      activity.forEach(item => {
        timeArray += item.description;
      });
      setTotal(timeArray);
    }
  };

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

  useEffect(() => {
    countTotal();
  }, [activity]);

  return (
    <View style={styles.container}>
      <HomeButton
        text="Hem"
        onPress={() => navigation.navigate("HomeScreen")}
      ></HomeButton>
      <Title title={"Mina sparade rutiner"} />
      {authUser ? (
        <View style={styles.oneRoutine}>
          <Text style={styles.routineName}>{docName}</Text>
          <View style={styles.activityInfo}>
            <Text style={styles.activityInfoText}>Uppgift</Text>
            <Text style={styles.activityInfoText}>Tid</Text>
          </View>
          {activity.map(item => (
            <View style={styles.activityCard} key={item.id}>
              <Text style={styles.activityCardText}>{item.name}</Text>
              <Text style={styles.activityCardText}>
                {item.description} min
              </Text>
            </View>
          ))}
          <Text style={styles.totalText}>
            Rutinen tar {total} minuter att genomföra.
          </Text>
          <Timer total={total} />
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
  oneRoutine: {
    width: "343px",
    // height: "516px",
    borderColor: colors.dark,
    borderWidth: "1px",
    borderStyle: "solid",
    marginTop: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
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
  routineName: {
    fontSize: "1.2rem",
    letterSpacing: "0.05em",
    fontFamily: font.main,
    fontWeight: "800",
    marginTop: "1rem",
    marginBottom: "2rem",
    textTransform: "capitalize"
  },
  activityInfo: {
    width: "313px",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1rem"
  },
  activityInfoText: {
    fontSize: "1.2rem",
    letterSpacing: "0.05em",
    fontFamily: font.main,
    fontWeight: "800"
  },
  activityCard: {
    width: "313px",
    height: "50px",
    borderColor: colors.dark,
    borderWidth: "1px",
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    alignItems: "center"
  },
  activityCardText: {
    fontFamily: font.main,
    fontSize: "1rem",
    letterSpacing: "0.05em",
    textTransform: "capitalize"
  },
  totalText: {
    fontFamily: font.main,
    fontSize: "1rem",
    letterSpacing: "0.05em",
    textAlign: "center",
    marginTop: "1rem"
  }
});

export default DisplayRoutineScreen;
