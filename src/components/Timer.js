import React, { useEffect, useState } from "react";
// import { useAuth } from "../config/auth";
import { Button, StyleSheet, Text, View } from "react-native";

// const { navigation } = props;

const Timer = props => {
  // Change useState value to dynamic
  let number = props.total;
  console.log(number);
  const [count, setCounter] = useState(number);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setCounter(number);
    setIsActive(!isActive);
  }

  // Change setCounter value to dynamic
  function reset() {
    setCounter(number);
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

  console.log(count);
  return (
    <View>
      <Text>{count}</Text>

      <Button title={isActive ? "Paus" : "Start"} onPress={toggle} />
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
