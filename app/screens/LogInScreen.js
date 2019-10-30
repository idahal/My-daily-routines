import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import firebase from "../../config/firebase";
import { useAuth } from "../.././config/auth";

const LogInScreen = props => {
  const { navigation } = props;
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userError, setUserError] = useState(null);
  // Do something while loading

  const [loading, setLoading] = useState(false);

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
      {userError && <p>{userError.message}</p>}
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

// import React from "react";
// import { StyleSheet, Text, TextInput, View, Button } from "react-native";
// import firebase from "../.././config/Firebase";

// class LogInScreen extends React.Component {
//   componentDidMount() {
//     firebase.auth().onAuthStateChanged(user => {
//       this.props.navigation.navigate(user ? "HomeScreen" : "LogInScreen");
//     });
//   }
//   state = { email: "", password: "", errorMessage: null };
//   handleLogin = () => {
//     const { email, password } = this.state;
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(() => this.props.navigation.navigate("HomeScreen"))
//       .catch(error => this.setState({ errorMessage: error.message }));
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Login</Text>
//         {this.state.errorMessage && (
//           <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
//         )}
//         <TextInput
//           style={styles.textInput}
//           autoCapitalize="none"
//           placeholder="Email"
//           onChangeText={email => this.setState({ email })}
//           value={this.state.email}
//         />
//         <TextInput
//           secureTextEntry
//           style={styles.textInput}
//           autoCapitalize="none"
//           placeholder="Password"
//           onChangeText={password => this.setState({ password })}
//           value={this.state.password}
//         />
//         <Button title="Login" onPress={this.handleLogin} />
//         <Button
//           title="Don't have an account? Sign Up"
//           onPress={() => this.props.navigation.navigate("SignUpScreen")}
//         />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   textInput: {
//     height: 40,
//     width: "90%",
//     borderColor: "gray",
//     borderWidth: 1,
//     marginTop: 8
//   }
// });

// export default LogInScreen;
