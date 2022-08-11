import { View, Text, Button, StyleSheet, Modal } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Selected from "../models/registration";

export default function BookIppt(props) {
  const locations = ["Maju FCC", "Bedok FCC", "Khatib FCC", "Kranji FCC"];
  const timing = ["0930 hrs to 1045 hrs", "1900 hrs to 2015 hrs"];
  const date = ["2022-06-15", "2022-06-16", "2022-06-17"];
  var selected = new Selected();

  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.mainContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Location: </Text>
          <SelectDropdown
            data={locations}
            buttonStyle={styles.dropDownButton}
            onSelect={(selectedItem, index) => {
              // console.log(selectedItem, index);
              selected.location = selectedItem;
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Date: </Text>
          <SelectDropdown
            data={date}
            buttonStyle={styles.dropDownButton}
            onSelect={(selectedItem, index) => {
              // console.log(selectedItem, index);
              selected.date = selectedItem;
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Time: </Text>
          <SelectDropdown
            data={timing}
            buttonStyle={styles.dropDownButton}
            onSelect={(selectedItem, index) => {
              // console.log(selectedItem, index);
              selected.time = selectedItem;
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Book" onPress={() => props.onBookIppt(selected)} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  label: {
    fontSize: 20,
  },
  dropDownButton: {
    backgroundColor: "#cccccc",
    height: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
