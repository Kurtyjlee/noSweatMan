import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  Image,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
  Linking,
} from "react-native";
import YoutubeIframe, { getYoutubeMeta } from "react-native-youtube-iframe";
import { Card, Button, Title, Paragraph } from "react-native-paper";

const videoSeries = ["CCZGD55NxGo", "kzSJvEbIKi4"];

const PushUpGuide = () => {
  const [modalVisible, showModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoPress = useCallback((videoId) => {
    showModal(true);
    setSelectedVideo(videoId);
  }, []);

  const closeModal = useCallback(() => showModal(false), []);

  return (
    <View style={{ flex: 1, backgroundColor: "#F8FFF5" }}>
      <SafeAreaView style={{ margin: 25, flex: 1 }}>
        <View
          style={{
            flex: 1,
            margin: 20,
            borderColor: "black",
            backgroundColor: "#DFFFCC",
            paddingBottom: "10%",
            borderRadius: 20,
          }}
        >
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ margin: 25 }}
            ListHeaderComponent={
              <>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Push Up Resources
                </Text>
              </>
            }
            data={videoSeries}
            renderItem={({ item }) => (
              <VideoItem videoId={item} onPress={onVideoPress} />
            )}
            keyExtractor={(item) => item}
          />
        </View>
        <Modal
          visible={modalVisible}
          transparent={true}
          onRequestClose={closeModal}
        >
          <VideoModal videoId={selectedVideo} onClose={closeModal} />
        </Modal>
        <View style={{ flex: 3 }}>
          <ScrollView>
            <CreateCard
              title="Push Up Techniques"
              uri="https://www.byrdie.com/thmb/1lkMg3SyekOyxrnlfSEJGu0RtWc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pushupprimary-2ad793811a3a4ad3817e3632e5813698.jpg"
              infoPage="https://www.byrdie.com/how-to-do-a-pushup-5091994"
              paraData="Proper form is important in preventing injuries. Learn to perform a proper push up here!"
            />
            <CreateCard
              title="Creating a training plan"
              uri={
                "https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cnVubmluZyUyMHRyYWluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              }
              infoPage="https://barbend.com/beginner-push-up-program/"
              paraData="Training consistently is important to ensure that you can improve your push up count. Here are some ways to do so."
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const CreateCard = ({ title, uri, infoPage, paraData }) => {
  return (
    <Card
      style={styles.cardStyle}
      onPress={() => {
        Linking.openURL(infoPage);
      }}
    >
      <Card.Content>
        <Title>{title}</Title>
      </Card.Content>
      <Card.Cover
        source={{
          uri: uri,
        }}
      />
      <Card.Content>
        <Paragraph>{paraData}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const VideoItem = ({ videoId, onPress }) => {
  const [videoMeta, setVideoMeta] = useState(null);
  useEffect(() => {
    getYoutubeMeta(videoId).then((data) => {
      setVideoMeta(data);
    });
  }, [videoId]);

  if (videoMeta) {
    return (
      <TouchableOpacity
        onPress={() => onPress(videoId)}
        style={{ flexDirection: "row", marginVertical: 16 }}
      >
        <Image
          source={{ uri: videoMeta.thumbnail_url }}
          style={{
            width: videoMeta.thumbnail_width / 4,
            height: videoMeta.thumbnail_height / 4,
          }}
        />
        <View style={{ justifyContent: "center", marginStart: 16 }}>
          <Text style={{ marginVertical: 4, fontWeight: "bold" }}>
            {videoMeta.title}
          </Text>
          <Text>{videoMeta.author_name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return null;
};

const VideoModal = ({ videoId, onClose }) => {
  const playerRef = useRef(null);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000000dd",
        justifyContent: "center",
      }}
    >
      <View style={{ backgroundColor: "white", padding: 16 }}>
        <Text onPress={onClose} style={{ textAlign: "right" }}>
          Close
        </Text>
        <YoutubeIframe
          ref={playerRef}
          play={true}
          videoId={videoId}
          height={250}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: 25,
    alignContent: "center",
    margin: 37,
  },
});

export default PushUpGuide;
