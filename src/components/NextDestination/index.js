import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const NextDestination = ({ text, imgLink }) => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <Image
          source={imgLink}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
          }}
        />
      </View>
      <Text style={{ marginLeft: 35, marginTop: 6, fontWeight: "bold" }}>
        {text}
      </Text>
    </View>
  );
};

export default NextDestination;

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  cardContainer: {
    backgroundColor: "lightgrey",
    height: 120,
    width: Dimensions.get("screen").width * 0.4,
    marginLeft: 30,
    marginTop: 10,
    borderRadius: 5,
  },
});
