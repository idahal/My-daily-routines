import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import Activity from "./Activity";
import AddActivity from "./AddActivity";

const Activities = ({ activities }) => {
  return (
    <>
      <AddActivity />
      {activities.map(activity => (
        <Activity {...activity} key={activity.id} />
      ))}
    </>
  );
};
export default Activities;
