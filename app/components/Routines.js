import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import Routine from "./Routine";
import AddRoutine from "./AddRoutine";

const Routines = ({ routines }) => {
  return (
    <>
      <AddRoutine />
      {routines.map(routine => (
        <Routine {...routine} key={routine.id} />
      ))}
    </>
  );
};
export default Routines;
