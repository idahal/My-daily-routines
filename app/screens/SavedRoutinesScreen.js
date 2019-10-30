import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { firestore } from "../../config/firebase";
import Routines from ".././components/Routines";
import Title from ".././components/Title";
import colors from ".././constants/Colors";
import Heart from ".././icons/Heart";

import { collectIdsAndDocs } from "../.././config/utilities";

class SavedRoutineScreen extends React.Component {
  state = {
    routines: []
  };
  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore.collection("routines").onSnapshot(snapshot => {
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("HomeScreen");
          }}
        >
          <Text>HEM</Text>
        </TouchableOpacity>
        <Title title={"Mina\nsparade rutiner"} text={"Sparat"} />
        {/* <Heart></Heart> */}
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
    backgroundColor: colors.lightWhite
  },
  button: {
    marginTop: 20
  }
});

export default SavedRoutineScreen;
