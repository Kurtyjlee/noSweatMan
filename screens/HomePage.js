import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput, View, StyleSheet, Text } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

const Stack = createNativeStackNavigator();

function HomePage({ navigation }) {
  // function pressIPPTtrainerHandler() {
  //   navigation.navigate("IPPT Trainer");
  // }
  return (
    <View style={styles.overallContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Welcome back,</Text>
        {/* Username goes here */}
        <Text style={styles.header}>Admin!</Text>
      </View>
      <View style={styles.mainCompContainer}>
        <View style={styles.mainButtonContainer}>
          <PrimaryButton
            textline="IPPT Trainer"
            iconlink={require("../assets/running.png")}
            pressHandler={() => navigation.navigate("IPPT Trainer")}
            backgroundColor="#A9FF74"
          />
        </View>
        <View style={styles.subButtonContainer}>
          <PrimaryButton
            textline="Upload scores"
            iconlink={require("../assets/uploadscores.png")} // Change the file location later
            pressHandler={() => navigation.navigate("UploadScores")}
            backgroundColor="#FFED50"
          />
        </View>
        <View style={styles.subButtonContainer}>
          <PrimaryButton
            textline="Book IPPT"
            iconlink={require("../assets/situp.png")} // Change the file location later
            pressHandler={() => navigation.navigate("BookIPPT")}
            backgroundColor="#FF8B8B"
          />
        </View>
        <View style={styles.subButtonContainer}>
          <PrimaryButton
            textline="Health Checkup"
            iconlink={require("../assets/healthcheckup.png")} // Change the file location later
            pressHandler={() => navigation.navigate("HealthCheckUp")}
            backgroundColor="#00DFED"
          />
        </View>
      </View>
    </View>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  overallContainer: {
    backgroundColor: "#F8FFF5",
    flex: 1,
  },
  headerContainer: {
    marginTop: 60,
    paddingVertical: 40,
    paddingHorizontal: 20,
    flex: 0.3,
    justifyContent: "center",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
  },
  mainButtonContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  subButtonContainer: {
    flex: 0.6,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  mainCompContainer: {
    flex: 2.8,
    paddingBottom: "5%",
  },
});
