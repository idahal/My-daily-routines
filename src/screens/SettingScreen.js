import React from "react";
import firebase from "../config/firebase";
import { useAuth } from "../config/auth";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import HomeButton from "../components/HomeButton";
import GotoButton from "../components/GotoButton";
import colors from "../constants/Colors";
import font from "../constants/Fonts";

const SavedRoutineScreen = props => {
  const { navigation } = props;

  // Get user if logged in
  const { authUser } = useAuth();

  var user = firebase.auth().currentUser;
  const deleteUser = () => {
    user
      .delete()
      .then(function() {
        console.log("Successfully deleted user");
        navigation.navigate("LogInScreen");
      })
      .catch(function(error) {
        console.log("Error deleting user:", error);
      });
  };

  return (
    <View style={styles.container}>
      <HomeButton
        text="Hem"
        onPress={() => navigation.navigate("HomeScreen")}
      ></HomeButton>
      <Title title={"Ändra mitt konto"} />
      {authUser ? (
        <View style={styles.listContainer}>
          <View style={styles.settingsCard}>
            <Text style={styles.settingsCardText}>Avsluta konto</Text>
            <GotoButton text={"Radera"} onPress={deleteUser}></GotoButton>
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
  listContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },

  settingsCard: {
    marginTop: "2rem",
    width: "343px",
    height: "100px",
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
  settingsCardText: {
    fontFamily: font.main,
    fontWeight: "800",
    color: colors.dark,
    fontSize: "1.2rem",
    letterSpacing: "0.05em"
  }
});
export default SavedRoutineScreen;
