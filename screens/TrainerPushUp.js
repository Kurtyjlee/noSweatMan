import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Audio } from "expo-av";

import SecondaryButton from "../components/SecondaryButton";

function TrainerPushUp({ navigation }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(false);
  const [sound, setSound] = useState();
  const [sound2, setSound2] = useState();

  async function playSound(type) {
    // console.log("Loading Sound");
    if (type == "start") {
      var { sound } = await Audio.Sound.createAsync(
        require("../assets/mixkit-start-match-countdown-1954.wav")
      );
    } else if (type == "stop") {
      var { sound } = await Audio.Sound.createAsync(
        require("../assets/mixkit-alarm-tone-996.wav")
      );
    }

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
        <Text style={styles.header}>Push Ups</Text>
      </View>
      <View style={styles.instructionsContainer}>
        <Text style={{ flex: 3, fontSize: 20, fontWeight: "bold" }}>
          Click the Start button to start the 60s timer. The timer will start
          after the 'Beep!' (in 2 seconds).
        </Text>
        <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>
          Timer:
        </Text>
      </View>
      <View style={styles.mainCompContainer}>
        <View style={styles.timerWrapper}>
          <View style={styles.timerContainer}>
            <CountdownCircleTimer
              key={key}
              isPlaying={isPlaying}
              duration={60}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              // colorsTime={[10, 5, 3, 0]}
              colorsTime={[45, 30, 15, 0]}
              onComplete={() => {
                playSound("stop");
                return { shouldRepeat: false };
              }}
            >
              {({ remainingTime, color }) => (
                <Text style={{ color, fontSize: 40 }}>{remainingTime}</Text>
              )}
            </CountdownCircleTimer>
          </View>
          <View style={styles.timerEndEarly}>
            <SecondaryButton
              textline={isPlaying ? "Pause" : "Start"}
              pressHandler={() => {
                if (!isPlaying) {
                  playSound("start");
                  setTimeout(() => {
                    setIsPlaying((prev) => !prev);
                  }, 2200);
                } else {
                  setIsPlaying((prev) => !prev);
                }
              }}
            />
          </View>
          <View style={styles.timerEndEarly}>
            <SecondaryButton
              textline={"Reset"}
              pressHandler={() => {
                setKey((prev) => !prev);
                setIsPlaying(false);
              }}
            />
          </View>
          <View style={styles.timerEndEarly}>
            <SecondaryButton
              textline={"Upload Push Up"}
              pressHandler={() => {
                navigation.navigate("UploadPushUp");
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default TrainerPushUp;

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
    width: "100%",
    // bordorColor: "black",
    // borderWidth: 1,
    paddingHorizontal: "6%"
  },
  timerWrapper: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    // bordorColor: "black",
    // borderWidth: 1
  },
  timerContainer: {
    flex: 5,
    width: "80%",
    borderRadius: 28,
    marginBottom: "5%",
    alignItems: "center",
    // bordorColor: "black",
    // borderWidth: 1,
    justifyContent: "center"
  },
  timerEndEarly: {
    flex: 1,
    width: "50%",
    // backgroundColor: "#79FF63",
    // borderRadius: 20,
    // height: 30,
    alignItems: "center",
    justifyContent: "center",
    // bordorColor: "black",
    // borderWidth: 1
  },
  emptySpace: {
    flex: 0.2,
  },
  mainCompContainer: {
    flex: 2.2,
    paddingBottom: "5%",
    alignItems: "center"
  }
});
