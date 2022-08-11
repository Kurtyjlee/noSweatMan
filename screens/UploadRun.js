import { useState } from "react";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import LoginButton from "../components/loginbutton";

function UploadRun() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Upload your Run</Text>
        <Text style={styles.header}>Time</Text>
      </View>
      <View style={styles.mainCompContainer}>
        <View style={styles.instructionsContainer}>
          <Text style={{ flex: 0, fontSize: 20, fontWeight: "bold" }}>
            2.4km Run Duration
          </Text>
        </View>
        <View style={styles.ContainerTextWrapper}>
          <View style={{ flex: 2 }}>
            <Text>Time (mm:ss):</Text>
          </View>
          <View style={styles.containertext}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={setText}
              value={text}
              maxLength={2}
            />
          </View>
          <View style={styles.containertext}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={setText2}
              value={text2}
              maxLength={2}
            />
          </View>
        </View>
        <LoginButton
          onPress={() => {
            setText("");
            setText2("");
            //   text = "";
          }}
          text={"Submit"}
        />
      </View>
      
    </View>
  );
}
export default UploadRun;

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
    width: "80%",
    marginTop: "10%",
  },
  ContainerTextWrapper: {
    flex: 0,
    flexDirection: "row",
    width: "50%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
    // borderWidth: 1,
  },
  containertext: {
    flex: 1,
    paddingVertical: 20,
  },
  input: {
    flex: 0,
    fontSize: 16,
    backgroundColor: "#97FF95",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: 40,
    fontSize: 16,
    textAlign: "center",
  },
  mainCompContainer: {
    flex: 2.2,
    paddingBottom: "5%",
    alignItems: "center",
    // bordorColor: "black",
    // borderWidth: 1,
  }
});
