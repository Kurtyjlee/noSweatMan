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

const videoSeries = ["UMaZGY6CbC4"];

const SitUpGuide = () => {
  const [modalVisible, showModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoPress = useCallback((videoId) => {
    showModal(true);
    setSelectedVideo(videoId);
  }, []);

  const closeModal = useCallback(() => showModal(false), []);

  return (
    <View style={{ flex: 1, backgroundColor: "#F8FFF5" }}>
      <SafeAreaView
        style={{
          margin: 25,
          flex: 1,
        }}
      >
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
            style={{ flex: 1, width: "100%" }}
            contentContainerStyle={{ margin: 15 }}
            ListHeaderComponent={
              <>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Sit Up Resources
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
              title="Sit Up Techniques"
              uri="https://media.istockphoto.com/photos/shot-of-a-young-man-doing-crunches-in-a-gym-picture-id1370649785?b=1&k=20&m=1370649785&s=170667a&w=0&h=u72ZZ0M3h3Bdu-dWwSzhpuHX1G6AWFpKTqUs_r89y_0="
              infoPage="https://www.livestrong.com/article/487008-how-to-do-a-correct-sit-up/"
              paraData="Proper form is important in preventing injuries. Learn to perform a proper sit up here!"
            />
            <CreateCard
              title="Creating a training plan"
              uri="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              infoPage="https://barbend.com/beginner-push-up-program/"
              paraData="Training consistently is important to ensure that you can improve your sit up count. Here are some ways to do so."
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

export default SitUpGuide;
