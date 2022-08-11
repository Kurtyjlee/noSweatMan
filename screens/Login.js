import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

import LoginButton from "../components/loginbutton";

function LoginScreen({ navigation, route }) {
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
      // navigation.navigate("Home Page");
      route.params.setState(true);
      console.log("Logined");
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
      <View>
        <LoginButton onPress={pressHandler} text={"Login"} />
      </View>
    </View>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FFF5",
    alignItems: "center"
  },
  imagewrapper: {
    flex: 0.5,
    width: "70%",
    height: "30%",
    resizeMode: "contain",
    borderBottomColor: "black",
    marginTop: 100
  },
  containertext: {
    marginVertical: 10,
    backgroundColor: "#97FF95",
    height: 30,
    width: "50%",
    borderRadius: 20,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    paddingHorizontal: 22,
    fontSize: 16,
    backgroundColor: "#97FF95",
  }
});
