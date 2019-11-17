import React, { useEffect, useState } from "react";
// import { useAuth } from "../config/auth";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MainButton from "../components/MainButton";
import colors from "../constants/Colors";
import font from "../constants/Fonts";


const Timer = props => {
  let number = props.total;
  const [count, setCounter] = useState(number);
  const [isActive, setIsActive] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  function toggle() {
    setCounter(number);
    setIsActive(true);
    setShowButtons(true);
  }

  function reset() {
    setCounter(number);
    setIsActive(false);
  }

  function paus() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setCounter(count => count - 1);
      }, 60000);
    } else if (!isActive && count !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, count]);

  return (
    <View>
      <MainButton text={"Starta timer"} onPress={toggle} />
      <Text style={styles.timer}>{count}</Text>
      {showButtons && (
        <View style={styles.timerButtons}>
          <TouchableOpacity onPress={paus}>
            {isActive ? (
              <Text style={styles.timerText}>Pausa</Text>
            ) : (
              <Text style={styles.timerText}>Starta</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={reset}>
            <Text style={styles.timerText}>Stoppa</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.lightWhite
  },
  button: {
    marginTop: 20,
    color: colors.dark
  },
  timer: {
    fontFamily: font.main,
    fontSize: "4rem",
    textAlign: "center",
    marginTop: "1rem"
  },
  timerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "1rem"
  },
  timerText: {
    fontFamily: font.main,
    fontSize: "1rem",
    textAlign: "center",
    marginTop: "1rem",
    textTransform: "uppercase"
  }
});
