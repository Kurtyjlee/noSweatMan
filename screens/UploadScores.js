import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  TextInput,
  Button,
} from "react-native";

import SelectorButton from "../components/SelectorButton";
import uploadScores from "../models/UploadScores";
import SubmitButton from "../components/submitButton";

function UploadScores() {
  const [pushUp, setPushUp] = useState(false);
  const [sitUp, setSitUp] = useState(false);
  const [run, setRun] = useState(false);
  const [pushUpText, setPushUpText] = useState("");
  const [sitUpText, setSitUpText] = useState("");
  const [runMinText, setRunMinText] = useState("");
  const [runSecText, setRunSecText] = useState("");

  const displayData = [
    new uploadScores("1", "pushup"),
    new uploadScores("2", "situp"),
    new uploadScores("3", "run"),
    new uploadScores("4", "submit"),
  ];

  // Render the thing in the list
  function renderExerciseItem(itemData) {
    if (itemData.item.exercise == "pushup" && pushUp) {
      return (
        <View style={styles.listItemContainer}>
          <Text style={styles.listItemHeader}>Push ups in a minute</Text>
          <View style={styles.textAndInputContainer}>
            <Text style={styles.listItem}>Repetitions: </Text>
            <TextInput
              style={styles.textInputStyle}
              keyboardType="numeric"
              onChangeText={setPushUpText}
              value={pushUpText}
              maxLength={2}
            />
          </View>
        </View>
      );
    } else if (itemData.item.exercise == "situp" && sitUp) {
      return (
        <View style={styles.listItemContainer}>
          <Text style={styles.listItemHeader}>Sit ups in a minute</Text>
          <View style={styles.textAndInputContainer}>
            <Text style={styles.listItem}>Repetitions: </Text>
            <TextInput
              style={styles.textInputStyle}
              keyboardType="numeric"
              onChangeText={setSitUpText}
              value={sitUpText}
              maxLength={2}
            />
          </View>
        </View>
      );
    } else if (itemData.item.exercise == "run" && run) {
      return (
        <View style={styles.listItemContainer}>
          <Text style={styles.listItemHeader}>Run/Walk</Text>
          <View style={styles.textAndInputContainer}>
            <Text style={styles.listItem}>Time (mm:ss): </Text>
            <TextInput
              style={styles.textInputStyle}
              keyboardType="numeric"
              onChangeText={setRunMinText}
              value={runMinText}
              maxLength={2}
            />
            <TextInput
              style={styles.textInputStyle}
              keyboardType="numeric"
              onChangeText={setRunSecText}
              value={runSecText}
              maxLength={2}
            />
          </View>
        </View>
      );
    } else if ((run || pushUp || sitUp) && itemData.item.exercise == "submit") {
      return (
        <View style={styles.listButtonContainer}>
          <SubmitButton
            onPress={() => {
              setPushUpText("");
              setSitUpText("");
              setRunSecText("");
              setRunMinText("");
            }}
            text={"Submit"}
          />
        </View>
      );
    }
  }

  return (
    <View style={styles.overallContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Upload your</Text>
        {/* Username goes here */}
        <Text style={styles.header}>Scores for today!</Text>
      </View>

      <View style={styles.mainButtonContainer}>
        <View style={styles.textContainer}>
          <Text style={{ fontWeight: "bold" }}>
            Select completed exercises:
          </Text>
        </View>
        <View style={styles.subButtonContainer}>
          <Pressable>
            <View style={styles.button}>
              <SelectorButton
                iconlink={require("../assets/pushup.png")}
                onPress={() => {
                  setPushUp(!pushUp);
                }}
              />
            </View>
          </Pressable>
          <View style={styles.button}>
            <SelectorButton
              iconlink={require("../assets/situp.png")}
              onPress={() => {
                setSitUp(!sitUp);
              }}
            />
          </View>
          <View style={styles.button}>
            <SelectorButton
              iconlink={require("../assets/running.png")}
              onPress={() => {
                setRun(!run);
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <FlatList
          // Data to put into the list
          data={displayData}
          // Dummy key some placeholder
          keyExtractor={(item) => item.id}
          renderItem={renderExerciseItem}
        />
      </View>
    </View>
  );
}

export default UploadScores;

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
    fontSize: 40,
    fontWeight: "bold",
  },
  mainButtonContainer: {
    flex: 0.65,
    paddingHorizontal: 15,
    width: "100%",
    alignItems: "center",
  },
  textContainer: {
    alignItems: "flex-start",
    width: "100%",
  },
  subButtonContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: 110,
    height: 110,
  },
  mainContainer: {
    flex: 2.15,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    marginTop: 20,
  },
  listItemContainer: {
    flex: 1,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    width: 250,
  },
  listItem: {
    padding: 10,
    width: "50%",
  },
  listItemHeader: {
    padding: 10,
    fontWeight: "bold",
  },
  textInputStyle: {
    height: 30,
    backgroundColor: "#97FF95",
    borderRadius: 20,
    width: 50,
    padding: 6,
    textAlign: "center",
  },
  textAndInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  listButtonContainer: {
    alignItems: "center",
    width: "100%",
  },
});
