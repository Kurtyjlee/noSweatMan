import * as React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { HISTORY, LEADER } from "../dummy-stats/data";
import DropDownPicker from "react-native-dropdown-picker";

// Some of the variables are called Leader because I copy 99% of the code from
// LeaderboardScreen.js. I was too lazy to change them to History

export default function HistoryScreen({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Push Up", value: "pushup" },
    { label: "Sit Up", value: "situp" },
    { label: "Run", value: "run" },
  ]);
  //   if (!open) {
  //     console.log(value);
  //   }

  const displayedLeader = HISTORY.filter((leaderItem) => {
    return leaderItem.exercise == value;
  });

  function renderExerciseItem(itemData) {
    return (
      <View style={styles.listItemContainer}>
        <Text style={styles.listItem}>{itemData.item.date}</Text>
        <Text style={styles.listItem}>{itemData.item.time}</Text>
        <Text style={styles.listItem}>{itemData.item.score}</Text>
      </View>
    );
  }

  return (
    <View style={styles.maincontainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>History</Text>
      </View>
      <View style={styles.filterContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <View style={styles.listCompContainer}>
        <View style={[styles.listItemContainer, { backgroundColor: "#78B752" }]}>
          <View style={styles.listItem}>
            <Text style={styles.listHeaderText}>Date</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listHeaderText}>Time</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listHeaderText}>Score</Text>
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={displayedLeader}
            keyExtractor={(item) => item.id}
            renderItem={renderExerciseItem}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#F8FFF5",
  },
  headerContainer: {
    marginTop: 60,
    paddingVertical: 40,
    paddingHorizontal: 20,
    flex: 0.3,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  filterContainer: {
    paddingHorizontal: 40,
    flex: 0.3,
    elevation: 2,
    zIndex: 100
  },
  listContainer: {
    flex: 5,
    justifyContent: "center"
  },
  header: {
    fontSize: 40,
    fontWeight: "bold"
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#A9FF74",
    borderRadius: 10,
    marginVertical: 5,
    width: 300,
    justifyContent: "space-between"
  },
  listItem: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    width: 150,
    textAlign: "center",
    justifyContent: "center"
  },
  listHeaderText: {
    fontWeight: "bold",
    fontSize: 18
  },
  listCompContainer: {
    flex: 2.5,
    alignItems: "center",
    marginBottom: "5%"
  }
});
