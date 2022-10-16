import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Collections = ({ text, imgLink }) => {
  return (
    <View style={styles.root}>
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
      <Text style={{ marginLeft: 5, marginTop: 6, fontWeight: "bold" }}>
        {text}
      </Text>
    </View>
  );
};

export default Collections;

const styles = StyleSheet.create({
  root: {},
  cardContainer: {
    height: 220,
    width: Dimensions.get("screen").width * 0.4,
  },
});
