import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { firestore } from "../.././config/Firebase";
import Activities from ".././components/Activities";
import { collectIdsAndDocs } from "../.././config/utilities";

class CreateActivityScreen extends React.Component {
  state = {
    activities: []
  };
  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore
      .collection("activities")
      .onSnapshot(snapshot => {
        const activities = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ activities });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  render() {
    const { activities } = this.state;

    return (
      <View style={styles.container}>
        <Text>Hejsan</Text>
        <Activities activities={activities} />
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

export default CreateActivityScreen;
