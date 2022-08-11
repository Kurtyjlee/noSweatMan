import { useState } from "react";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import LoginButton from "../components/loginbutton";

function UploadPushUp() {
  const [text, setText] = useState("");
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Upload your push</Text>
        <Text style={styles.header}>ups score</Text>
      </View>
      <View style={styles.mainCompContainer}>
        <View style={styles.instructionsContainer}>
          <Text style={{ flex: 0, fontSize: 20, fontWeight: "bold" }}>
            Push ups in a minute
          </Text>
        </View>
        <View style={styles.ContainerTextWrapper}>
          <View style={{ flex: 1 }}>
            <Text>Repititions:</Text>
          </View>
          <View style={styles.containertext}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={setText}
              value={text}
            />
          </View>
        </View>
        <LoginButton
          onPress={() => {
            setText("");
            //   text = "";
          }}
          text={"Submit"}
        />
      </View>
    </View>
  );
}
export default UploadPushUp;

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
    alignItems: "flex-start"
  },
  header: {
    fontSize: 40,
    fontWeight: "bold"
  },
  instructionsContainer: {
    flex: 0,
    alignItems: "flex-start",
    width: "100%",
    marginTop: "10%",
    marginBottom: "5%",
    // bordorColor: "black",
    // borderWidth: 1,
    paddingHorizontal: "6%"
  },
  ContainerTextWrapper: {
    flex: 0,
    flexDirection: "row",
    width: "50%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    // bordorColor: "black",
    // borderWidth: 1,
  },
  containertext: {
    flex: 0,
    paddingVertical: 20,
    // bordorColor: "black",
    // borderWidth: 1,
  },
  input: {
    flex: 0,
    fontSize: 16,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 100,
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "#97FF95",
  },
  mainCompContainer: {
    flex: 2.2,
    paddingBottom: "5%",
    alignItems: "center",
    // bordorColor: "black",
    // borderWidth: 1,
  }
});
