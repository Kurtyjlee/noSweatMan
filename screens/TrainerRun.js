import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";

import SecondaryButton from "../components/SecondaryButton";

function TrainerRun({ navigation }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const [sound, setSound] = useState();

  async function playSound() {
    // console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/mixkit-start-match-countdown-1954.wav")
    );
    setSound(sound);

    // console.log("Playing Sound");
    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
          // console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>2.4km Run</Text>
      </View>
      <View style={styles.instructionsContainer}>
        <Text style={{ flex: 3, fontSize: 20, fontWeight: "bold" }}>
          Click the Start button to start the Stopwatch. The Stopwatch will
          start after the 'Beep!' (in 2 seconds).
        </Text>
        <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>
          Stopwatch:
        </Text>
      </View>
      <View style={styles.mainCompContainer}>
        <View style={styles.numbersWrapper}>
          <View style={styles.numbers}>
            <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>
              {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
            </Text>
          </View>
          <View style={styles.numbers}>
            <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>
              {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
            </Text>
          </View>
          <View style={styles.numbers}>
            <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>
              {("0" + Math.floor((time / 10) % 100)).slice(-2)}
            </Text>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <View style={styles.button}>
            <SecondaryButton
              textline={!running ? "Start" : "Stop"}
              pressHandler={() => {
                if (!running) {
                  playSound();
                  setTimeout(() => {
                    setRunning((prev) => !prev);
                  }, 2200);
                } else {
                  setRunning((prev) => !prev);
                }
              }}
            />
          </View>
          <View style={styles.button}>
            <SecondaryButton
              textline={"Reset"}
              pressHandler={() => {
                setTime(0);
                setRunning(false);
              }}
            />
          </View>
          <View style={styles.button}>
            <SecondaryButton
              textline={"Upload Run"}
              pressHandler={() => {
                navigation.navigate("UploadRun");
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default TrainerRun;

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
    flex: 0.5,
    alignItems: "flex-start",
    width: "100%",
    // bordorColor: "black",
    // borderWidth: 1,
    paddingHorizontal: "6%"
  },
  numbersWrapper: {
    flex: 0.5,
    flexDirection: "row",
    width: "60%",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#78B752",
    padding: 20,
    borderRadius: 30,
    // bordorColor: "black",
    // borderWidth: 1,
    marginTop: "5%"
  },
  numbers: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#A9FF74",
    padding: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    // borderWidth: 1,
    // bordorColor: "black",
    borderWidth: 1,
  },
  buttonWrapper: {
    flex: 3,
    paddingTop: "20%",
    // bordorColor: "black",
    // borderWidth: 1,
  },
  button: {
    flex: 0,
    width: "40%",
    height: "20%",
    margin: "0%",
    alignItems: "center",
    justifyContent: "center",
    // bordorColor: "black",
    // borderWidth: 1,
  },
  mainCompContainer: {
    flex: 2.2,
    paddingBottom: "5%",
    alignItems: "center"
  }
});
