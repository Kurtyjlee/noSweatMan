import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function SelectorButton({ iconlink, onPress }) {
  const [toggleState, setToggleState] = useState("");
  const [buttonBackground, setButtonBackground] = useState("#78B752");

  // button style
  function _onPress() {
    setToggleState(!toggleState);
    toggleState
      ? setButtonBackground("#78B752")
      : setButtonBackground("#B5EB95");
  }

  return (
    <View style={styles.container}>
      {/* pressed is a boolean and its name is fixed */}
      <TouchableOpacity
        style={{
          backgroundColor: buttonBackground,
          flex: 1,
          height: 110,
          width: 110,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
        }}
        onPress={() => {
          //
          onPress();
          // button style toggle
          _onPress();
        }}
      >
        <Image style={styles.image} source={iconlink} />
      </TouchableOpacity>
    </View>
  );
}

export default SelectorButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    flex: 1,
    height: 110,
    width: 110,
    justifyContent: "center",
    alignItems: "center",
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
    width: "60%",
    height: "60%",
  },
  imageView: {
    flex: 1,
    borderRadius: 20,
  },
});
