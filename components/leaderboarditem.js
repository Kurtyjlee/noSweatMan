import { View, Text, StyleSheet } from "react-native";

function Leaderboarditem(name, score) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{score}</Text>
    </View>
  );
}

export default Leaderboarditem;
