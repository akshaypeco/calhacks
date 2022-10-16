import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const Drafts = ({ cityName, imgLink }) => {
  return (
    <View style={styles.root}>
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
        <View style={styles.cityNameContainer}>
          <Text numberOfLines={2} style={styles.description}>
            {cityName}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Drafts;

const styles = StyleSheet.create({
  root: {},
  cardContainer: {
    height: Dimensions.get("screen").width * 0.27,
    width: Dimensions.get("screen").width * 0.27,
    marginTop: 10,
    borderRadius: 5,
  },
  cityNameContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    width: Dimensions.get("screen").width * 0.27,
  },
  description: {
    textAlign: "center",
  },
});
