import { View, Text, StyleSheet, Pressable } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function TrainerGuides({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Guides</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>
          Select a sport:
        </Text>
      </View>
      <View style={styles.mainCompContainer}>
        <View style={styles.mainButtonContainer}>
          <PrimaryButton
            textline="Push Ups"
            iconlink={require("../assets/pushup.png")}
            pressHandler={() => navigation.navigate("PushUpGuide")}
            backgroundColor="#FFB470"
          />
        </View>
        <View style={styles.mainButtonContainer}>
          <PrimaryButton
            textline="Sit Ups"
            iconlink={require("../assets/situp.png")}
            pressHandler={() => navigation.navigate("SitUpGuide")}
            backgroundColor="#FFB470"
          />
        </View>
        <View style={styles.mainButtonContainer}>
          <PrimaryButton
            textline="2.4km run"
            iconlink={require("../assets/running.png")}
            pressHandler={() => navigation.navigate("RunGuide")}
            backgroundColor="#FFB470"
          />
        </View>
      </View>
    </View>
  );
}
export default TrainerGuides;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F8FFF5",
    flex: 1,
  },
  headerContainer: {
    marginTop: 60,
    paddingVertical: 40,
    paddingHorizontal: 20,
    flex: 0.3,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
  },
  mainButtonContainer: {
    flex: 1,
    padding: 15,
    width: "100%",
  },
  mainCompContainer: {
    flex: 2.7,
    paddingBottom: "5%",
    alignItems: "center",
  },
  subHeader: {
    flex: 0.3,
    alignItems: "flex-start",
    paddingHorizontal: 25,
  },
});
