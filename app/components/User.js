import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const User = ({ email, children }) => {
  return (
    <View style={styles.container}>
      <Text>{email}</Text>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "pink"
  }
});

export default User;
