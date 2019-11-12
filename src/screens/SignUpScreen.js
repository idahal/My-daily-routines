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
import Hero from "../components/Hero";
import MainButton from "../components/MainButton";
import colors from "../constants/Colors";
import font from "../constants/Fonts";

const SignUpScreen = props => {
  const { navigation } = props;
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [setUserError] = useState("");

  const [setLoading] = useState(false);

  // Get user if logged in
  const { authUser } = useAuth();

  const resetInput = () => {
    setUserEmail("");
    setUserPassword("");
    setUserError("");
  };

  const isInvalid = userEmail === "" || userPassword === "";

  const submitForm = async e => {
    e.preventDefault();
    setLoading(true);
    setUserError(null);
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(userEmail, userPassword);
      // redirect user?
    } catch (err) {
      setUserError(err);
    } finally {
      setLoading(false);
      resetInput();
    }
  };

  return (
    <View style={styles.container}>
      <Hero />
      <Text style={styles.text}>Registrera ditt konto här:</Text>

      {authUser ? (
        <Text>Du är redan inloggad</Text>
      ) : (
        <View>
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChange={e => setUserEmail(e.target.value)}
            value={userEmail}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            style={styles.textInput}
            onChange={e => setUserPassword(e.target.value)}
            value={userPassword}
          />
          <MainButton
            text={"Skapa konto"}
            type="submit"
            onPress={submitForm}
            disabled={isInvalid}
          ></MainButton>
          <TouchableOpacity
            style={styles.link}
            onPress={() => navigation.navigate("LogInScreen")}
          >
            <Text style={styles.linkText}>
              Har du redan ett konto? Logga in här.
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {/* <View>{userError && <Text>{userError.message}</Text>}</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  textInput: {
    height: 50,
    width: 230,
    borderColor: colors.black,
    borderWidth: 0.5,
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
export default SignUpScreen;
