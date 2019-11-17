import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";
import firebase from "../config/firebase";
import { useAuth } from "../config/auth";
import MainButton from "../components/MainButton";
import Hero from "../components/Hero";
import colors from "../constants/Colors";
import font from "../constants/Fonts";

const LogInScreen = props => {
  const { navigation } = props;
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [inputError, setInputError] = useState("");
  const [loading, setLoading] = useState(false);

  // Get user if logged in
  const { authUser } = useAuth();

  const resetForm = () => {
    setUserEmail("");
    setUserPassword("");
    setInputError("");
  };

  const isInvalid = userEmail === "" || userPassword === "";
  const login = async e => {
    e.preventDefault();
    setLoading(true);
    setInputError(null);
    try {
      await firebase.auth().signInWithEmailAndPassword(userEmail, userPassword);
      navigation.navigate("HomeScreen");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setInputError("Du måste ange en emailadress");
      }
      if (error.code === "auth/wrong-password") {
        setInputError("Du uppgav fel lösenord");
      }
    } finally {
      setLoading(false);
      if (inputError !== "") {
        resetForm();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Hero />
      <Text style={styles.text}>Logga in här:</Text>
      {inputError !== "" && (
        <View style={styles.errors}>
          <Text style={styles.errorsText}>{inputError}</Text>
        </View>
      )}
      <View>
        {authUser ? (
          <>{navigation.navigate("HomeScreen")}</>
        ) : (
          <>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Skriv din email"
              value={userEmail}
              onChange={e => setUserEmail(e.target.value)}
            />
            <TextInput
              secureTextEntry
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Skriv ett lösenord"
              value={userPassword}
              onChange={e => setUserPassword(e.target.value)}
            />
            <MainButton
              text={"Logga in"}
              onPress={login}
              disabled={isInvalid}
            ></MainButton>
            <TouchableOpacity
              style={styles.link}
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <Text style={styles.linkText}>Inget konto? Skapa ett här.</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  errorsText: {
    fontSize: "0.8rem",
    fontFamily: font.main,
    color: colors.error,
    textAlign: "center"
  },
  textInput: {
    height: 50,
    width: 230,
    borderColor: colors.black,
    borderWidth: 0.5,
    outlineColor: colors.dark,
    borderStyle: "solid",
    marginTop: "1rem",
    fontFamily: font.main,
    paddingLeft: 5,
    marginLeft: "1rem",
    color: colors.dark,
    fontStyle: "italic"
  },
  text: {
    color: colors.black,
    marginTop: "2rem",
    marginBottom: "1rem",
    fontSize: "1.5rem",
    letterSpacing: "0.05em",
    fontFamily: font.main
  },
  link: {
    marginTop: "1rem"
  },
  linkText: {
    color: colors.black,
    fontSize: "1rem",
    letterSpacing: "0.05em",
    textAlign: "center"
  }
});

export default LogInScreen;
