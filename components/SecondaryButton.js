import { View, Text, Pressable, StyleSheet, Image } from "react-native";

function SecondaryButton({ textline, pressHandler }) {
  return (
    <View style={styles.buttonOuterContainer}>
      {/* pressed is a boolean and its name is fixed */}
      <Pressable
        // Making it a if statement, if pressed is true, array will be applied
        // if false, then the single object will be applied
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#ffada9" }}
      >
        <View style={styles.componentView}>
          <View style={styles.textView}>
            <Text style={styles.buttonText}>{textline}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default SecondaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 10,
    margin: 4,
    overflow: "hidden",
    flex: 1,
    flexDirection: "row",
  },
  // Main button style
  buttonInnerContainer: {
    backgroundColor: "#78B752",
    paddingVertical: 3,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "center",
  },
  // Button text
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  // Dedicated style for ios
  pressed: {
    opacity: 0.75,
  },
  componentView: {
    flexDirection: "row",
    flex: 1,
  },
  textView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
