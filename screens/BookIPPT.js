import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import { useState } from "react";

import BookIppt from "../components/BookIppt";

export default function BookIPPT() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [bookings, setBookings] = useState([]);

  function startBookIpptHandler() {
    setModalIsVisible(true);
  }

  function cancelBookIpptHandler() {
    setModalIsVisible(false);
  }

  function bookIpptHandler(array) {
    setBookings((bookings) => [...bookings, array]);
    console.log(bookings);
    setModalIsVisible(false);
  }

  function renderListItem(itemData) {
    return (
      <View style={styles.listItemContainer}>
        <Text style={styles.listItem}>{itemData.item.location}</Text>
        <Text style={styles.listItem}>{itemData.item.date}</Text>
        <Text style={styles.listItem}>{itemData.item.time}</Text>
      </View>
    );
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.header}>IPPT Booking</Text>
      </View>
      <View style={styles.mainCompContainer}>
        <Pressable
          onPress={startBookIpptHandler}
          style={({ pressed }) => (pressed ? styles.pressed : {})}
          android_ripple={{ color: "#ffada9" }}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Book IPPT</Text>
            <View style={styles.imageContainer}>
              <Image
                style={styles.buttonImg}
                source={require("../assets/situp.png")}
              />
            </View>
          </View>
        </Pressable>
        <BookIppt
          visible={modalIsVisible}
          onCancel={cancelBookIpptHandler}
          onBookIppt={bookIpptHandler}
        />
        <View
          style={[
            styles.listItemContainer,
            { flex: 0, backgroundColor: "#F35151" },
          ]}
        >
          <View style={styles.listItem}>
            <Text>Location</Text>
          </View>
          <View style={styles.listItem}>
            <Text>Date</Text>
          </View>
          <View style={styles.listItem}>
            <Text>Time</Text>
          </View>
        </View>
        <FlatList
          data={bookings}
          keyExtractor={(item) => item.id}
          renderItem={renderListItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#F8FFF5",
  },
  headingContainer: {
    marginTop: 60,
    paddingVertical: 40,
    paddingHorizontal: 20,
    flex: 0.3,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
  },
  // Dedicated style for ios
  pressed: {
    opacity: 0.75,
  },
  mainCompContainer: {
    flex: 2.8,
    paddingHorizontal: 15,
  },
  bookingContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#FF8B8B",
    height: 100,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "800",
    paddingLeft: 20,
  },
  buttonImg: {
    width: 60,
    height: 50,
    resizeMode: "contain",
  },
  imageContainer: {
    backgroundColor: "#F35151",
    padding: 6,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: 80,
    height: 80,
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFD9D9",
    borderRadius: 15,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  listItem: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});
