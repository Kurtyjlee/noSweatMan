import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

import LoginButton from "../components/loginbutton";

function LoginScreen({ navigation }) {
  const [text, onChangeText] = useState("");
  const [textpw, onChangepw] = useState("");

  function changeUserHandler(enteredText) {
    onChangeText(enteredText);
  }
  function changePasswordHandler(enteredText) {
    onChangepw(enteredText);
  }

  function pressHandler() {
    if (
      text.replace(/ /g, "").toLowerCase() === "admin" &&
      textpw.replace(/ /g, "").toLowerCase() === "admin"
    ) {
      navigation.navigate("Home Page");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imagewrapper}>
        <Image
          style={{ flex: 1, resizeMode: "contain", width: "100%" }}
          source={require("../assets/Logo.png")}
        />
      </View>
      <Text>Username</Text>
      <View style={styles.containertext}>
        <TextInput
          styles={styles.input}
          onChangeText={changeUserHandler}
          value={text}
        />
      </View>
      <Text>Password</Text>
      <View style={styles.containertext}>
        <TextInput
          styles={styles.input}
          onChangeText={changePasswordHandler}
          value={textpw}
          secureTextEntry={true}
        />
      </View>
      <LoginButton onPress={pressHandler} />
    </View>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FFF5",
    alignItems: "center",
    justifyContent: "center",
  },
  imagewrapper: {
    flex: 0,
    width: "70%",
    height: "30%",
    resizeMode: "contain",
    borderBottomColor: "black",
  },
  containertext: {
    marginVertical: 10,
    flex: 0,
    backgroundColor: "#97FF95",
    height: 30,
    width: "50%",
    borderRadius: 20,
  },
  input: {
    flex: 1,
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    paddingLeft: 20,
    fontSize: 16,
    backgroundColor: "#97FF95",
  },
  button: {},
});
