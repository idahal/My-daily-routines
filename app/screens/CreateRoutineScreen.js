import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { firestore } from "../.././config/Firebase";
import Routines from ".././components/Routines";
import { collectIdsAndDocs } from "../.././config/utilities";

class CreateRoutineScreen extends React.Component {
  state = {
    routines: []
  };
  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore
      .collection("routines")
      .onSnapshot(snapshot => {
        const routines = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ routines });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  render() {
    const { routines } = this.state;

    return (
      <View style={styles.container}>
        <Text>Hejsan</Text>
        <Routines routines={routines} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "yellow"
  }
});

export default CreateRoutineScreen;
