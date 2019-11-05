import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import firebase from "../config/firebase";
import { useAuth } from "../config/auth";

const LogInScreen = props => {
  const { navigation } = props;
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userError, setUserError] = useState(null);
  // Do something while loading

  const [setLoading] = useState(false);

  // Get user if logged in
  const { authUser } = useAuth();

  const resetForm = () => {
    setUserEmail("");
    setUserPassword("");
    setUserError("");
  };

  const logout = () => {
    firebase.auth().signOut();
  };

  const login = async e => {
    e.preventDefault();
    setLoading(true);
    setUserError(null);
    try {
      await firebase.auth().signInWithEmailAndPassword(userEmail, userPassword);
      // redirect user?
      navigation.navigate("HomeScreen");
    } catch (err) {
      setUserError(err);
    } finally {
      setLoading(false);
      resetForm();
    }
  };

  return (
    <View style={styles.container}>
      <Text>Logga in här:</Text>
      <View>
        {authUser ? (
          <>
            {navigation.navigate("HomeScreen")}
            <Text>Du är inloggad</Text>
            <Button title="Logga ut" type="submit" onPress={logout} />
          </>
        ) : (
          <>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Email"
              value={userEmail}
              onChange={e => setUserEmail(e.target.value)}
            />
            <TextInput
              secureTextEntry
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Password"
              value={userPassword}
              onChange={e => setUserPassword(e.target.value)}
            />
            <Button title="Login" onPress={login} />
            <Button
              title="Don't have an account? Sign Up"
              onPress={() => navigation.navigate("SignUpScreen")}
            />
          </>
        )}
      </View>
      {userError && <Text>{userError.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8
  }
});

export default LogInScreen;
