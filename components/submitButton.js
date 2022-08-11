import { Pressable, View, Text, StyleSheet } from "react-native";

function SubmitButton({ onPress, text }) {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "grey" }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={{ color: "black" }}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default SubmitButton;

const styles = StyleSheet.create({
  gridItem: {
    flex: 0,
    margin: 16,
    height: 25,
    width: 100,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    justifyContent: "flex-end",
  },
  buttonInnerContainer: {
    backgroundColor: "#A9FF74",
    flex: 1,
    justifyContent: "center",
    borderRadius: 15,
  },
  // Dedicated style for ios
  pressed: {
    opacity: 0.75
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 0,
    // padding: 16,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
});