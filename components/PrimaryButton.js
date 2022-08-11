import { View, Text, Pressable, StyleSheet, Image } from "react-native";

function PrimaryButton({ textline, iconlink, pressHandler, backgroundColor }) {
  return (
    <View style={styles.buttonOuterContainer}>
      {/* pressed is a boolean and its name is fixed */}
      <Pressable
        // Making it a if statement, if pressed is true, array will be applied
        // if false, then the single object will be applied
        style={({ pressed }) =>
          pressed
            ? [
                styles.pressed,
                styles.buttonInnerContainer,
                { backgroundColor: backgroundColor },
              ]
            : [
                styles.buttonInnerContainer,
                { backgroundColor: backgroundColor },
              ]
        }
        onPress={pressHandler}
        android_ripple={{ color: "#ffada9" }}
      >
        <View style={styles.componentView}>
          <View style={styles.imageView}>
            <Image style={styles.image} source={iconlink} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.buttonText}>{textline}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    flex: 1,
    flexDirection: "row",
  },
  // Main button style
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "center",
  },
  // Button text
  buttonText: {
    textAlign: "center",
    fontSize: 30,
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
  imageView: {
    flex: 0.25,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  textView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
