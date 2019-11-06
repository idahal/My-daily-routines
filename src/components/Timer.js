import React, { useEffect, useState } from "react";
// import { useAuth } from "../config/auth";
import { Button, StyleSheet, Text, View } from "react-native";

// const { navigation } = props;

const Timer = () => {
  // Change useState value to dynamic
  const [count, setCounter] = useState(60);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  // Change setCounter value to dynamic
  function reset() {
    setCounter(60);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setCounter(count => count - 1);
      }, 1000);
    } else if (!isActive && count !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, count]);

  return (
    <View>
      <Text>{count}</Text>

      <Button title={isActive ? "Pause" : "Start"} onPress={toggle} />
      <Button title="Stop" onPress={reset} />
    </View>
  );
};

export default Timer;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-start",
//     alignItems: "center",
//     backgroundColor: colors.lightWhite
//   },
//   button: {
//     marginTop: 20,
//     color: colors.dark
//   }
// });
