import React, { useEffect, useState, useRef } from "react";
// import { useAuth } from "../config/auth";
import { Button, StyleSheet, Text, View } from "react-native";
import Timer from "../components/Timer";

const DisplayRoutineScreen = props => {
  // const { navigation } = props;

  return (
    <View>
      <Timer />
    </View>
  );
};

export default DisplayRoutineScreen;
