import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

import colors from "../constants/Colors";

import firebase from "../../config/firebase";
import { useAuth } from "../../config/auth";

const SignUpScreen = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userError, setUserError] = useState("");

  const [loading, setLoading] = useState(false);

  // Get user if logged in
  const { authUser } = useAuth();

  const resetInput = () => {
    setUserEmail("");
    setUserPassword("");
    setUserError("");
  };

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
      <Text>Registrera ditt konto här:</Text>

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
          <Button title="Sign Up" type="submit" onPress={submitForm} />
          <Button
            title="Already have an account? Login"
            onPress={() => this.props.navigation.navigate("LogInScreen")}
          />
        </View>
      )}
      {/* <View>{userError && <Text>{userError.message}</Text>}</View> */}
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
    borderColor: colors.button,
    borderWidth: 1,
    marginTop: 8
  }
});
export default SignUpScreen;

// import React from "react";
// import { StyleSheet, Text, TextInput, View, Button } from "react-native";
// import { auth, createUsersDocument } from "../.././config/Firebase";
// import colors from "../constants/Colors";

// class SignUpScreen extends React.Component {
//   state = { email: "", password: "" };

//   handleChange = event => {
//     const { name, value } = event.target;

//     this.setState({ [name]: value });
//   };

//   handleSignup = async event => {
//     event.preventDefault();
//     const { email, password } = this.state;
//     // first create a user with email and password
//     try {
//       const { user } = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );
//       // then create a users collection with the same uid
//       createUsersDocument(user);
//     } catch (error) {
//       console.error(error);
//     }

//     this.setState({ email: "", password: "" });
//   };

//   render() {
//     const { email, password } = this.state;
//     return (
//       <View style={styles.container}>
//         <Text>Sign Up</Text>
//         {this.state.errorMessage && (
//           <Text style={{ color: colors.button }}>
//             {this.state.errorMessage}
//           </Text>
//         )}
//         <TextInput
//           placeholder="Email"
//           autoCapitalize="none"
//           style={styles.textInput}
//           onChangeText={email => this.setState({ email })}
//           value={email}
//         />
//         <TextInput
//           secureTextEntry
//           placeholder="Password"
//           autoCapitalize="none"
//           style={styles.textInput}
//           onChangeText={password => this.setState({ password })}
//           value={password}
//         />
//         <Button title="Sign Up" onPress={this.handleSignup} />
//         <Button
//           title="Already have an account? Login"
//           onPress={() => this.props.navigation.navigate("LogInScreen")}
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
//     borderColor: colors.button,
//     borderWidth: 1,
//     marginTop: 8
//   }
// });

// export default SignUpScreen;
